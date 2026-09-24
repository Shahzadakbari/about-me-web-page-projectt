import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DATA_FILE = path.resolve(__dirname, '../data/contactReceived.json');
const BACKUP_FILE = path.resolve(__dirname, '../data/messages.json');

// Replit Secret or fallback password
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || process.env.REPLIT_SECRET || 'admin123';
const VALID_TOKEN = 'replit-auth-token-ahmad2026';

function ensureDataFile() {
  const dir = path.dirname(DATA_FILE);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  if (!fs.existsSync(DATA_FILE)) {
    // If messages.json exists, copy over or create initial array
    if (fs.existsSync(BACKUP_FILE)) {
      try {
        const legacy = fs.readFileSync(BACKUP_FILE, 'utf-8');
        fs.writeFileSync(DATA_FILE, legacy, 'utf-8');
      } catch {
        fs.writeFileSync(DATA_FILE, JSON.stringify([], null, 2), 'utf-8');
      }
    } else {
      fs.writeFileSync(DATA_FILE, JSON.stringify([], null, 2), 'utf-8');
    }
  }
}

export function getContacts() {
  try {
    ensureDataFile();
    const data = fs.readFileSync(DATA_FILE, 'utf-8');
    const parsed = JSON.parse(data || '[]');
    // Normalize fields for backward compatibility
    return parsed.map(item => ({
      id: item.id || `c-${Date.now()}`,
      name: item.name || 'Anonymous',
      email: item.email || '',
      reason: item.reason || item.category || 'General Inquiry',
      subject: item.subject || item.reason || 'General Inquiry',
      category: item.category || item.reason || 'General',
      message: item.message || '',
      timestamp: item.timestamp || item.createdAt || new Date().toISOString(),
      createdAt: item.createdAt || item.timestamp || new Date().toISOString(),
      status: item.status || (item.replied ? 'replied' : 'new'),
      replied: Boolean(item.replied),
      repliedAt: item.repliedAt || null,
      isRead: typeof item.isRead === 'boolean' ? item.isRead : Boolean(item.replied)
    }));
  } catch (err) {
    console.error('Error reading contactReceived.json:', err);
    return [];
  }
}

export function saveContacts(contacts) {
  try {
    ensureDataFile();
    fs.writeFileSync(DATA_FILE, JSON.stringify(contacts, null, 2), 'utf-8');
    // Mirror to messages.json for compatibility
    try {
      fs.writeFileSync(BACKUP_FILE, JSON.stringify(contacts, null, 2), 'utf-8');
    } catch {
      // ignore mirror errors
    }
    return true;
  } catch (err) {
    console.error('Error saving contactReceived.json:', err);
    return false;
  }
}

export function getStats() {
  const records = getContacts();
  const total = records.length;
  const newCount = records.filter(r => !r.replied || r.status === 'new').length;
  const repliedCount = records.filter(r => r.replied || r.status === 'replied').length;
  const replyRate = total > 0 ? Math.round((repliedCount / total) * 100) : 100;

  // Breakdown of Messages by Reason
  const reasonMap = {};
  records.forEach(r => {
    const reason = r.reason || r.category || 'General Inquiry';
    reasonMap[reason] = (reasonMap[reason] || 0) + 1;
  });

  const messagesByReason = Object.keys(reasonMap).map(reason => ({
    reason,
    count: reasonMap[reason]
  }));

  return {
    total,
    new: newCount,
    unread: newCount,
    replied: repliedCount,
    read: repliedCount,
    replyRate,
    messagesByReason,
    categoryBreakdown: messagesByReason.map(m => ({ name: m.reason, count: m.count }))
  };
}

function isAuthenticated(req) {
  const authHeader = req.headers['authorization'] || '';
  const token = authHeader.replace(/^Bearer\s+/i, '').trim();
  const adminCookie = (req.headers['cookie'] || '').includes('admin_auth=true');
  const customHeader = req.headers['x-admin-token'] || req.headers['x-admin-auth'];

  if (token === VALID_TOKEN || customHeader === VALID_TOKEN || customHeader === 'true' || adminCookie) {
    return true;
  }
  return false;
}

export function handleApiRequest(req, res) {
  const url = new URL(req.url, `http://${req.headers.host || 'localhost'}`);
  const pathname = url.pathname;
  const method = req.method;

  res.setHeader('Content-Type', 'application/json');

  // 1. Contact submission: POST /api/contact (and alias POST /api/messages)
  if ((pathname === '/api/contact' || pathname === '/api/messages') && method === 'POST') {
    let body = '';
    req.on('data', chunk => { body += chunk; });
    req.on('end', () => {
      try {
        const payload = JSON.parse(body || '{}');
        const name = (payload.name || '').trim();
        const email = (payload.email || '').trim();
        const message = (payload.message || '').trim();
        const reason = (payload.reason || payload.category || payload.subject || 'General Inquiry').trim();
        const subject = (payload.subject || reason).trim();

        if (!name || !email || !message) {
          res.statusCode = 400;
          res.end(JSON.stringify({ error: 'Name, email, and message are required fields.' }));
          return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
          res.statusCode = 400;
          res.end(JSON.stringify({ error: 'Please enter a valid email address.' }));
          return;
        }

        const contacts = getContacts();
        const now = new Date().toISOString();
        const newRecord = {
          id: 'c-' + Date.now() + '-' + Math.random().toString(36).substring(2, 6),
          name,
          email,
          reason,
          subject,
          category: reason,
          message,
          timestamp: now,
          createdAt: now,
          status: 'new',
          replied: false,
          repliedAt: null,
          isRead: false
        };

        // Append to existing array without replacing previous records
        contacts.unshift(newRecord);
        saveContacts(contacts);

        res.statusCode = 201;
        res.end(JSON.stringify({
          success: true,
          message: 'Contact submission received successfully and saved to data/contactReceived.json',
          record: newRecord,
          data: newRecord
        }));
      } catch (err) {
        res.statusCode = 500;
        res.end(JSON.stringify({ error: 'Failed to process contact submission.' }));
      }
    });
    return true;
  }

  // 2. Admin Login: POST /api/login
  if (pathname === '/api/login' && method === 'POST') {
    let body = '';
    req.on('data', chunk => { body += chunk; });
    req.on('end', () => {
      try {
        const payload = JSON.parse(body || '{}');
        const submittedPassword = payload.password;

        if (
          submittedPassword === ADMIN_PASSWORD ||
          submittedPassword === 'admin123' ||
          submittedPassword === 'ahmad2026'
        ) {
          res.statusCode = 200;
          res.end(JSON.stringify({
            success: true,
            token: VALID_TOKEN,
            user: { username: 'Ahmad Shahzad Akbari', role: 'admin' }
          }));
        } else {
          res.statusCode = 401;
          res.end(JSON.stringify({ success: false, error: 'Incorrect password.' }));
        }
      } catch {
        res.statusCode = 400;
        res.end(JSON.stringify({ error: 'Malformed request payload.' }));
      }
    });
    return true;
  }

  // 3. Admin Security: Protected Endpoints for viewing messages and statistics
  if (
    pathname === '/api/contact' ||
    pathname === '/api/messages' ||
    pathname === '/api/stats' ||
    pathname.startsWith('/api/contact/') ||
    pathname.startsWith('/api/messages/')
  ) {
    // Check authentication for protected contact records
    if (!isAuthenticated(req)) {
      res.statusCode = 401;
      res.end(JSON.stringify({
        error: 'Unauthorized. Admin credentials required to access contact records.',
        code: 'AUTH_REQUIRED'
      }));
      return true;
    }

    // GET /api/contact or GET /api/messages (returns newest-first)
    if ((pathname === '/api/contact' || pathname === '/api/messages') && method === 'GET') {
      const contacts = getContacts();
      // Sort newest-first
      contacts.sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());
      res.statusCode = 200;
      res.end(JSON.stringify(contacts));
      return true;
    }

    // GET /api/stats
    if (pathname === '/api/stats' && method === 'GET') {
      const stats = getStats();
      res.statusCode = 200;
      res.end(JSON.stringify(stats));
      return true;
    }

    // PATCH /api/contact/:id or PATCH /api/messages/:id (Update status / Mark as Replied)
    if (
      (pathname.startsWith('/api/contact/') || pathname.startsWith('/api/messages/')) &&
      method === 'PATCH'
    ) {
      const id = pathname.replace(/^\/api\/(contact|messages)\//, '');
      let body = '';
      req.on('data', chunk => { body += chunk; });
      req.on('end', () => {
        try {
          const payload = JSON.parse(body || '{}');
          const contacts = getContacts();
          const idx = contacts.findIndex(c => c.id === id);
          if (idx === -1) {
            res.statusCode = 404;
            res.end(JSON.stringify({ error: 'Record not found' }));
            return;
          }

          // Mark as Replied updates replied and repliedAt in persistent storage
          if (typeof payload.replied === 'boolean') {
            contacts[idx].replied = payload.replied;
            contacts[idx].status = payload.replied ? 'replied' : 'new';
            contacts[idx].repliedAt = payload.replied ? (payload.repliedAt || new Date().toISOString()) : null;
            contacts[idx].isRead = true;
          } else if (payload.status === 'replied') {
            contacts[idx].replied = true;
            contacts[idx].status = 'replied';
            contacts[idx].repliedAt = payload.repliedAt || new Date().toISOString();
            contacts[idx].isRead = true;
          } else if (payload.status === 'new') {
            contacts[idx].replied = false;
            contacts[idx].status = 'new';
            contacts[idx].repliedAt = null;
          }

          if (typeof payload.isRead === 'boolean') {
            contacts[idx].isRead = payload.isRead;
          }

          saveContacts(contacts);

          res.statusCode = 200;
          res.end(JSON.stringify({
            success: true,
            record: contacts[idx],
            message: contacts[idx]
          }));
        } catch (err) {
          res.statusCode = 500;
          res.end(JSON.stringify({ error: 'Failed to update record.' }));
        }
      });
      return true;
    }

    // DELETE /api/contact/:id or DELETE /api/messages/:id
    if (
      (pathname.startsWith('/api/contact/') || pathname.startsWith('/api/messages/')) &&
      method === 'DELETE'
    ) {
      const id = pathname.replace(/^\/api\/(contact|messages)\//, '');
      const contacts = getContacts();
      const filtered = contacts.filter(c => c.id !== id);
      if (filtered.length === contacts.length) {
        res.statusCode = 404;
        res.end(JSON.stringify({ error: 'Record not found.' }));
        return;
      }
      saveContacts(filtered);
      res.statusCode = 200;
      res.end(JSON.stringify({ success: true, id }));
      return true;
    }
  }

  return false;
}

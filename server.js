import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { handleApiRequest } from './server/apiHandler.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

// API routes handled directly
app.use((req, res, next) => {
  if (req.url.startsWith('/api/')) {
    const handled = handleApiRequest(req, res);
    if (!handled) {
      res.status(404).json({ error: 'Endpoint not found' });
    }
  } else {
    next();
  }
});

// Serve static production assets from dist
app.use(express.static(path.resolve(__dirname, 'dist')));

// Fallback to index.html for client-side navigation
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'dist/index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Production server running on http://0.0.0.0:${PORT}`);
});

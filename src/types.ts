export type PageId = 'home' | 'media' | 'future' | 'hobby' | 'sports' | 'contact' | 'admin';

export interface Message {
  id: string;
  name: string;
  email: string;
  reason: string;
  subject: string;
  category?: string;
  message: string;
  timestamp: string;
  createdAt: string;
  status: 'new' | 'replied';
  replied: boolean;
  repliedAt: string | null;
  isRead?: boolean;
}

export interface MediaItem {
  id: string;
  title: string;
  category: string;
  type: 'image' | 'video' | 'social';
  url: string;
  videoEmbedUrl?: string;
  externalUrl?: string;
  thumbnailUrl?: string;
  caption: string;
  date: string;
  isPlaceholder: boolean;
}

export interface GoalItem {
  id: string;
  timeframe: 'Short-Term' | 'Medium-Term' | 'Long-Term';
  category: 'Academic' | 'Technical' | 'Personal';
  title: string;
  description: string;
  status: 'In Progress' | 'Planned' | 'Target';
  targetYear: string;
}

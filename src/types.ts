export type PageId = 'home' | 'media' | 'future' | 'hobby' | 'sports' | 'admin';

export interface Message {
  id: string;
  createdAt: string;
  name: string;
  email: string;
  subject: string;
  category: string;
  message: string;
  isRead: boolean;
}

export interface MediaItem {
  id: string;
  title: string;
  category: string;
  type: 'image' | 'video';
  url: string;
  videoEmbedUrl?: string;
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

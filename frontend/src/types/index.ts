export interface ConsultationData {
  date: string;
  time: string;
  message: string;
}

export interface Brand {
  id: number;
  name: string;
  category: string;
  logo: string;
  viewCount: number;
  savedCount: number;
  isSaved: boolean;
  franchiseFee: number;
  totalInvestment: number;
  avgMonthlySales: number;
  totalStores: number;
  description: string;
}

export interface SavedBrand {
  id: number;
  name: string;
  category: string;
  logo: string;
  savedDate: string;
  viewCount: number;
}

export interface Consultation {
  id: number;
  brandName: string;
  brandLogo: string;
  applicationDate: string;
  status: 'PENDING' | 'RESCHEDULE_REQUEST' | 'CONFIRMED' | 'COMPLETED' | 'CANCELLED';
  scheduledDate?: string;
  scheduledTime?: string;
  managerNote?: string;
  message?: string;
}

export interface Notification {
  id: number;
  type: 'consultation_confirmed' | 'consultation_reschedule' | 'consultation_completed' | 'consultation_cancelled';
  brandName: string;
  brandLogo: string;
  title: string;
  message: string;
  timestamp: string;
  isRead: boolean;
}

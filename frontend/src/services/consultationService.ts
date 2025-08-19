import { ConsultationData } from '../types';

export const consultationService = {
  submitConsultation: async (brandName: string, data: ConsultationData): Promise<void> => {
    // Simulate API call
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("상담 신청:", {
          brand: brandName,
          date: data.date,
          time: data.time,
          message: data.message,
        });
        resolve();
      }, 500);
    });
  },

  removeSaved: async (brandId: number): Promise<void> => {
    // Simulate API call
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("저장 취소:", brandId);
        resolve();
      }, 300);
    });
  }
};

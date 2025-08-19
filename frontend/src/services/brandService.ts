import { Brand } from '../types';

// Mock data - in real app this would come from API
const mockBrands: Brand[] = [
  {
    id: 1,
    name: "맥도날드",
    category: "외식",
    logo: "🍔",
    viewCount: 1234,
    savedCount: 567,
    isSaved: false,
    franchiseFee: 500,
    totalInvestment: 3000,
    avgMonthlySales: 800,
    totalStores: 150,
    description: "전 세계적으로 인정받는 패스트푸드 프랜차이즈입니다.",
  },
  {
    id: 2,
    name: "스타벅스",
    category: "외식",
    logo: "☕",
    viewCount: 2345,
    savedCount: 789,
    isSaved: false,
    franchiseFee: 800,
    totalInvestment: 5000,
    avgMonthlySales: 1200,
    totalStores: 80,
    description: "프리미엄 커피 브랜드로 고객 만족도가 높습니다.",
  },
  // Add more mock brands as needed
];

export const brandService = {
  getAllBrands: (): Promise<Brand[]> => {
    // Simulate API call
    return new Promise((resolve) => {
      setTimeout(() => resolve(mockBrands), 100);
    });
  },

  getBrandById: (id: number): Promise<Brand | null> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const brand = mockBrands.find(b => b.id === id);
        resolve(brand || null);
      }, 100);
    });
  },

  getBrandNames: (): { [key: number]: string } => {
    return mockBrands.reduce((acc, brand) => {
      acc[brand.id] = brand.name;
      return acc;
    }, {} as { [key: number]: string });
  }
};

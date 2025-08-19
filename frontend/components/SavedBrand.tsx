import React from "react";
import { Heart, MessageCircle, Eye, Calendar } from "lucide-react";

interface SavedBrand {
  id: number;
  name: string;
  category: string;
  logo: string;
  savedDate: string;
  viewCount: number;
}

interface SavedBrandProps {
  onBrandSelect: (brandId: number) => void;
  onConsultationRequest: (brandId: number) => void;
  onRemoveSaved: (brandId: number) => void;
}

export function SavedBrand({ onBrandSelect, onConsultationRequest, onRemoveSaved }: SavedBrandProps) {
  const savedBrands: SavedBrand[] = [
    { id: 1, name: "맥도날드", category: "외식", logo: "🍔", savedDate: "2025/01/10", viewCount: 1234 },
    { id: 2, name: "스타벅스", category: "외식", logo: "☕", savedDate: "2025/01/08", viewCount: 2345 },
    { id: 3, name: "네일샵", category: "뷰티", logo: "💅", savedDate: "2025/01/05", viewCount: 876 },
    { id: 4, name: "영어학원", category: "교육", logo: "📚", savedDate: "2025/01/03", viewCount: 654 },
    { id: 5, name: "편의점", category: "편의점", logo: "🏪", savedDate: "2025/01/01", viewCount: 987 },
    { id: 6, name: "치킨집", category: "외식", logo: "🍗", savedDate: "2024/12/28", viewCount: 1567 },
    { id: 7, name: "카페", category: "외식", logo: "☕", savedDate: "2024/12/25", viewCount: 1098 },
    { id: 8, name: "미용실", category: "뷰티", logo: "✂️", savedDate: "2024/12/22", viewCount: 743 },
    { id: 9, name: "학원", category: "교육", logo: "🎓", savedDate: "2024/12/20", viewCount: 567 },
    { id: 10, name: "마트", category: "편의점", logo: "🛒", savedDate: "2024/12/18", viewCount: 890 },
    { id: 11, name: "피자집", category: "외식", logo: "🍕", savedDate: "2024/12/15", viewCount: 1234 },
    { id: 12, name: "헬스장", category: "스포츠", logo: "💪", savedDate: "2024/12/12", viewCount: 678 },
  ];

  return (
    <div className="flex-1 bg-gray-50">
      <div className="px-8 py-8">
        <div className="max-w-screen-xl mx-auto">
          {/* 헤더 */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-4">저장한 브랜드</h1>
            <div className="flex items-center space-x-2 text-gray-600">
              <Heart className="w-5 h-5 text-red-500" />
              <span className="text-lg">총 {savedBrands.length}개 브랜드</span>
            </div>
          </div>

          {/* 브랜드 목록 */}
          <div className="space-y-4">
            {savedBrands.map((brand) => (
              <div key={brand.id} className="bg-white rounded-xl p-6 shadow-md">
                <div className="flex items-center space-x-6">
                  {/* 브랜드 로고 */}
                  <div className="text-4xl">{brand.logo}</div>
                  
                  {/* 브랜드 정보 */}
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">{brand.name}</h3>
                    <div className="flex items-center space-x-6 text-gray-600">
                      <span>카테고리: {brand.category}</span>
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>저장한 날짜: {brand.savedDate}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Eye className="w-4 h-4" />
                        <span>{brand.viewCount.toLocaleString()}</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* 액션 버튼들 */}
                  <div className="flex space-x-3">
                    <button 
                      onClick={() => onConsultationRequest(brand.id)}
                      className="flex items-center space-x-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>상담신청</span>
                    </button>
                    
                    <button 
                      onClick={() => onRemoveSaved(brand.id)}
                      className="flex items-center space-x-2 px-4 py-2 bg-red-50 hover:bg-red-100 text-red-600 rounded-lg transition-colors"
                    >
                      <Heart className="w-4 h-4 fill-current" />
                      <span>저장취소</span>
                    </button>
                    
                    <button 
                      onClick={() => onBrandSelect(brand.id)}
                      className="flex items-center space-x-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors"
                    >
                      <Eye className="w-4 h-4" />
                      <span>상세보기</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* 빈 상태 (저장한 브랜드가 없을 때) */}
          {savedBrands.length === 0 && (
            <div className="text-center py-16">
              <Heart className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-medium text-gray-500 mb-2">저장한 브랜드가 없습니다</h3>
              <p className="text-gray-400">관심 있는 브랜드를 저장해보세요!</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

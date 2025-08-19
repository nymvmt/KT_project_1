import React from "react";
import { Search, Filter, Star, Heart, Eye, ArrowLeft } from "lucide-react";
import { useState } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
// import homeBackgroundImage from "figma:asset/05599cbfd26bd1dd9a5d9ded6cdc3a5184df9b3a.png";

interface Brand {
  id: number;
  name: string;
  category: string;
  logo: string;
  viewCount: number;
  favoriteCount: number;
  rating: number;
}

interface MainScreenProps {
  onBrandSelect: (brandId: number) => void;
}

export function MainScreen({ onBrandSelect }: MainScreenProps) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = [
    { id: 'food', name: '외식', icon: '🍔', color: 'bg-orange-500/20 hover:bg-orange-500/30 text-orange-200 border-orange-300/30' },
    { id: 'beauty', name: '뷰티', icon: '💄', color: 'bg-pink-500/20 hover:bg-pink-500/30 text-pink-200 border-pink-300/30' },
    { id: 'education', name: '교육', icon: '📚', color: 'bg-blue-500/20 hover:bg-blue-500/30 text-blue-200 border-blue-300/30' },
    { id: 'retail', name: '편의점', icon: '🏪', color: 'bg-green-500/20 hover:bg-green-500/30 text-green-200 border-green-300/30' },
  ];

  const allBrands: Brand[] = [
    { id: 1, name: "맥도날드", category: "food", logo: "🍔", viewCount: 1234, favoriteCount: 567, rating: 4.5 },
    { id: 2, name: "스타벅스", category: "food", logo: "☕", viewCount: 2345, favoriteCount: 890, rating: 4.7 },
    { id: 3, name: "네일샵", category: "beauty", logo: "💅", viewCount: 876, favoriteCount: 234, rating: 4.3 },
    { id: 4, name: "영어학원", category: "education", logo: "📚", viewCount: 654, favoriteCount: 123, rating: 4.2 },
    { id: 5, name: "편의점", category: "retail", logo: "🏪", viewCount: 987, favoriteCount: 345, rating: 4.4 },
    { id: 6, name: "치킨집", category: "food", logo: "🍗", viewCount: 1567, favoriteCount: 678, rating: 4.6 },
    { id: 7, name: "카페", category: "food", logo: "☕", viewCount: 1098, favoriteCount: 456, rating: 4.1 },
    { id: 8, name: "미용실", category: "beauty", logo: "✂️", viewCount: 743, favoriteCount: 189, rating: 4.3 },
    { id: 9, name: "학원", category: "education", logo: "🎓", viewCount: 567, favoriteCount: 123, rating: 4.0 },
    { id: 10, name: "마트", category: "retail", logo: "🛒", viewCount: 890, favoriteCount: 267, rating: 4.2 },
    { id: 11, name: "피자집", category: "food", logo: "🍕", viewCount: 1234, favoriteCount: 345, rating: 4.3 },
    { id: 12, name: "헬스장", category: "beauty", logo: "💪", viewCount: 567, favoriteCount: 189, rating: 4.1 },
  ];

  const filteredBrands = selectedCategory 
    ? allBrands.filter(brand => brand.category === selectedCategory)
    : allBrands;

  const selectedCategoryData = categories.find(cat => cat.id === selectedCategory);
  const getCategoryName = (categoryId: string) => {
    const categoryMap: { [key: string]: string } = {
      'food': '외식',
      'beauty': '뷰티', 
      'education': '교육',
      'retail': '편의점'
    };
    return categoryMap[categoryId] || categoryId;
  };

  const handleCategorySelect = (categoryId: string) => {
    setSelectedCategory(categoryId);
  };

  const handleBackToCategories = () => {
    setSelectedCategory(null);
  };

  if (selectedCategory) {
    // 카테고리 선택된 상태 - 확장된 브랜드 화면
    return (
      <div className="flex-1 relative overflow-hidden">
        {/* 배경 그라데이션 */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
          <div className="absolute inset-0 bg-black/70"></div>
        </div>

        {/* 콘텐츠 오버레이 */}
        <div className="relative z-10 h-full flex flex-col">
          {/* 상단 카테고리 영역 (축소됨) */}
          <div className="bg-black/80 backdrop-blur-sm border-b border-white/20 px-8 py-6">
            <div className="max-w-screen-xl mx-auto">
              <div className="flex items-center justify-between mb-4">
                <button
                  onClick={handleBackToCategories}
                  className="flex items-center space-x-2 text-white hover:text-gray-300 transition-colors"
                >
                  <ArrowLeft className="w-6 h-6" />
                  <span className="text-xl">카테고리로 돌아가기</span>
                </button>
                <h1 className="text-3xl font-bold text-white">프랜차이즈TV</h1>
              </div>
              
              {/* 축소된 카테고리 메뉴 */}
              <div className="flex space-x-4">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => handleCategorySelect(category.id)}
                    className={`${
                      selectedCategory === category.id 
                        ? category.color + ' ring-2 ring-white/50' 
                        : 'bg-white/10 hover:bg-white/20 text-white border-white/20'
                    } backdrop-blur-sm rounded-xl p-4 text-center transition-all duration-300 border`}
                  >
                    <div className="text-2xl mb-2">{category.icon}</div>
                    <div className="text-lg font-medium">{category.name}</div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* 확장된 브랜드 영역 */}
          <div className="flex-1 bg-black/60 backdrop-blur-md px-8 py-8">
            <div className="max-w-screen-xl mx-auto h-full">
              {/* 왼쪽 정렬 타이틀 */}
              <div className="mb-6">
                <h2 className="text-3xl font-bold text-white text-left">
                  인기 브랜드 - {getCategoryName(selectedCategory)}
                </h2>
                <p className="text-gray-300 mt-2 text-left">
                  {filteredBrands.length}개의 브랜드가 있습니다
                </p>
              </div>
              
              {/* 브랜드 그리드 */}
              <div className="grid grid-cols-4 gap-6 max-h-full overflow-y-auto">
                {filteredBrands.map((brand) => (
                  <button
                    key={brand.id}
                    onClick={() => onBrandSelect(brand.id)}
                    className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 text-left border border-white/20 shadow-lg hover:shadow-xl hover:scale-105"
                  >
                    <div className="text-4xl mb-4 text-center">{brand.logo}</div>
                    <div className="font-bold text-xl mb-2 text-white text-center">{brand.name}</div>
                    <div className="text-gray-300 mb-4 text-center">{getCategoryName(brand.category)}</div>
                    
                    <div className="flex items-center justify-between text-gray-400 mb-3">
                      <div className="flex items-center space-x-1">
                        <Eye className="w-4 h-4" />
                        <span>{brand.viewCount.toLocaleString()}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Heart className="w-4 h-4" />
                        <span>{brand.favoriteCount}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-center space-x-1">
                      <Star className="w-5 h-5 text-yellow-400 fill-current" />
                      <span className="font-medium text-white text-lg">{brand.rating}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // 기본 상태 - 카테고리 오버레이
  return (
    <div className="flex-1 relative overflow-hidden">
      {/* 배경 그라데이션 */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* 콘텐츠 오버레이 */}
      <div className="relative z-10 h-full flex flex-col">
        {/* 메인 타이틀 영역 */}
        <div className="flex-1 flex items-center justify-center text-center px-8 py-16">
          <div>
            <h1 className="text-6xl font-bold text-white mb-6 drop-shadow-2xl">프랜차이즈TV</h1>
            <p className="text-2xl text-gray-200 mb-16 drop-shadow-lg">성공 창업의 시작, 프랜차이즈TV와 함께하세요</p>
            
            {/* 카테고리 메뉴 - 오버레이 배너 */}
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-8 drop-shadow-lg">카테고리 선택</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => handleCategorySelect(category.id)}
                    className={`${category.color} backdrop-blur-md rounded-2xl p-8 text-center transition-all duration-300 border shadow-lg hover:shadow-xl hover:scale-110 transform`}
                  >
                    <div className="text-5xl mb-4">{category.icon}</div>
                    <div className="text-2xl font-bold">{category.name}</div>
                    <div className="text-sm mt-2 opacity-80">브랜드 탐색</div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
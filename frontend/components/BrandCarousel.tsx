import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";

interface Brand {
  id: number;
  name: string;
  category: string;
  logo: string;
}

export function BrandCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const brands: Brand[] = [
    { id: 1, name: "맥도날드", category: "외식", logo: "🍔" },
    { id: 2, name: "스타벅스", category: "외식", logo: "☕" },
    { id: 3, name: "네일샵", category: "뷰티", logo: "💅" },
    { id: 4, name: "영어학원", category: "교육", logo: "📚" },
    { id: 5, name: "편의점", category: "편의점", logo: "🏪" },
    { id: 6, name: "치킨집", category: "외식", logo: "🍗" },
    { id: 7, name: "카페", category: "외식", logo: "☕" },
    { id: 8, name: "미용실", category: "뷰티", logo: "✂️" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % brands.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [brands.length]);

  const visibleBrands = [];
  for (let i = 0; i < 5; i++) {
    visibleBrands.push(brands[(currentIndex + i) % brands.length]);
  }

  return (
    <div className="bg-gray-800 px-8 py-8">
      <div className="flex items-center justify-between max-w-screen-xl mx-auto">
        <button className="p-4 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors border border-white/20">
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>
        
        <div className="flex space-x-8 flex-1 justify-center">
          {visibleBrands.map((brand) => (
            <div key={brand.id} className="bg-gray-700/50 backdrop-blur-sm rounded-xl p-6 shadow-lg flex items-center space-x-4 min-w-0 border border-white/10">
              <div className="text-4xl">{brand.logo}</div>
              <div>
                <div className="font-medium text-xl text-white">{brand.name}</div>
                <div className="text-gray-300">{brand.category}</div>
              </div>
            </div>
          ))}
        </div>
        
        <button className="p-4 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors border border-white/20">
          <ChevronRight className="w-6 h-6 text-white" />
        </button>
      </div>
    </div>
  );
}
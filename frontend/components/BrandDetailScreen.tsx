import React from "react";
import { Heart, Phone, Share2, ArrowLeft, Eye, TrendingUp } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from "recharts";

interface BrandDetailScreenProps {
  brandId: number;
  onBack: () => void;
  onConsultationRequest: () => void;
}

export function BrandDetailScreen({ brandId, onBack, onConsultationRequest }: BrandDetailScreenProps) {
  // Mock data - in real app this would come from props or API
  const brand = {
    id: brandId,
    name: "맥도날드",
    category: "외식",
    logo: "🍔",
    viewCount: 1234,
    favoriteCount: 567,
    isFavorited: false,
    franchiseFee: 500,
    totalInvestment: 3000,
    avgMonthlySales: 800,
    totalStores: 150,
    description: "전 세계적으로 인정받는 패스트푸드 프랜차이즈입니다.",
  };

  const competitionData = [
    { name: '가맹비', value: 85, average: 70 },
    { name: '창업비용', value: 75, average: 80 },
    { name: '월매출', value: 90, average: 75 },
    { name: '매장수', value: 95, average: 60 },
  ];

  const relatedBrands = [
    { id: 2, name: "버거킹", logo: "🍔" },
    { id: 3, name: "KFC", logo: "🍗" },
    { id: 4, name: "롯데리아", logo: "🍔" },
    { id: 5, name: "맘스터치", logo: "🍔" },
  ];

  return (
    <div className="flex-1 bg-gray-50">
      {/* 헤더 */}
      <div className="bg-white border-b px-8 py-6">
        <div className="max-w-screen-xl mx-auto">
          <button
            onClick={onBack}
            className="flex items-center space-x-2 text-gray-600 hover:text-gray-800 mb-4"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="text-lg">돌아가기</span>
          </button>
          
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold mb-2">{brand.name}</h1>
              <div className="flex items-center space-x-6 text-gray-600">
                <span className="text-lg">카테고리: {brand.category}</span>
                <div className="flex items-center space-x-1">
                  <Eye className="w-4 h-4" />
                  <span>조회수: {brand.viewCount.toLocaleString()}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Heart className="w-4 h-4" />
                  <span>찜하기: {brand.favoriteCount}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-8 py-8">
        <div className="max-w-screen-xl mx-auto">
          {/* 브랜드 상세 정보 */}
          <div className="grid grid-cols-2 gap-12 mb-12">
            <div className="bg-white rounded-xl p-8">
              <div className="text-8xl text-center mb-6">{brand.logo}</div>
              <p className="text-lg text-gray-600 text-center">{brand.description}</p>
            </div>
            
            <div className="bg-white rounded-xl p-8">
              <h3 className="text-xl font-bold mb-6">창업 정보</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b">
                  <span className="text-lg text-gray-600">가맹비</span>
                  <span className="text-xl font-medium">{brand.franchiseFee}만원</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b">
                  <span className="text-lg text-gray-600">총 창업비용</span>
                  <span className="text-xl font-medium">{brand.totalInvestment}만원</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b">
                  <span className="text-lg text-gray-600">평균 월매출</span>
                  <span className="text-xl font-medium">{brand.avgMonthlySales}만원</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="text-lg text-gray-600">전체 매장수</span>
                  <span className="text-xl font-medium">{brand.totalStores}개</span>
                </div>
              </div>
            </div>
          </div>

          {/* 경쟁력 분석 차트 */}
          <div className="bg-white rounded-xl p-8 mb-12">
            <div className="flex items-center space-x-2 mb-6">
              <TrendingUp className="w-5 h-5 text-blue-600" />
              <h3 className="text-xl font-bold">경쟁력 분석</h3>
              <span className="text-gray-600">같은 카테고리 평균 대비</span>
            </div>
            
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={competitionData}>
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Bar dataKey="value" fill="#3B82F6" name="해당 브랜드" />
                  <Bar dataKey="average" fill="#E5E7EB" name="평균" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* 액션 버튼 */}
          <div className="flex justify-center space-x-6 mb-12">
            <button className="flex items-center space-x-2 px-8 py-4 bg-gray-100 hover:bg-gray-200 rounded-xl transition-colors">
              <Heart className="w-5 h-5" />
              <span className="text-lg font-medium">찜하기</span>
            </button>
            
            <button
              onClick={onConsultationRequest}
              className="flex items-center space-x-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl transition-colors"
            >
              <Phone className="w-5 h-5" />
              <span className="text-lg font-medium">상담신청</span>
            </button>
            
            <button className="flex items-center space-x-2 px-8 py-4 bg-gray-100 hover:bg-gray-200 rounded-xl transition-colors">
              <Share2 className="w-5 h-5" />
              <span className="text-lg font-medium">공유</span>
            </button>
          </div>

          {/* 관련 브랜드 */}
          <div className="bg-white rounded-xl p-8">
            <h3 className="text-xl font-bold mb-6">관련 브랜드 (같은 카테고리)</h3>
            <div className="flex space-x-6">
              {relatedBrands.map((relatedBrand) => (
                <button
                  key={relatedBrand.id}
                  className="bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors text-center"
                >
                  <div className="text-3xl mb-2">{relatedBrand.logo}</div>
                  <div className="font-medium">{relatedBrand.name}</div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
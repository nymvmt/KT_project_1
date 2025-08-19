import React from "react";
import { MessageCircle, Calendar, Clock, User, FileText } from "lucide-react";

interface Consultation {
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

const statusConfig = {
  PENDING: { label: '신청 중', color: 'bg-yellow-100 text-yellow-800', icon: '🟡' },
  RESCHEDULE_REQUEST: { label: '조정 요청 중', color: 'bg-orange-100 text-orange-800', icon: '🟠' },
  CONFIRMED: { label: '예약 확정', color: 'bg-green-100 text-green-800', icon: '🟢' },
  COMPLETED: { label: '완료', color: 'bg-blue-100 text-blue-800', icon: '🔵' },
  CANCELLED: { label: '취소', color: 'bg-gray-100 text-gray-800', icon: '⚪' },
};

export function ConsultationsScreen() {
  const consultations: Consultation[] = [
    {
      id: 1,
      brandName: "맥도날드",
      brandLogo: "🍔",
      applicationDate: "2025/01/15",
      status: "CONFIRMED",
      scheduledDate: "2025/01/20",
      scheduledTime: "14:00",
      managerNote: "가능한 시간대 확인 필요",
      message: "창업 비용과 수익성에 대해 자세히 알고 싶습니다."
    },
    {
      id: 2,
      brandName: "스타벅스",
      brandLogo: "☕",
      applicationDate: "2025/01/10",
      status: "RESCHEDULE_REQUEST",
      scheduledDate: "2025/01/18",
      scheduledTime: "16:00",
      managerNote: "다른 시간대 제안",
      message: "매장 위치 선정 관련 상담 희망"
    },
    {
      id: 3,
      brandName: "네일샵",
      brandLogo: "💅",
      applicationDate: "2025/01/08",
      status: "COMPLETED",
      scheduledDate: "2025/01/12",
      scheduledTime: "11:00",
      managerNote: "상담 완료. 만족도 높음",
      message: "뷰티 업계 전망과 경쟁력 문의"
    },
    {
      id: 4,
      brandName: "영어학원",
      brandLogo: "📚",
      applicationDate: "2025/01/05",
      status: "PENDING",
      message: "교육 프랜차이즈 운영 방법 상담"
    },
    {
      id: 5,
      brandName: "편의점",
      brandLogo: "🏪",
      applicationDate: "2025/01/03",
      status: "CANCELLED",
      managerNote: "고객 요청으로 취소"
    },
    {
      id: 6,
      brandName: "치킨집",
      brandLogo: "🍗",
      applicationDate: "2024/12/28",
      status: "COMPLETED",
      scheduledDate: "2025/01/02",
      scheduledTime: "15:30",
      managerNote: "상담 완료. 계약서 발송"
    }
  ];

  const getStatusCounts = () => {
    const counts = {
      ongoing: consultations.filter(c => ['PENDING', 'RESCHEDULE_REQUEST', 'CONFIRMED'].includes(c.status)).length,
      completed: consultations.filter(c => c.status === 'COMPLETED').length,
      cancelled: consultations.filter(c => c.status === 'CANCELLED').length,
    };
    return counts;
  };

  const statusCounts = getStatusCounts();

  const getActionButtons = (consultation: Consultation) => {
    switch (consultation.status) {
      case 'PENDING':
        return (
          <div className="flex space-x-2">
            <button className="px-4 py-2 bg-blue-50 hover:bg-blue-100 text-blue-600 rounded-lg transition-colors">
              상세보기
            </button>
            <button className="px-4 py-2 bg-red-50 hover:bg-red-100 text-red-600 rounded-lg transition-colors">
              취소하기
            </button>
          </div>
        );
      case 'RESCHEDULE_REQUEST':
        return (
          <div className="flex space-x-2">
            <button className="px-4 py-2 bg-green-50 hover:bg-green-100 text-green-600 rounded-lg transition-colors">
              응답하기
            </button>
            <button className="px-4 py-2 bg-red-50 hover:bg-red-100 text-red-600 rounded-lg transition-colors">
              취소하기
            </button>
          </div>
        );
      case 'CONFIRMED':
        return (
          <div className="flex space-x-2">
            <button className="px-4 py-2 bg-blue-50 hover:bg-blue-100 text-blue-600 rounded-lg transition-colors">
              상세보기
            </button>
            <button className="px-4 py-2 bg-yellow-50 hover:bg-yellow-100 text-yellow-600 rounded-lg transition-colors">
              일정변경
            </button>
          </div>
        );
      case 'COMPLETED':
        return (
          <div className="flex space-x-2">
            <button className="px-4 py-2 bg-blue-50 hover:bg-blue-100 text-blue-600 rounded-lg transition-colors">
              상담내역
            </button>
            <button className="px-4 py-2 bg-purple-50 hover:bg-purple-100 text-purple-600 rounded-lg transition-colors">
              만족도평가
            </button>
          </div>
        );
      default:
        return (
          <button className="px-4 py-2 bg-gray-50 hover:bg-gray-100 text-gray-600 rounded-lg transition-colors">
            상세보기
          </button>
        );
    }
  };

  return (
    <div className="flex-1 bg-gray-50">
      <div className="px-8 py-8">
        <div className="max-w-screen-xl mx-auto">
          {/* 헤더 */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-4">상담 이력</h1>
            
            {/* 상태별 카운트 */}
            <div className="flex space-x-6">
              <div className="bg-yellow-50 px-4 py-2 rounded-lg">
                <span className="text-yellow-800 font-medium">진행중: {statusCounts.ongoing}건</span>
              </div>
              <div className="bg-blue-50 px-4 py-2 rounded-lg">
                <span className="text-blue-800 font-medium">완료: {statusCounts.completed}건</span>
              </div>
              <div className="bg-gray-50 px-4 py-2 rounded-lg">
                <span className="text-gray-800 font-medium">취소: {statusCounts.cancelled}건</span>
              </div>
            </div>
          </div>

          {/* 상담 목록 */}
          <div className="space-y-4">
            {consultations.map((consultation) => {
              const statusInfo = statusConfig[consultation.status];
              
              return (
                <div key={consultation.id} className="bg-white rounded-xl p-6 shadow-md">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-4">
                      <div className="text-3xl">{consultation.brandLogo}</div>
                      <div>
                        <h3 className="text-xl font-bold mb-1">브랜드명: {consultation.brandName}</h3>
                        <div className="flex items-center space-x-4 text-gray-600">
                          <div className="flex items-center space-x-1">
                            <Calendar className="w-4 h-4" />
                            <span>신청일: {consultation.applicationDate}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className={`px-3 py-1 rounded-full ${statusInfo.color} flex items-center space-x-1`}>
                      <span>{statusInfo.icon}</span>
                      <span className="font-medium">상태: {statusInfo.label}</span>
                    </div>
                  </div>

                  {/* 상담 일정 (확정된 경우만) */}
                  {consultation.scheduledDate && consultation.scheduledTime && (
                    <div className="bg-gray-50 p-4 rounded-lg mb-4">
                      <div className="flex items-center space-x-2 text-gray-700">
                        <Clock className="w-4 h-4" />
                        <span className="font-medium">상담일시: {consultation.scheduledDate} {consultation.scheduledTime}</span>
                      </div>
                    </div>
                  )}

                  {/* 매니저 노트 */}
                  {consultation.managerNote && (
                    <div className="mb-4">
                      <div className="flex items-center space-x-2 mb-2">
                        <User className="w-4 h-4 text-blue-600" />
                        <span className="font-medium text-blue-600">매니저 노트</span>
                      </div>
                      <p className="text-gray-700 ml-6">{consultation.managerNote}</p>
                    </div>
                  )}

                  {/* 고객 메시지 */}
                  {consultation.message && (
                    <div className="mb-4">
                      <div className="flex items-center space-x-2 mb-2">
                        <FileText className="w-4 h-4 text-gray-600" />
                        <span className="font-medium text-gray-600">문의사항</span>
                      </div>
                      <p className="text-gray-700 ml-6">{consultation.message}</p>
                    </div>
                  )}

                  {/* 액션 버튼 */}
                  <div className="flex justify-end">
                    {getActionButtons(consultation)}
                  </div>
                </div>
              );
            })}
          </div>

          {/* 빈 상태 */}
          {consultations.length === 0 && (
            <div className="text-center py-16">
              <MessageCircle className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-medium text-gray-500 mb-2">상담 이력이 없습니다</h3>
              <p className="text-gray-400">브랜드 상담을 신청해보세요!</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
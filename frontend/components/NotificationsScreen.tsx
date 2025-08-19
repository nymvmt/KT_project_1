import React from "react";
import { Bell, BellRing, MessageCircle, Calendar, CheckCircle, AlertCircle } from "lucide-react";

interface Notification {
  id: number;
  type: 'consultation_confirmed' | 'consultation_reschedule' | 'consultation_completed' | 'consultation_cancelled';
  brandName: string;
  brandLogo: string;
  title: string;
  message: string;
  timestamp: string;
  isRead: boolean;
}

const notificationConfig = {
  consultation_confirmed: { 
    icon: CheckCircle, 
    color: 'text-green-600', 
    bgColor: 'bg-green-50',
    indicator: '🟢'
  },
  consultation_reschedule: { 
    icon: Calendar, 
    color: 'text-orange-600', 
    bgColor: 'bg-orange-50',
    indicator: '🟡'
  },
  consultation_completed: { 
    icon: MessageCircle, 
    color: 'text-blue-600', 
    bgColor: 'bg-blue-50',
    indicator: '🔵'
  },
  consultation_cancelled: { 
    icon: AlertCircle, 
    color: 'text-red-600', 
    bgColor: 'bg-red-50',
    indicator: '🔴'
  },
};

export function NotificationsScreen() {
  const notifications: Notification[] = [
    {
      id: 1,
      type: 'consultation_confirmed',
      brandName: '맥도날드',
      brandLogo: '🍔',
      title: '상담 일정이 확정되었습니다',
      message: '2025/01/20 14:00',
      timestamp: '5분 전',
      isRead: false
    },
    {
      id: 2,
      type: 'consultation_reschedule',
      brandName: '스타벅스',
      brandLogo: '☕',
      title: '상담 일정 조정 요청',
      message: '매니저가 다른 시간을 제안했습니다',
      timestamp: '1시간 전',
      isRead: false
    },
    {
      id: 3,
      type: 'consultation_completed',
      brandName: '네일샵',
      brandLogo: '💅',
      title: '상담이 완료되었습니다',
      message: '만족도 평가를 부탁드립니다',
      timestamp: '2일 전',
      isRead: true
    },
    {
      id: 4,
      type: 'consultation_confirmed',
      brandName: '치킨집',
      brandLogo: '🍗',
      title: '상담 일정이 확정되었습니다',
      message: '2025/01/22 10:00',
      timestamp: '3일 전',
      isRead: true
    },
    {
      id: 5,
      type: 'consultation_cancelled',
      brandName: '편의점',
      brandLogo: '🏪',
      title: '상담이 취소되었습니다',
      message: '매니저 사정으로 인한 취소',
      timestamp: '5일 전',
      isRead: true
    },
    {
      id: 6,
      type: 'consultation_reschedule',
      brandName: '영어학원',
      brandLogo: '📚',
      title: '상담 일정 조정 요청',
      message: '더 자세한 상담을 위한 시간 연장 제안',
      timestamp: '1주 전',
      isRead: true
    },
    {
      id: 7,
      type: 'consultation_completed',
      brandName: '미용실',
      brandLogo: '✂️',
      title: '상담이 완료되었습니다',
      message: '추가 자료를 이메일로 발송했습니다',
      timestamp: '1주 전',
      isRead: true
    },
    {
      id: 8,
      type: 'consultation_confirmed',
      brandName: '카페',
      brandLogo: '☕',
      title: '상담 일정이 확정되었습니다',
      message: '2025/01/25 16:30',
      timestamp: '2주 전',
      isRead: true
    }
  ];

  const unreadCount = notifications.filter(n => !n.isRead).length;
  const totalCount = notifications.length;

  const getTimeAgo = (timestamp: string) => {
    return timestamp;
  };

  return (
    <div className="flex-1 bg-gray-50">
      <div className="px-8 py-8">
        <div className="max-w-screen-xl mx-auto">
          {/* 헤더 */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-4">알림</h1>
            
            {/* 알림 카운트 */}
            <div className="flex space-x-6">
              <div className="bg-red-50 px-4 py-2 rounded-lg flex items-center space-x-2">
                <BellRing className="w-4 h-4 text-red-600" />
                <span className="text-red-800 font-medium">읽지 않음: {unreadCount}건</span>
              </div>
              <div className="bg-blue-50 px-4 py-2 rounded-lg flex items-center space-x-2">
                <Bell className="w-4 h-4 text-blue-600" />
                <span className="text-blue-800 font-medium">전체: {totalCount}건</span>
              </div>
            </div>
          </div>

          {/* 알림 목록 */}
          <div className="space-y-3">
            {notifications.map((notification) => {
              const config = notificationConfig[notification.type];
              const IconComponent = config.icon;
              
              return (
                <div
                  key={notification.id}
                  className={`rounded-xl p-6 transition-colors cursor-pointer ${
                    notification.isRead 
                      ? 'bg-white hover:bg-gray-50' 
                      : 'bg-blue-50 hover:bg-blue-100 border-l-4 border-blue-500'
                  }`}
                >
                  <div className="flex items-start space-x-4">
                    {/* 알림 아이콘 */}
                    <div className={`${config.bgColor} p-3 rounded-full flex-shrink-0`}>
                      <IconComponent className={`w-5 h-5 ${config.color}`} />
                    </div>
                    
                    {/* 브랜드 로고 */}
                    <div className="text-2xl flex-shrink-0">{notification.brandLogo}</div>
                    
                    {/* 알림 내용 */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center space-x-2 mb-1">
                        <span className="text-lg">{config.indicator}</span>
                        <h3 className={`font-medium ${notification.isRead ? 'text-gray-900' : 'text-blue-900'}`}>
                          [{notification.brandName}] {notification.title}
                        </h3>
                      </div>
                      
                      <p className={`text-gray-600 mb-2 ${notification.isRead ? '' : 'font-medium'}`}>
                        {notification.message}
                      </p>
                      
                      <div className="text-gray-500">
                        {getTimeAgo(notification.timestamp)}
                      </div>
                    </div>
                    
                    {/* 읽지 않음 표시 */}
                    {!notification.isRead && (
                      <div className="w-3 h-3 bg-blue-500 rounded-full flex-shrink-0"></div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* 빈 상태 */}
          {notifications.length === 0 && (
            <div className="text-center py-16">
              <Bell className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-medium text-gray-500 mb-2">알림이 없습니다</h3>
              <p className="text-gray-400">새로운 알림이 있으면 여기에 표시됩니다</p>
            </div>
          )}

          {/* 전체 읽음 처리 버튼 */}
          {unreadCount > 0 && (
            <div className="mt-8 text-center">
              <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">
                모든 알림 읽음 처리
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
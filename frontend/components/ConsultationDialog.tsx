import React from "react";
import { X, Calendar, Clock } from "lucide-react";
import { useState } from "react";
// import consultationBgImage from "figma:asset/9b643377f2902123725150f3c08bf8e42ba10aeb.png";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface ConsultationDialogProps {
  isOpen: boolean;
  onClose: () => void;
  brandName: string;
  onSubmit: (data: ConsultationData) => void;
}

interface ConsultationData {
  date: string;
  time: string;
  message: string;
}

export function ConsultationDialog({ isOpen, onClose, brandName, onSubmit }: ConsultationDialogProps) {
  const [formData, setFormData] = useState<ConsultationData>({
    date: '',
    time: '',
    message: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
    onClose();
  };

  const timeSlots = [
    '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', 
    '15:00', '16:00', '17:00', '18:00'
  ];

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
      <div className="relative max-w-4xl w-full mx-8">
        {/* 배경 그라데이션 */}
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
          <div className="absolute inset-0 bg-black/70"></div>
        </div>
        
        {/* 콘텐츠 오버레이 */}
        <div className="absolute inset-0 p-12">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-white">창업 상담 신청</h2>
            <button
              onClick={onClose}
              className="p-3 hover:bg-white/10 rounded-lg transition-colors"
            >
              <X className="w-6 h-6 text-white" />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* 브랜드 정보 */}
            <div>
              <label className="text-xl font-medium text-white mb-3 block">선택한 브랜드</label>
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg text-xl text-white border border-white/20">
                {brandName}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-8">
              {/* 희망 상담일 */}
              <div>
                <label className="text-xl font-medium text-white mb-3 block flex items-center space-x-2">
                  <Calendar className="w-5 h-5" />
                  <span>희망 상담일</span>
                </label>
                <input
                  type="date"
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  className="w-full p-4 text-xl bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                  required
                />
              </div>

              {/* 희망 시간 */}
              <div>
                <label className="text-xl font-medium text-white mb-3 block flex items-center space-x-2">
                  <Clock className="w-5 h-5" />
                  <span>희망 시간</span>
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {timeSlots.slice(0, 6).map((time) => (
                    <button
                      key={time}
                      type="button"
                      onClick={() => setFormData({ ...formData, time })}
                      className={`p-3 rounded-lg text-lg transition-colors border ${
                        formData.time === time
                          ? 'bg-blue-600 text-white border-blue-500'
                          : 'bg-white/10 text-white border-white/20 hover:bg-white/20'
                      }`}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* 추가 시간대 */}
            <div>
              <div className="grid grid-cols-4 gap-2 mb-6">
                {timeSlots.slice(6).map((time) => (
                  <button
                    key={time}
                    type="button"
                    onClick={() => setFormData({ ...formData, time })}
                    className={`p-3 rounded-lg text-lg transition-colors border ${
                      formData.time === time
                        ? 'bg-blue-600 text-white border-blue-500'
                        : 'bg-white/10 text-white border-white/20 hover:bg-white/20'
                    }`}
                  >
                    {time}
                  </button>
                ))}
              </div>
            </div>

            {/* 추가 문의사항 */}
            <div>
              <label className="text-xl font-medium text-white mb-3 block">추가 문의사항</label>
              <textarea
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="창업 관련하여 궁금한 점이나 상담 시 논의하고 싶은 내용을 적어주세요."
                className="w-full p-4 text-lg bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500/50 h-32 resize-none"
              />
            </div>

            {/* 버튼 */}
            <div className="flex space-x-6 pt-4">
              <button
                type="button"
                onClick={onClose}
                className="flex-1 py-4 text-xl font-medium text-white bg-white/10 hover:bg-white/20 rounded-lg transition-colors border border-white/20"
              >
                취소
              </button>
              <button
                type="submit"
                className="flex-1 py-4 text-xl font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
              >
                신청하기
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
import './styles/globals.css';
import { useState } from "react";
import { TVHeader } from "./components/TVHeader";
import { NavigationBar } from "./components/NavigationBar";
import { ConsultationDialog } from "./components/ConsultationDialog";
import { HomePage } from "./src/pages/HomePage";
import { SavedPage } from "./src/pages/SavedPage";
import { ConsultationsPage } from "./src/pages/ConsultationsPage";
import { NotificationsPage } from "./src/pages/NotificationsPage";
import { ProfilePage } from "./src/pages/ProfilePage";
import { BrandDetailPage } from "./src/pages/BrandDetailPage";
import { brandService } from "./src/services/brandService";
import { consultationService } from "./src/services/consultationService";
import { ConsultationData } from "./src/types";

export default function App() {
  const [activeTab, setActiveTab] = useState("home");
  const [selectedBrandId, setSelectedBrandId] = useState<number | null>(null);
  const [showConsultationDialog, setShowConsultationDialog] = useState(false);
  const [consultationBrandName, setConsultationBrandName] = useState("");

  const handleBrandSelect = (brandId: number) => {
    setSelectedBrandId(brandId);
  };

  const handleBackToMain = () => {
    setSelectedBrandId(null);
  };

  const handleConsultationRequest = async (brandId?: number) => {
    const brandNames = brandService.getBrandNames();
    const targetBrandId = brandId || selectedBrandId || 1;
    const brandName = brandNames[targetBrandId] || "브랜드";
    
    setConsultationBrandName(brandName);
    setShowConsultationDialog(true);
  };

  const handleConsultationSubmit = async (data: ConsultationData) => {
    try {
      await consultationService.submitConsultation(consultationBrandName, data);
      alert(
        `${consultationBrandName} 상담이 신청되었습니다!\n날짜: ${data.date}\n시간: ${data.time}`
      );
      setShowConsultationDialog(false);
    } catch (error) {
      alert('상담 신청에 실패했습니다. 다시 시도해주세요.');
    }
  };

  const handleRemoveSaved = async (brandId: number) => {
    try {
      await consultationService.removeSaved(brandId);
      alert("저장이 취소되었습니다.");
    } catch (error) {
      alert('저장 취소에 실패했습니다. 다시 시도해주세요.');
    }
  };

  const renderCurrentScreen = () => {
    // 브랜드 상세 화면이 선택된 경우
    if (selectedBrandId) {
      return (
        <BrandDetailPage
          brandId={selectedBrandId}
          onBack={handleBackToMain}
          onConsultationRequest={handleConsultationRequest}
        />
      );
    }

    // 탭에 따른 화면 렌더링
    switch (activeTab) {
      case "home":
        return <HomePage onBrandSelect={handleBrandSelect} />;
      case "favorites":
        return (
          <SavedPage
            onBrandSelect={handleBrandSelect}
            onConsultationRequest={handleConsultationRequest}
            onRemoveSaved={handleRemoveSaved}
          />
        );
      case "consultations":
        return <ConsultationsPage />;
      case "notifications":
        return <NotificationsPage />;
      case "profile":
        return <ProfilePage />;
      default:
        return <HomePage onBrandSelect={handleBrandSelect} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col">
      {/* TV 헤더 */}
      <TVHeader />

      {/* 메인 콘텐츠 */}
      <div className="flex-1 flex flex-col">
        {renderCurrentScreen()}
      </div>

      {/* 네비게이션 바 */}
      <NavigationBar
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />

      {/* 상담 신청 다이얼로그 */}
      <ConsultationDialog
        isOpen={showConsultationDialog}
        onClose={() => setShowConsultationDialog(false)}
        brandName={consultationBrandName}
        onSubmit={handleConsultationSubmit}
      />
    </div>
  );
}
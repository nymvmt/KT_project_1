import React from "react";
import { BrandDetailScreen } from "../../components/BrandDetailScreen";

interface BrandDetailPageProps {
  brandId: number;
  onBack: () => void;
  onConsultationRequest: () => void;
}

export function BrandDetailPage({ 
  brandId, 
  onBack, 
  onConsultationRequest 
}: BrandDetailPageProps) {
  return (
    <BrandDetailScreen
      brandId={brandId}
      onBack={onBack}
      onConsultationRequest={onConsultationRequest}
    />
  );
}

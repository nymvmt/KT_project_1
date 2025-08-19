import React from "react";
import { SavedBrand } from "../../components/SavedBrand";

interface SavedPageProps {
  onBrandSelect: (brandId: number) => void;
  onConsultationRequest: (brandId: number) => void;
  onRemoveSaved: (brandId: number) => void;
}

export function SavedPage({ 
  onBrandSelect, 
  onConsultationRequest, 
  onRemoveSaved 
}: SavedPageProps) {
  return (
    <SavedBrand
      onBrandSelect={onBrandSelect}
      onConsultationRequest={onConsultationRequest}
      onRemoveSaved={onRemoveSaved}
    />
  );
}

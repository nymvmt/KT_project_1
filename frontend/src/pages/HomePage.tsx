import React from "react";
import { MainScreen } from "../../components/MainScreen";
import { BrandCarousel } from "../../components/BrandCarousel";

interface HomePageProps {
  onBrandSelect: (brandId: number) => void;
}

export function HomePage({ onBrandSelect }: HomePageProps) {
  return (
    <>
      <MainScreen onBrandSelect={onBrandSelect} />
      <BrandCarousel />
    </>
  );
}

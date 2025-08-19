import { useState, useEffect } from 'react';
import { Brand } from '../types';
import { brandService } from '../services/brandService';

export function useBrands() {
  const [brands, setBrands] = useState<Brand[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBrands = async () => {
      try {
        setLoading(true);
        const data = await brandService.getAllBrands();
        setBrands(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : '브랜드 정보를 불러오는데 실패했습니다.');
      } finally {
        setLoading(false);
      }
    };

    fetchBrands();
  }, []);

  const getBrandById = async (id: number): Promise<Brand | null> => {
    try {
      return await brandService.getBrandById(id);
    } catch (err) {
      setError(err instanceof Error ? err.message : '브랜드 정보를 불러오는데 실패했습니다.');
      return null;
    }
  };

  return {
    brands,
    loading,
    error,
    getBrandById,
  };
}

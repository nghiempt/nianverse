"use client";

import { useEffect, useState } from "react";
import CategorySection from "@/components/modules/CategorySection";

interface ModuleItem {
  id: string;
  title: string;
  status: boolean;
  image: string;
}

interface SuppliesData {
  cart: ModuleItem[];
}

export default function SuppliesClient() {
  const [data, setData] = useState<SuppliesData>({
    cart: [],
  });
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await fetch("/api/modules?module=finance");
      if (response.ok) {
        const result = await response.json();
        setData({
          cart: result.cart || [],
        });
      }
    } catch (error) {
      console.error("Failed to fetch supplies data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center p-8">
        <div className="text-gray-500">Loading...</div>
      </div>
    );
  }

  return (
    <div>
      <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
        <div className="space-y-6">
          <CategorySection
            title="Cart"
            items={data.cart}
            module="finance"
            category="cart"
            onUpdate={fetchData}
          />
        </div>
      </div>
    </div>
  );
}

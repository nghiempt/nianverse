"use client";

import { useEffect, useState } from "react";
import CategorySection from "@/components/modules/CategorySection";

interface ModuleItem {
  id: string;
  title: string;
  status: boolean;
  image: string;
}

interface PayableData {
  wallet: ModuleItem[];
  spending: ModuleItem[];
}

export default function PayableClient() {
  const [data, setData] = useState<PayableData>({
    wallet: [],
    spending: [],
  });
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await fetch("/api/modules?module=finance");
      if (response.ok) {
        const result = await response.json();
        setData({
          wallet: result.wallet || [],
          spending: result.spending || [],
        });
      }
    } catch (error) {
      console.error("Failed to fetch payable data:", error);
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
            title="Wallet"
            items={data.wallet}
            module="finance"
            category="wallet"
            onUpdate={fetchData}
          />
        </div>
        <div className="space-y-6">
          <CategorySection
            title="Spending"
            items={data.spending}
            module="finance"
            category="spending"
            onUpdate={fetchData}
          />
        </div>
      </div>
    </div>
  );
}

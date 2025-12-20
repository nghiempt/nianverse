"use client";

import { useEffect, useState } from "react";
import CategorySection from "@/components/modules/CategorySection";

interface ModuleItem {
  id: string;
  title: string;
  status: boolean;
  image: string;
}

interface ServiceData {
  service_brand: ModuleItem[];
}

export default function ServiceClient() {
  const [data, setData] = useState<ServiceData>({
    service_brand: [],
  });
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await fetch("/api/modules?module=work");
      if (response.ok) {
        const result = await response.json();
        setData({
          service_brand: result.service_brand || [],
        });
      }
    } catch (error) {
      console.error("Failed to fetch service data:", error);
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
            title="Nianverse Brand"
            items={data.service_brand}
            module="work"
            category="service_brand"
            onUpdate={fetchData}
          />
        </div>
      </div>
    </div>
  );
}

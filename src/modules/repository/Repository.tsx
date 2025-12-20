"use client";

import { useEffect, useState } from "react";
import CategorySection from "@/components/modules/CategorySection";

interface ModuleItem {
  id: string;
  title: string;
  status: boolean;
  image: string;
}

interface RepositoryData {
  common: ModuleItem[];
  harmony: ModuleItem[];
  command: ModuleItem[];
}

export default function RepositoryClient() {
  const [data, setData] = useState<RepositoryData>({
    common: [],
    harmony: [],
    command: [],
  });
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await fetch("/api/modules?module=repository");
      if (response.ok) {
        const result = await response.json();
        setData(result);
      }
    } catch (error) {
      console.error("Failed to fetch repository data:", error);
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
            title="Common"
            items={data.common}
            module="repository"
            category="common"
            onUpdate={fetchData}
          />
        </div>
        <div className="space-y-6">
          <CategorySection
            title="Harmony"
            items={data.harmony}
            module="repository"
            category="harmony"
            onUpdate={fetchData}
          />
        </div>
        <div className="space-y-6">
          <CategorySection
            title="Command"
            items={data.command}
            module="repository"
            category="command"
            onUpdate={fetchData}
          />
        </div>
      </div>
    </div>
  );
}


"use client";

import { useEffect, useState } from "react";
import CategorySection from "@/components/modules/CategorySection";

interface ModuleItem {
  id: string;
  title: string;
  status: boolean;
  image: string;
}

interface DailyData {
  social: ModuleItem[];
  project: ModuleItem[];
  purge: ModuleItem[];
  other: ModuleItem[];
}

export default function DailyClient() {
  const [data, setData] = useState<DailyData>({
    social: [],
    project: [],
    purge: [],
    other: [],
  });
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await fetch("/api/modules?module=daily");
      if (response.ok) {
        const result = await response.json();
        setData(result);
      }
    } catch (error) {
      console.error("Failed to fetch daily data:", error);
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
            title="Social"
            items={data.social}
            module="daily"
            category="social"
            onUpdate={fetchData}
          />
        </div>
        <div className="space-y-6">
          <CategorySection
            title="Project"
            items={data.project}
            module="daily"
            category="project"
            onUpdate={fetchData}
          />
        </div>
        <div className="space-y-6">
          <CategorySection
            title="Purge"
            items={data.purge}
            module="daily"
            category="purge"
            onUpdate={fetchData}
          />
        </div>
        <div className="space-y-6">
          <CategorySection
            title="Other"
            items={data.other}
            module="daily"
            category="other"
            onUpdate={fetchData}
          />
        </div>
      </div>
    </div>
  );
}

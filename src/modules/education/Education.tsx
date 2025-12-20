"use client";

import { useEffect, useState } from "react";
import CategorySection from "@/components/modules/CategorySection";

interface ModuleItem {
  id: string;
  title: string;
  status: boolean;
  image: string;
}

interface EducationData {
  ielts: ModuleItem[];
  master_phd: ModuleItem[];
  research: ModuleItem[];
}

export default function EducationClient() {
  const [data, setData] = useState<EducationData>({
    ielts: [],
    master_phd: [],
    research: [],
  });
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await fetch("/api/modules?module=education");
      if (response.ok) {
        const result = await response.json();
        setData(result);
      }
    } catch (error) {
      console.error("Failed to fetch education data:", error);
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
            title="IELTS Preparation"
            items={data.ielts}
            module="education"
            category="ielts"
            onUpdate={fetchData}
          />
        </div>
        <div className="space-y-6">
          <CategorySection
            title="Master & PhD"
            items={data.master_phd}
            module="education"
            category="master_phd"
            onUpdate={fetchData}
          />
        </div>
        <div className="space-y-6">
          <CategorySection
            title="Research Papers"
            items={data.research}
            module="education"
            category="research"
            onUpdate={fetchData}
          />
        </div>
      </div>
    </div>
  );
}

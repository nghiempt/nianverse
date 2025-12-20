"use client";

import { useEffect, useState } from "react";
import CategorySection from "@/components/modules/CategorySection";

interface ModuleItem {
  id: string;
  title: string;
  status: boolean;
  image: string;
}

interface ProjectData {
  project_ielts: ModuleItem[];
  project_ecoka: ModuleItem[];
  project_hathu: ModuleItem[];
}

export default function ProjectClient() {
  const [data, setData] = useState<ProjectData>({
    project_ielts: [],
    project_ecoka: [],
    project_hathu: [],
  });
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await fetch("/api/modules?module=work");
      if (response.ok) {
        const result = await response.json();
        setData({
          project_ielts: result.project_ielts || [],
          project_ecoka: result.project_ecoka || [],
          project_hathu: result.project_hathu || [],
        });
      }
    } catch (error) {
      console.error("Failed to fetch project data:", error);
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
            title="Ielts Việt"
            items={data.project_ielts}
            module="work"
            category="project_ielts"
            onUpdate={fetchData}
          />
        </div>
        <div className="space-y-6">
          <CategorySection
            title="Ecoka Handicraft"
            items={data.project_ecoka}
            module="work"
            category="project_ecoka"
            onUpdate={fetchData}
          />
        </div>
        <div className="space-y-6">
          <CategorySection
            title="In Ảnh Hạ Thu"
            items={data.project_hathu}
            module="work"
            category="project_hathu"
            onUpdate={fetchData}
          />
        </div>
      </div>
    </div>
  );
}

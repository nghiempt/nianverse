"use client";

import { useEffect, useState } from "react";
import CategorySection from "@/components/modules/CategorySection";

interface ModuleItem {
  id: string;
  title: string;
  status: boolean;
  image: string;
}

interface ActivityData {
  event_workshop: ModuleItem[];
  contest: ModuleItem[];
  certificate: ModuleItem[];
}

export default function ActivityClient() {
  const [data, setData] = useState<ActivityData>({
    event_workshop: [],
    contest: [],
    certificate: [],
  });
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await fetch("/api/modules?module=activity");
      if (response.ok) {
        const result = await response.json();
        setData(result);
      }
    } catch (error) {
      console.error("Failed to fetch activity data:", error);
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
            title="Event & Workshop"
            items={data.event_workshop}
            module="activity"
            category="event_workshop"
            onUpdate={fetchData}
          />
        </div>
        <div className="space-y-6">
          <CategorySection
            title="Contest"
            items={data.contest}
            module="activity"
            category="contest"
            onUpdate={fetchData}
          />
        </div>
        <div className="space-y-6">
          <CategorySection
            title="Certificate"
            items={data.certificate}
            module="activity"
            category="certificate"
            onUpdate={fetchData}
          />
        </div>
      </div>
    </div>
  );
}

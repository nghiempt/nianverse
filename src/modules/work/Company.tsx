"use client";

import { useEffect, useState } from "react";
import CategorySection from "@/components/modules/CategorySection";

interface ModuleItem {
  id: string;
  title: string;
  status: boolean;
  image: string;
}

interface CompanyData {
  nianverse_primary: ModuleItem[];
  nianverse_system: ModuleItem[];
  nianverse_brain: ModuleItem[];
  nianverse_hunting: ModuleItem[];
  lumination_primary: ModuleItem[];
  lumination_zeedaata: ModuleItem[];
  lumination_hsu: ModuleItem[];
  lumination_customer: ModuleItem[];
}

export default function CompanyClient() {
  const [data, setData] = useState<CompanyData>({
    nianverse_primary: [],
    nianverse_system: [],
    nianverse_brain: [],
    nianverse_hunting: [],
    lumination_primary: [],
    lumination_zeedaata: [],
    lumination_hsu: [],
    lumination_customer: [],
  });
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await fetch("/api/modules?module=work");
      if (response.ok) {
        const result = await response.json();
        setData({
          nianverse_primary: result.nianverse_primary || [],
          nianverse_system: result.nianverse_system || [],
          nianverse_brain: result.nianverse_brain || [],
          nianverse_hunting: result.nianverse_hunting || [],
          lumination_primary: result.lumination_primary || [],
          lumination_zeedaata: result.lumination_zeedaata || [],
          lumination_hsu: result.lumination_hsu || [],
          lumination_customer: result.lumination_customer || [],
        });
      }
    } catch (error) {
      console.error("Failed to fetch company data:", error);
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
            title="Nianverse - Primary"
            items={data.nianverse_primary}
            module="work"
            category="nianverse_primary"
            onUpdate={fetchData}
          />
        </div>
        <div className="space-y-6">
          <CategorySection
            title="Nianverse - Primary - Complete System"
            items={data.nianverse_system}
            module="work"
            category="nianverse_system"
            onUpdate={fetchData}
          />
        </div>
        <div className="space-y-6">
          <CategorySection
            title="Nianverse - Primary - Current Brain"
            items={data.nianverse_brain}
            module="work"
            category="nianverse_brain"
            onUpdate={fetchData}
          />
        </div>
        <div className="space-y-6">
          <CategorySection
            title="Nianverse - Hunting Kit"
            items={data.nianverse_hunting}
            module="work"
            category="nianverse_hunting"
            onUpdate={fetchData}
          />
        </div>
        <div className="space-y-6">
          <CategorySection
            title="Lumination - Primary"
            items={data.lumination_primary}
            module="work"
            category="lumination_primary"
            onUpdate={fetchData}
          />
        </div>
        <div className="space-y-6">
          <CategorySection
            title="Lumination - Zeedaata"
            items={data.lumination_zeedaata}
            module="work"
            category="lumination_zeedaata"
            onUpdate={fetchData}
          />
        </div>
        <div className="space-y-6">
          <CategorySection
            title="Lumination - HSU"
            items={data.lumination_hsu}
            module="work"
            category="lumination_hsu"
            onUpdate={fetchData}
          />
        </div>
        <div className="space-y-6">
          <CategorySection
            title="Lumination - Customer Care"
            items={data.lumination_customer}
            module="work"
            category="lumination_customer"
            onUpdate={fetchData}
          />
        </div>
      </div>
    </div>
  );
}


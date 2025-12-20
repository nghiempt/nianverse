"use client";

import { useEffect, useState } from "react";
import CategorySection from "@/components/modules/CategorySection";

interface ModuleItem {
  id: string;
  title: string;
  status: boolean;
  image: string;
}

interface SubscriptionData {
  subscription: ModuleItem[];
  linkage: ModuleItem[];
  membership: ModuleItem[];
}

export default function SubscriptionClient() {
  const [data, setData] = useState<SubscriptionData>({
    subscription: [],
    linkage: [],
    membership: [],
  });
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await fetch("/api/modules?module=finance");
      if (response.ok) {
        const result = await response.json();
        setData({
          subscription: result.subscription || [],
          linkage: result.linkage || [],
          membership: result.membership || [],
        });
      }
    } catch (error) {
      console.error("Failed to fetch subscription data:", error);
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
            title="Subscription"
            items={data.subscription}
            module="finance"
            category="subscription"
            onUpdate={fetchData}
          />
        </div>
        <div className="space-y-6">
          <CategorySection
            title="Linkage"
            items={data.linkage}
            module="finance"
            category="linkage"
            onUpdate={fetchData}
          />
        </div>
        <div className="space-y-6">
          <CategorySection
            title="Membership"
            items={data.membership}
            module="finance"
            category="membership"
            onUpdate={fetchData}
          />
        </div>
      </div>
    </div>
  );
}


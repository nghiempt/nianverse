import SubscriptionClient from "@/modules/finance/Subscription";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nianverse",
  description: "This is Next.js",
};

export default function page() {
  return (
    <div>
      <SubscriptionClient />
    </div>
  );
}

import ComponentCard from "@/components/common/ComponentCard";
import Input from "@/components/common/InputField";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Subscription",
  description: "This is Next.js",
};

export default function SubscriptionClient() {
  return (
    <div>
      <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
        <div className="space-y-6">
          <ComponentCard title="Subscription">
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <Input type="text" defaultValue={"FHappy (49k) ~ 10/01/2026"} />
                <Input type="text" defaultValue={"Shopee Vip (29k) ~ 09/01/2026"} />
                <Input type="text" defaultValue={"Youtube Premium (87k) ~ 09/01/2026"} />
                <Input type="text" defaultValue={"Google Business (100k) ~ 01/01/2026"} />
                <Input type="text" defaultValue={"Google Drive One 30GB (5k) ~ 07/01/2026"} />
                <Input type="text" defaultValue={"Chat GPT Plus (100k) ~ ?/?/2025"} />
                <Input type="text" defaultValue={"Github Copilot (260k) ~ ?/?/2025"} />
                <Input type="text" defaultValue={"OpenAI ~ $2.85"} />
                <Input type="text" defaultValue={"Runpod ~ $15"} />
                <Input type="text" defaultValue={"AWS ~ $37"} />
                <Input type="text" defaultValue={"Spotify Premium"} />
              </div>
            </div>
          </ComponentCard>
        </div>
        <div className="space-y-6">
          <ComponentCard title="Linkage">
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <Input type="text" defaultValue={"iCloud + Liobank"} />
                <Input type="text" defaultValue={"Github Copilot + Liobank"} />
                <Input type="text" defaultValue={"Youtube + Momo"} />
                <Input type="text" defaultValue={"Shopee + Shopee Pay"} />
                <Input type="text" defaultValue={"Google Business + MB"} />
                <Input type="text" defaultValue={"OpenAI + Liobank"} />
                <Input type="text" defaultValue={"PayOS + MB"} />
                <Input type="text" defaultValue={"Cloudflare + Paypal"} />
                <Input type="text" defaultValue={"AWS + Liobank"} />
                <Input type="text" defaultValue={"Google Play + Momo"} />
                <Input type="text" defaultValue={"Runpod + Liobank"} />
                <Input type="text" defaultValue={"GoogleOne + Momo"} />
              </div>
            </div>
          </ComponentCard>
        </div>
        <div className="space-y-6">
          <ComponentCard title="Membership">
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <Input type="text" defaultValue={"Hải An Book Store"} />
                <Input type="text" defaultValue={"Coffee Bean"} />
                <Input type="text" defaultValue={"Annam Gourment"} />
                <Input type="text" defaultValue={"Mai Son"} />
                <Input type="text" defaultValue={"Tam Son"} />
                <Input type="text" defaultValue={"Golden Gate"} />
                <Input type="text" defaultValue={"H&M"} />
                <Input type="text" defaultValue={"Uniqlo"} />
                <Input type="text" defaultValue={"Haidilao"} />
                <Input type="text" defaultValue={"Lewis"} />
              </div>
            </div>
          </ComponentCard>
        </div>
      </div>
    </div>
  );
}

import ComponentCard from "@/components/common/ComponentCard";
import Input from "@/components/common/InputField";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Payable",
  description: "This is Next.js",
};

export default function PayableClient() {
  return (
    <div>
      <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
        <div className="space-y-6">
          <ComponentCard title="Wallet">
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <Input type="text" defaultValue={"?"} />
              </div>
            </div>
          </ComponentCard>
        </div>
        <div className="space-y-6">
          <ComponentCard title="Spending">
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <Input type="text" defaultValue={"?"} />
              </div>
            </div>
          </ComponentCard>
        </div>
      </div>
    </div>
  );
}

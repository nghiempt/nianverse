import ComponentCard from "@/components/common/ComponentCard";
import Input from "@/components/common/InputField";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Anthology",
  description: "This is Next.js",
};

export default function AnthologyClient() {
  return (
    <div>
      <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
        <div className="space-y-6">
          <ComponentCard title="Anthology">
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <Input type="text" defaultValue={"Encyclopedia"} />
                <Input type="text" defaultValue={"Front-end"} />
              </div>
            </div>
          </ComponentCard>
        </div>
      </div>
    </div>
  );
}

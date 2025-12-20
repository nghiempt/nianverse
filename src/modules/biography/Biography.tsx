import ComponentCard from "@/components/common/ComponentCard";
import Input from "@/components/common/InputField";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Biography",
  description: "This is Next.js",
};

export default function BiographyClient() {
  return (
    <div>
      <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
        <div className="space-y-6">
          <ComponentCard title="Biography">
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <Input type="text" defaultValue={"Strengths"} />
                <Input type="text" defaultValue={"Social Network"} />
                <Input type="text" defaultValue={"Password"} />
                <Input type="text" defaultValue={"Relationship"} />
                <Input type="text" defaultValue={"Devices"} />
              </div>
            </div>
          </ComponentCard>
        </div>
      </div>
    </div>
  );
}

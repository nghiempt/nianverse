import ComponentCard from "@/components/common/ComponentCard";
import Input from "@/components/common/InputField";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Education",
  description: "This is Next.js",
};

export default function EducationClient() {
  return (
    <div>
      <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
        <div className="space-y-6">
          <ComponentCard title="IELTS Preparation">
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <Input type="text" defaultValue={"?"} />
              </div>
            </div>
          </ComponentCard>
        </div>
        <div className="space-y-6">
          <ComponentCard title="Master & PhD">
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <Input type="text" defaultValue={"?"} />
              </div>
            </div>
          </ComponentCard>
        </div>
        <div className="space-y-6">
          <ComponentCard title="Research Papers">
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <Input type="text" defaultValue={"My papers"} />
                <Input type="text" defaultValue={"EMNLP 2025 - SLMs Benchmark"} />
                <Input type="text" defaultValue={"ACL 2026"} />
              </div>
            </div>
          </ComponentCard>
        </div>
      </div>
    </div>
  );
}

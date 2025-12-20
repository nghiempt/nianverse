import ComponentCard from "@/components/common/ComponentCard";
import Input from "@/components/common/InputField";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Running",
  description: "This is Next.js",
};

export default function RunningClient() {
  return (
    <div>
      <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
        <div className="space-y-6">
          <ComponentCard title="Working">
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <Input type="text" defaultValue={"Hạ Thu Task"} />
                <Input type="text" defaultValue={"Lumination Task"} />
                <Input type="text" defaultValue={"Nianverse Task"} />
              </div>
            </div>
          </ComponentCard>
        </div>
        <div className="space-y-6">
          <ComponentCard title="Life">
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <Input type="text" defaultValue={"Thuế cá nhân"} />
                <Input type="text" defaultValue={"Track Member Service & Linked Honey"} />
                <Input type="text" defaultValue={"Track Hospital"} />
                <Input type="text" defaultValue={"Capture Cards"} />
                <Input type="text" defaultValue={"ENW492 Return"} />
              </div>
            </div>
          </ComponentCard>
        </div>
      </div>
    </div>
  );
}


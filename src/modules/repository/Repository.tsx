import ComponentCard from "@/components/common/ComponentCard";
import Input from "@/components/common/InputField";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Repository",
  description: "This is Next.js",
};

export default function RepositoryClient() {
  return (
    <div>
      <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
        <div className="space-y-6">
          <ComponentCard title="Common">
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <Input type="text" defaultValue={"Key"} />
                <Input type="text" defaultValue={"Contact"} />
                <Input type="text" defaultValue={"Icons"} />
                <Input type="text" defaultValue={"News"} />
              </div>
            </div>
          </ComponentCard>
        </div>
        <div className="space-y-6">
          <ComponentCard title="Harmony">
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <Input type="text" defaultValue={"Lifecycle"} />
                <Input type="text" defaultValue={"Best House"} />
              </div>
            </div>
          </ComponentCard>
        </div>
        <div className="space-y-6">
          <ComponentCard title="Command">
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <Input type="text" defaultValue={"Terminal"} />
                <Input type="text" defaultValue={"Nodejs"} />
                <Input type="text" defaultValue={"Nginx"} />
                <Input type="text" defaultValue={"SQL Server"} />
                <Input type="text" defaultValue={"MySQL"} />
                <Input type="text" defaultValue={"Docker"} />
                <Input type="text" defaultValue={"Portainer"} />
                <Input type="text" defaultValue={"Springboot"} />
                <Input type="text" defaultValue={"Linux"} />
                <Input type="text" defaultValue={"MongoDB"} />
                <Input type="text" defaultValue={"AWS"} />
                <Input type="text" defaultValue={"Python"} />
              </div>
            </div>
          </ComponentCard>
        </div>
      </div>
    </div>
  );
}

import ComponentCard from "@/components/common/ComponentCard";
import Input from "@/components/common/InputField";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Company",
  description: "This is Next.js",
};

export default function CompanyClient() {
  return (
    <div>
      <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
        <div className="space-y-6">
          <ComponentCard title="Nianverse - Primary">
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <Input type="text" defaultValue={"Tạo email: nghiem.pham@nianverse.org"} />
                <Input type="text" defaultValue={"Hoàn thiện Landing Page"} />
              </div>
            </div>
          </ComponentCard>
        </div>
        <div className="space-y-6">
          <ComponentCard title="Nianverse - Primary - Complete System">
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <Input type="text" defaultValue={"Proposal"} />
                <Input type="text" defaultValue={"Document"} />
                <Input type="text" defaultValue={"Figma"} />
                <Input type="text" defaultValue={"Github"} />
                <Input type="text" defaultValue={"Postman"} />
                <Input type="text" defaultValue={"Cloud"} />
                <Input type="text" defaultValue={"Domain"} />
                <Input type="text" defaultValue={"Hosting"} />
              </div>
            </div>
          </ComponentCard>
        </div>
        <div className="space-y-6">
          <ComponentCard title="Nianverse - Primary - Current Brain">
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <Input type="text" defaultValue={"Daily Tracking: gmail, tin nhắn, subscription, …"} />
                <Input type="text" defaultValue={"Check Jumbled task (freedoom, confirmed)"} />
                <Input type="text" defaultValue={"Check công việc: company, project, service"} />
                <Input type="text" defaultValue={"Check education: ielts, master, phd, research"} />
                <Input type="text" defaultValue={"Check activity: tham gia event, ws. thi contest, học lấy certificate"} />
                <Input type="text" defaultValue={"Check finance: subscription, loan, plan payment, history wallet"} />
                <Input type="text" defaultValue={"Check Biography: link social, nian brand, nian channel, password, relationship"} />
                <Input type="text" defaultValue={"Check Anthology: kiến thức các thứ, …"} />
                <Input type="text" defaultValue={"Check Health: thông tin cá nhân, tim gan, phổi, …"} />
                <Input type="text" defaultValue={"Check Repository: house, clothes, device, motorbike, cmd, saved, service used, master storage (image, source code, git, drive, postman, figma, …) giúp mình ko care Macbook Storage và Phone Storage nữa."} />
              </div>
            </div>
          </ComponentCard>
        </div>
        <div className="space-y-6">
          <ComponentCard title="Nianverse - Hunting Kit">
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <Input type="text" defaultValue={"Master Plan"} />
              </div>
            </div>
          </ComponentCard>
        </div>
        <div className="space-y-6">
          <ComponentCard title="Lumination - Primary">
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <Input type="text" defaultValue={"Check 2 con robot"} />
                <Input type="text" defaultValue={"Master Plan"} />
              </div>
            </div>
          </ComponentCard>
        </div>
        <div className="space-y-6">
          <ComponentCard title="Lumination - Zeedaata">
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <Input type="text" defaultValue={"APIs public"} />
                <Input type="text" defaultValue={"Chat Widget Integration"} />
                <Input type="text" defaultValue={"Cleanup Accounts"} />
                <Input type="text" defaultValue={"Agent Property"} />
                <Input type="text" defaultValue={"Multi Modules"} />
                <Input type="text" defaultValue={"Widget Extension"} />
                <Input type="text" defaultValue={"FAQs Page"} />
                <Input type="text" defaultValue={"Reward System"} />
                <Input type="text" defaultValue={"Agentic RAG"} />
                <Input type="text" defaultValue={"Update RAG"} />
                <Input type="text" defaultValue={"Knowledge Graph"} />
              </div>
            </div>
          </ComponentCard>
        </div>
        <div className="space-y-6">
          <ComponentCard title="Lumination - HSU">
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <Input type="text" defaultValue={"?"} />
              </div>
            </div>
          </ComponentCard>
        </div>
        <div className="space-y-6">
          <ComponentCard title="Lumination - Customer Care">
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

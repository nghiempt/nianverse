import ComponentCard from "@/components/common/ComponentCard";
import Input from "@/components/common/InputField";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jumbled",
  description: "This is Next.js",
};

export default function JumbledClient() {
  return (
    <div>
      <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
        <div className="space-y-6">
          <ComponentCard title="Work">
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <Input type="text" defaultValue={"List Places to Travel"} />
                <Input type="text" defaultValue={"List Places to Food"} />
                <Input type="text" defaultValue={"List Films to Watch"} />
                <Input type="text" defaultValue={"List Sports to Play"} />
                <Input type="text" defaultValue={"Nian Brand & Nian Channel"} />
                <Input type="text" defaultValue={"Inside/Outside Services"} />
                <Input type="text" defaultValue={"Track Relationships"} />
                <Input type="text" defaultValue={"Các keyword cần nắm (PIS, SAS, …)"} />
                <Input type="text" defaultValue={"Follow Zalo Contest → Recap Full Workflow & Saved Resource"} />
                <Input type="text" defaultValue={"Hackathon Launch: Google Tunix Hack"} />
                <Input type="text" defaultValue={"Vesuvius Challenge - Surface Detection"} />
              </div>
            </div>
          </ComponentCard>
        </div>
        <div className="space-y-6">
          <ComponentCard title="Personal">
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <Input type="text" defaultValue={"Kích hoạt app TPBank của Honey"} />
                <Input type="text" defaultValue={"Kích hoạt app TPBank của Nghiêm"} />
                <Input type="text" defaultValue={"Check Hàng Ship"} />
                <Input type="text" defaultValue={"Keyword: Chain of Thought, Hacker $1"} />
                <Input type="text" defaultValue={"Collect Channels"} />
                <Input type="text" defaultValue={"Collect Resource"} />
                <Input type="text" defaultValue={"Collect Full Tools AI"} />
                <Input type="text" defaultValue={"Cover JD All Roles"} />
                <Input type="text" defaultValue={"Mua thêm sách (SEO, Start-up, Selfhelp"} />
                <Input type="text" defaultValue={"Collect Category in Book Store"} />
                <Input type="text" defaultValue={"Handle Wifi (Pass, Speed"} />
                <Input type="text" defaultValue={"Control Device in House"} />
                <Input type="text" defaultValue={"SEO basic for Website"} />
                <Input type="text" defaultValue={"Update Avatar All Service + Project Name"} />
                <Input type="text" defaultValue={"Đòi 2m Shopee IATT"} />
              </div>
            </div>
          </ComponentCard>
        </div>
      </div>
    </div>
  );
}

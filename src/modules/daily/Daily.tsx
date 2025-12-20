import ComponentCard from "@/components/common/ComponentCard";
import Input from "@/components/common/InputField";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Daily",
  description: "This is Next.js",
};

export default function DailyClient() {
  return (
    <div>
      <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
        <div className="space-y-6">
          <ComponentCard title="Social">
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <Input type="text" defaultValue={"Messenger"} />
                <Input type="text" defaultValue={"Zalo"} />
                <Input type="text" defaultValue={"Teams"} />
              </div>
            </div>
          </ComponentCard>
        </div>
        <div className="space-y-6">
          <ComponentCard title="Project">
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <Input type="text" defaultValue={"Ielts Việt"} />
                <Input type="text" defaultValue={"Ecoka Handicraft"} />
                <Input type="text" defaultValue={"In Ảnh Hạ Thu"} />
              </div>
            </div>
          </ComponentCard>
        </div>
        <div className="space-y-6">
          <ComponentCard title="Purge">
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <Input type="text" defaultValue={"Browser"} />
                <Input type="text" defaultValue={"Cloud"} />
                <Input type="text" defaultValue={"Note"} />
                <Input type="text" defaultValue={"Mac App"} />
                <Input type="text" defaultValue={"Mac Storage"} />
                <Input type="text" defaultValue={"Phone Storage"} />
              </div>
            </div>
          </ComponentCard>
        </div>
        <div className="space-y-6">
          <ComponentCard title="Other">
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <Input type="text" defaultValue={"Track Email"} />
                <Input type="text" defaultValue={"TrackFinance"} />
                <Input type="text" defaultValue={"Track News"} />
                <Input type="text" defaultValue={"Track Saved"} />
                <Input type="text" defaultValue={"Track Harmony"} />
                <Input type="text" defaultValue={"English Practice"} />
                <Input type="text" defaultValue={"Explore Activities"} />
                <Input type="text" defaultValue={"Loop Org to fill Running"} />
              </div>
            </div>
          </ComponentCard>
        </div>
      </div>
    </div>
  );
}

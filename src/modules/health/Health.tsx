import ComponentCard from "@/components/common/ComponentCard";
import Input from "@/components/common/InputField";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Health",
  description: "This is Next.js",
};

export default function HealthClient() {
  return (
    <div>
      <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
        <div className="space-y-6">
          <ComponentCard title="Health">
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <Input type="text" defaultValue={"Họ & Tên: Phạm Thanh Nghiêm"} />
                <Input type="text" defaultValue={"Ngày sinh: 20/01/2002"} />
                <Input type="text" defaultValue={"Giới tính: Nam"} />
                <Input type="text" defaultValue={"Số điện thoại: 0911.558.539"} />
                <Input type="text" defaultValue={"Quê quán: P. Long Bình, TP. Cần Thơ"} />
                <Input type="text" defaultValue={"Chiều cao: 1m65"} />
                <Input type="text" defaultValue={"Cân nặng: 90kg"} />
                <Input type="text" defaultValue={"BMI: 33.1 → Béo phì độ 2"} />
                <Input type="text" defaultValue={"Medical Record: chưa có"} />
              </div>
            </div>
          </ComponentCard>
        </div>
      </div>
    </div>
  );
}

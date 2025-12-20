import PayableClient from "@/modules/finance/Payable";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nianverse",
  description: "This is Next.js",
};

export default function page() {
  return (
    <div>
      <PayableClient />
    </div>
  );
}

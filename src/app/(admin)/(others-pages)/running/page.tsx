import RunningClient from "@/modules/running/Running";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nianverse",
  description: "This is Next.js",
};

export default function page() {
  return (
    <div>
      <RunningClient />
    </div>
  );
}

import RunningClient from "@/modules/running/Running";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nianverse",
  description: "This is Next.js",
};

export default function PageDefault() {
  return (
    <div>
      <RunningClient />
    </div>
  );
}

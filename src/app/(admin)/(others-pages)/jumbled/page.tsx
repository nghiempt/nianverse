import JumbledClient from "@/modules/jumbled/Jumbled";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nianverse",
  description: "This is Next.js",
};

export default function page() {
  return (
    <div>
      <JumbledClient />
    </div>
  );
}

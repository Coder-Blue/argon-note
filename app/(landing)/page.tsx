import type { Metadata } from "next";
import Footer from "@/components/Landing/Footer";
import Heading from "@/components/Landing/Heading";
import Heroes from "@/components/Landing/Heroes";

export const metadata: Metadata = {
  title: "Chào mừng",
};

function LandingPage() {
  return (
    <div className="flex min-h-full flex-col dark:bg-[#1F1F1F]">
      <div className="flex flex-1 flex-col items-center justify-center gap-y-8 px-6 pb-10 text-center md:justify-start">
        <Heading />
        <Heroes />
      </div>
      <Footer />
    </div>
  );
}

export default LandingPage;

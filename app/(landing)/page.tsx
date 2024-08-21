<<<<<<< HEAD
import type { Metadata } from "next";
=======
>>>>>>> 39f574211871bd38a767e60931e8f3e1a1d1544c
import Footer from "@/components/Landing/Footer";
import Heading from "@/components/Landing/Heading";
import Heroes from "@/components/Landing/Heroes";

<<<<<<< HEAD
export const metadata: Metadata = {
  title: "Chào mừng",
};

=======
>>>>>>> 39f574211871bd38a767e60931e8f3e1a1d1544c
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

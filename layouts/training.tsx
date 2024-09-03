import { Head } from "./head";
import { Navbar } from "@/components/training/navbar";
import { useState } from "react";
import { Sidebar } from "@/components/training/sidebar";

export default function TrainingDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // State to manage sidebar visibility
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);

  // Toggle sidebar visibility
  function toggleSideNav() {
    setIsSideNavOpen(!isSideNavOpen);
  }

  return (
    <div className="h-screen flex flex-col overflow-hidden">
      <Head />
      <div className="sticky top-0 bg-card flex flex-col items-center z-10">
        <Navbar openSideNav={toggleSideNav} />
      </div>
      <div className="flex-grow flex flex-col items-center relative">
        <main className="mt-3 w-full md:max-w-[1100px] px-5 xl:px-0">
          {children}
        </main>

        {/* SideBar */}
        <div
          className={`bg-background pt-5 transition-transform z-20 w-full transform ${
            isSideNavOpen ? "translate-x-0" : "translate-x-full"
          } md:translate-x-0 duration-700 ease-in-out md:hidden absolute top-0 right-0 h-full`}
        >
          <Sidebar closeSideNav={toggleSideNav} />
        </div>
      </div>
    </div>
  );
}

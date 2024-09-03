import { Head } from "./head";
import { Navbar } from "@/components/training/navbar";
import { useState, useEffect } from "react";
import { Sidebar } from "@/components/training/sidebar";

export default function TrainingDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // State
  const [sideNavLeft, setSideNavLeft] = useState(`left-[800px]`);

  function CloseSideNav() {
    setSideNavLeft(`left-[800px]`);
  }

  function OpenSideNav() {
    sideNavLeft == "left-[800px]"
      ? setSideNavLeft(`left-0`)
      : setSideNavLeft(`left-[800px]`);
  }

  return (
    <div className="h-screen flex flex-col">
      <Head />
      <div className="sticky top-0 bg-card flex flex-col items-center z-10">
        <Navbar openSideNav={OpenSideNav} />
      </div>
      <div className="flex-grow flex flex-col items-center relative">
        <main className="mt-3 w-full md:max-w-[1100px] px-5 xl:px-0">
          {children}
        </main>

        {/* SideBarf */}
        <Sidebar sideNavLeft={sideNavLeft} closeSideNav={CloseSideNav} />
      </div>
    </div>
  );
}

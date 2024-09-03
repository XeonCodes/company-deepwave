import { siteConfig } from "@/config/site";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

interface LinkTypes {
  title: string;
  path: string;
}

export const Sidebar = ({ sideNavLeft }: { sideNavLeft: any }) => {
  const router = useRouter();

  const [active, setActive] = useState("");

  useEffect(() => {
    setActive(router.pathname);
  }, []);

  const Links: LinkTypes[] = [
    {
      title: "Dashboard",
      path: siteConfig.pathLinks.trainingDashboard,
    },
    {
      title: "Courses",
      path: siteConfig.pathLinks.trainingCourses,
    },
    {
      title: "Tools",
      path: siteConfig.pathLinks.trainingTools,
    },
    {
      title: "Buy a Course",
      path: siteConfig.pathLinks.trainingPurchase,
    },
    {
      title: "Notification",
      path: siteConfig.pathLinks.trainingNotificaiton,
    },
    {
      title: "Profile",
      path: siteConfig.pathLinks.trainingProfile,
    },
  ];

  return (
    <nav
      className={`w-full flex transition-all ${sideNavLeft} md:left-0 duration-700 sm:duration-0 ease-in-out flex-col md:hidden bg-background h-[100%] absolute top-0 md:max-w-[1100px] xl:px-0`}
    >
      <ul className="mt-5">
        {Links.map((v: any, i: any) => (
          <Link href={v.path}>
            <li
              key={i}
              className={`py-5 px-6 ${active === v.path && "bg-card font-medium text-primary"}`}
            >
              <div
                className={`text-[14px] ${active === v.path ? "opacity-100" : "opacity-65"}`}
              >
                {v.title}
              </div>
            </li>
          </Link>
        ))}
      </ul>
    </nav>
  );
};

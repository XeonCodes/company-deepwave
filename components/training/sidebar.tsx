import { siteConfig } from "@/config/site";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { IoChevronBackOutline } from "react-icons/io5";

interface LinkTypes {
  title: string;
  path: string;
}

export const Sidebar = ({ closeSideNav }: { closeSideNav: () => void }) => {
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
    <nav className={`h-[100%] xl:px-0`}>
      <ul className=" flex flex-col gap-7">
        <div>
          {Links.map((v: any, i: any) => (
            <Link href={v.path} role="presentation" onClick={closeSideNav}>
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
        </div>

        <div className="px-6 flex flex-col items-end">
          <Link
            className="py-3 font-medium w-36 px-3 flex items-center gap-1 justify-between rounded-md bg-primary text-white"
            href={siteConfig.pathLinks.landingPage}
          >
            <IoChevronBackOutline />
            Back Home
          </Link>
        </div>
      </ul>
    </nav>
  );
};

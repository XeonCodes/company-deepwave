import { ProfileImgDetails } from "@/components/training/profile-img-details";
import { siteConfig } from "@/config/site";
import TrainingDashboardLayout from "@/layouts/training";
import { Divider } from "@nextui-org/divider";
import { Skeleton } from "@nextui-org/skeleton";
import Image from "next/image";
import router from "next/router";
import { useState, useEffect } from "react";
import { FiSettings } from "react-icons/fi";
import { toast } from "react-toastify";
import { MdOutlineEmail } from "react-icons/md";
import Link from "next/link";

export default function IndexPage() {
  const [sessionData, setSessionData] = useState<any>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    async function Check() {
      const response = await fetch("/api/session", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const result = await response.json();
      if (!result.sessionData.isLoggedIn) {
        return router.push(`${siteConfig.pathLinks.signin}`);
      }
      setSessionData(result.sessionData);
      setIsLoaded(true);
    }
    Check();
  }, []);

  return (
    <TrainingDashboardLayout>
      <section className="flex flex-col sm:flex-row w-full gap-3 items-start justify-between">
        <div className="w-full basis-[29%] rounded-lg shadow-none sm:shadow-md bg-card order-3 sm:order-1">
          {/* Profile Details */}
          <div className="p-3 md:p-5 flex flex-col gap-4">
            <div className="flex items-start justify-between">
              <ProfileImgDetails
                title="Student"
                isLoaded={isLoaded}
                name={sessionData?.fullname}
                img="man.jpg"
                size={45}
              />
              <FiSettings size={13} />
            </div>
            <Divider />

            <Skeleton
              className="rounded-md"
              disableAnimation
              isLoaded={isLoaded}
            >
              <div>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Minus vitae molestias nobis alias sapiente
                </p>
              </div>
            </Skeleton>
          </div>
        </div>
        <div className="w-full basis-[34%] rounded-lg shadow-none sm:shadow-md bg-card order-1 sm:order-2">
          <div className="p-3 md:p-5">Center</div>
        </div>
        <div className="w-full basis-[34%] shadow-none sm:shadow-md order-2 sm:order-3">
          <div className="card bg-card p-3 flex items-center justify-between md:p-5 ">
            <ProfileImgDetails
              title={sessionData?.tutorTitle}
              isLoaded={isLoaded}
              name={sessionData?.tutor}
              img={sessionData?.tutorImg}
              size={35}
            />
            <div className="border-1 p-1 rounded-md">
              <Link
                href={`mailto:${sessionData?.tutorEmail}?subject=${encodeURIComponent("Deepwave Phanthom Student")}`}
              >
                <MdOutlineEmail
                  role="presentation"
                  className="opacity-70"
                  size={20}
                />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </TrainingDashboardLayout>
  );
}

import { siteConfig } from "@/config/site";
import TrainingDashboardLayout from "@/layouts/training";
import { Divider } from "@nextui-org/divider";
import { Skeleton } from "@nextui-org/skeleton";
import Image from "next/image";
import router from "next/router";
import { useState, useEffect } from "react";
import { FiSettings } from "react-icons/fi";
import { toast } from "react-toastify";

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
      if (!result.isLoggedIn) {
        return router.push(`${siteConfig.pathLinks.signin}`);
      }
      setSessionData(result);
      setIsLoaded(true);
    }
    Check();
  }, []);

  return (
    <TrainingDashboardLayout>
      <section className="flex flex-col sm:flex-row w-full gap-3 items-start justify-between">
        <div className="w-full basis-[29%] flex flex-col gap-4 p-3 md:p-5 rounded-lg shadow-none sm:shadow-md bg-card order-3 sm:order-1">
          {/* Profile Details */}
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-2">
              {/* Image Div */}
              <Skeleton
                className="rounded-full"
                disableAnimation
                isLoaded={isLoaded}
              >
                <div className="bg-background h-[45px] w-[45px] rounded-full">
                  <Image
                    width={45}
                    height={45}
                    alt="dp"
                    className="h-[45px] w-[45px] rounded-full object-cover"
                    src={"/assets/lady.jpg"}
                  />
                </div>
              </Skeleton>
              {/* Text Div */}
              <Skeleton
                className="rounded-md"
                disableAnimation
                isLoaded={isLoaded}
              >
                <div className=" leading-4">
                  <h1 className="text-[15px] sm:text-[13px] lg:text-[15px] font-medium">
                    {sessionData?.fullname}
                  </h1>
                  <p className="text-[13px] sm:text-[12px] lg:text-[13px] opacity-70">
                    Student
                  </p>
                </div>
              </Skeleton>
            </div>

            <FiSettings size={13} />
          </div>
          <Divider />

          <Skeleton className="rounded-md" disableAnimation isLoaded={isLoaded}>
            <div>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus
                vitae molestias nobis alias sapiente
              </p>
            </div>
          </Skeleton>
        </div>
        <div className="w-full basis-[34%] rounded-lg shadow-none sm:shadow-md bg-card p-3 md:p-5 order-1 sm:order-2">
          Center
        </div>
        <div className="w-full basis-[34%] rounded-lg shadow-none sm:shadow-md bg-card p-3 md:p-5 order-2 sm:order-3">
          Right
        </div>
      </section>
    </TrainingDashboardLayout>
  );
}

import { ProfileImgDetails } from "@/components/training/profile-img-details";
import { siteConfig } from "@/config/site";
import TrainingDashboardLayout from "@/layouts/training";
import { Divider } from "@nextui-org/divider";
import { Skeleton } from "@nextui-org/skeleton";
import router from "next/router";
import { useState, useEffect } from "react";
import { FiSettings } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import Link from "next/link";
import { IoIosMore } from "react-icons/io";
import { PiGraduationCapFill } from "react-icons/pi";
import { HiOutlineCalendarDays } from "react-icons/hi2";
import { ProfileImgDetailsSmall } from "@/components/training/ProfileDetailSmall";
import { IoTimeOutline } from "react-icons/io5";
import { Button } from "@nextui-org/button";

interface PostTypes {
  id: number;
  title: string;
  tutor: string;
  start: string;
  end: string;
  time: string;
  category: string;
  dp: string;
  bought: boolean;
}

export default function CoursesPage() {
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
      if (!result.sessionData?.isLoggedIn) {
        return router.push(`${siteConfig.pathLinks.signin}`);
      }
      setSessionData(result.sessionData);
      setIsLoaded(true);
    }
    Check();
  }, []);

  const post: PostTypes[] = [];

  return (
    <TrainingDashboardLayout>
      <section className="flex flex-col sm:flex-row w-full gap-3 items-start justify-between">
        <div className="w-full mb-5 md:mb-0 basis-[29%] rounded-lg shadow-none sm:shadow-md bg-card order-3 sm:order-1">
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
        <div className="w-full basis-[34%] scrollbar-hide overflow-scroll h-screen flex flex-col gap-3 order-1 sm:order-2">
          {post?.length < 2 && (
            <div
              className={`p-4 md:p-5 flex flex-col gap-4 rounded-lg shadow-none sm:shadow-md bg-card`}
            >
              {/* Top */}
              <div className="flex items-center opacity-45 justify-between">
                <Skeleton
                  className="rounded-md"
                  disableAnimation
                  isLoaded={isLoaded}
                >
                  <p className="text-[11px]">MOBILE DEVELOPMENT</p>
                </Skeleton>
                <IoIosMore />
              </div>

              <div className="flex items-start opacity-45 sm:flex-col lg:flex-row  justify-between">
                <div className="flex gap-3">
                  <Skeleton
                    className="rounded-md"
                    disableAnimation
                    isLoaded={isLoaded}
                  >
                    <div
                      className={`${"bg-purple-200"} flex shrink-0 items-center justify-center rounded-lg h-[32px] w-[32px]`}
                    >
                      <PiGraduationCapFill size={18} color={`${"black"}`} />
                    </div>
                  </Skeleton>
                  <div className="flex flex-col gap-1">
                    <Skeleton
                      className="rounded-md"
                      disableAnimation
                      isLoaded={isLoaded}
                    >
                      <div className=" flex items-center gap-1">
                        <HiOutlineCalendarDays
                          size={14}
                          className=" opacity-60"
                        />
                        <p className="text-[12px] opacity-60">
                          10 Sept - 10 Dec
                        </p>
                      </div>
                    </Skeleton>
                    <ProfileImgDetailsSmall
                      isLoaded={isLoaded}
                      name={"Luciana A."}
                      img={"lady.jpg"}
                      size={15}
                    />
                  </div>
                </div>

                <Skeleton
                  className="rounded-md"
                  disableAnimation
                  isLoaded={isLoaded}
                >
                  <div className="ml-0 sm:ml-11 lg:ml-0 mt-0 sm:mt-1 lg:mt-0 flex items-center gap-1">
                    <IoTimeOutline size={14} className=" opacity-60" />
                    <p className="text-[12px] opacity-60">10:00 - 11:00PM</p>
                  </div>
                </Skeleton>
              </div>

              <Divider />

              <div>
                <Skeleton
                  className="rounded-md"
                  disableAnimation
                  isLoaded={isLoaded}
                >
                  <h1 className="text-[18px] opacity-45 sm:text-[14px] lg:text-[18px] font-medium">
                    You do not have an active course yet. Vist the home page to
                    buy a course to get started.
                  </h1>
                </Skeleton>
              </div>

              {/* Actions */}
              <Skeleton
                className="rounded-md"
                disableAnimation
                isLoaded={isLoaded}
              >
                <Link href={`${siteConfig.pathLinks.trainingDashboard}`}>
                  <Button
                    color="primary"
                    radius="sm"
                    size="md"
                    className="text-white w-full"
                  >
                    Go to Home
                  </Button>
                </Link>
              </Skeleton>
            </div>
          )}

          {post.map((v: any, i: any) => (
            <div
              key={i}
              className={`p-4 md:p-5 flex flex-col gap-4 rounded-lg shadow-none sm:shadow-md bg-card`}
            >
              {/* Top */}
              <div className="flex items-center opacity-60 justify-between">
                <Skeleton
                  className="rounded-md"
                  disableAnimation
                  isLoaded={isLoaded}
                >
                  <p className="text-[11px]">{v.category}</p>
                </Skeleton>
                <IoIosMore />
              </div>

              <div className="flex items-start sm:flex-col lg:flex-row  justify-between">
                <div className="flex gap-3">
                  <Skeleton
                    className="rounded-md"
                    disableAnimation
                    isLoaded={isLoaded}
                  >
                    <div
                      className={`${v.bought ? "bg-purple-200" : "bg-zinc-100"} flex shrink-0 items-center justify-center rounded-lg h-[32px] w-[32px]`}
                    >
                      <PiGraduationCapFill
                        size={18}
                        color={`${v.bought ? "black" : "grey"}`}
                      />
                    </div>
                  </Skeleton>
                  <div className="flex flex-col gap-1">
                    <Skeleton
                      className="rounded-md"
                      disableAnimation
                      isLoaded={isLoaded}
                    >
                      <div className=" flex items-center gap-1">
                        <HiOutlineCalendarDays
                          size={14}
                          className=" opacity-60"
                        />
                        <p className="text-[12px] opacity-60">
                          {v.start} - {v.end}
                        </p>
                      </div>
                    </Skeleton>
                    <ProfileImgDetailsSmall
                      isLoaded={isLoaded}
                      name={v.tutor}
                      img={v.dp}
                      size={15}
                    />
                  </div>
                </div>

                <Skeleton
                  className="rounded-md"
                  disableAnimation
                  isLoaded={isLoaded}
                >
                  <div className="ml-0 sm:ml-11 lg:ml-0 mt-0 sm:mt-1 lg:mt-0 flex items-center gap-1">
                    <IoTimeOutline size={14} className=" opacity-60" />
                    <p className="text-[12px] opacity-60">{v.time}</p>
                  </div>
                </Skeleton>
              </div>

              <Divider />

              <div>
                <Skeleton
                  className="rounded-md"
                  disableAnimation
                  isLoaded={isLoaded}
                >
                  <h1 className="text-[18px] sm:text-[14px] lg:text-[18px] font-medium">
                    {v.title}
                  </h1>
                </Skeleton>
              </div>

              {/* Actions */}
              {v.bought && (
                <Skeleton
                  className="rounded-md"
                  disableAnimation
                  isLoaded={isLoaded}
                >
                  <Button
                    color="primary"
                    radius="sm"
                    size="md"
                    className="text-white w-full"
                  >
                    Go to the lesson
                  </Button>
                </Skeleton>
              )}

              {!v.bought && (
                <Skeleton
                  className="rounded-md"
                  disableAnimation
                  isLoaded={isLoaded}
                >
                  <div className="flex w-full justify-between items-center">
                    <button className=" basis-[49%] text-[14px] cursor-pointer rounded-lg h-[40px] border-1 w-full">
                      Read More
                    </button>
                    <button className=" basis-[49%] text-[14px] cursor-pointer rounded-lg h-[40px] border-1 w-full">
                      Get Started
                    </button>
                  </div>
                </Skeleton>
              )}
            </div>
          ))}
        </div>
        <div className="w-full basis-[34%] flex flex-col gap-3 order-2 sm:order-3">
          <div
            className={`card ${sessionData?.tutors?.length < 1 && "opacity-45"} shadow-none sm:shadow-md bg-card p-3 flex items-start justify-between md:p-5`}
          >
            <div className="flex flex-col gap-2">
              <ProfileImgDetails
                title={sessionData?.tutorTitle}
                isLoaded={isLoaded}
                name={sessionData?.tutor}
                img={"lady.jpg"}
                size={35}
              />
              <p className="text-[13px]">
                You have no active course yet. A tutor would be assigned to you
                once you enroll for a course.
              </p>
            </div>
            <div className="border-1 p-2 rounded-md">
              <Link
                className={`${sessionData?.tutors?.length < 1 && "pointer-events-none"}`}
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

          {/* <div
            className={`shadow-none sm:shadow-md card bg-card p-3 flex items-start justify-between md:p-5`}
          >
            <p>kcnc</p>
          </div> */}
        </div>
      </section>
    </TrainingDashboardLayout>
  );
}

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
      if (!result.sessionData?.isLoggedIn) {
        return router.push(`${siteConfig.pathLinks.signin}`);
      }
      setSessionData(result.sessionData);
      setIsLoaded(true);
    }
    Check();
  }, []);

  const post: PostTypes[] = [
    {
      id: 1,
      title: "Cross platform mobile app development with React Native",
      tutor: "Luciana A.",
      start: "10 Sept",
      end: "10 Dec",
      time: "10:00 - 11:00PM",
      category: "MOBILE DEVELOPMENT",
      dp: "lady.jpg",
      bought: true,
    },
    {
      id: 2,
      title: "Learn Full-Stack Web Development with Next.js and Others",
      tutor: "John D.",
      start: "15 Sept",
      end: "15 Dec",
      time: "2:00 - 3:30PM",
      category: "WEB DEVELOPMENT",
      dp: "man.jpg",
      bought: false,
    },
    {
      id: 3,
      title: "Advanced JavaScript Techniques & Understanding Client",
      tutor: "Emily R.",
      start: "20 Sept",
      end: "20 Dec",
      time: "4:00 - 5:00PM",
      category: "PROGRAMMING LANG.",
      dp: "lady.jpg",
      bought: false,
    },
    {
      id: 4,
      title: "Building RESTful APIs with Laravel Backend Development",
      tutor: "Michael T.",
      start: "25 Sept",
      end: "25 Dec",
      time: "6:00 - 7:30PM",
      category: "APIs DEVELOPMENT",
      dp: "man.jpg",
      bought: false,
    },
  ];

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
        <div className="w-full basis-[34%] scrollbar-hide overflow-scroll h-screen flex flex-col gap-3 order-1 sm:order-2">
          {post.map((v: any, i: any) => (
            <div
              key={i}
              className={`p-4 md:p-5 flex flex-col gap-4 rounded-lg shadow-none sm:shadow-md bg-card`}
            >
              {/* Top */}
              <div className="flex items-center opacity-60 justify-between">
                <p className="text-[11px]">{v.category}</p>
                <IoIosMore />
              </div>

              <div className="flex items-start sm:flex-col lg:flex-row  justify-between">
                <div className="flex gap-3">
                  <div
                    className={`${v.bought ? "bg-purple-200" : "bg-zinc-100"} flex shrink-0 items-center justify-center rounded-lg h-[32px] w-[32px]`}
                  >
                    <PiGraduationCapFill
                      size={18}
                      color={`${v.bought ? "black" : "grey"}`}
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <div className=" flex items-center gap-1">
                      <HiOutlineCalendarDays
                        size={14}
                        className=" opacity-60"
                      />
                      <p className="text-[12px] opacity-60">
                        {v.start} - {v.end}
                      </p>
                    </div>
                    <ProfileImgDetailsSmall
                      isLoaded={isLoaded}
                      name={sessionData?.tutor}
                      img={v.dp}
                      size={15}
                    />
                  </div>
                </div>
                <div className="ml-0 sm:ml-11 lg:ml-0 mt-0 sm:mt-1 lg:mt-0 flex items-center gap-1">
                  <IoTimeOutline size={14} className=" opacity-60" />
                  <p className="text-[12px] opacity-60">{v.time}</p>
                </div>
              </div>

              <Divider />

              <div>
                <h1 className="text-[18px] sm:text-[14px] lg:text-[18px] font-medium">
                  {v.title}
                </h1>
              </div>

              {/* Actions */}
              {v.bought && (
                <Button color="primary" radius="sm" className="text-white">
                  Go to the lesson
                </Button>
              )}

              {!v.bought && (
                <div className="flex justify-between items-center">
                  <button className=" basis-[49%] text-[14px] cursor-pointer rounded-lg h-[40px] border-1 w-full">
                    Read More
                  </button>
                  <button className=" basis-[49%] text-[14px] cursor-pointer rounded-lg h-[40px] border-1 w-full">
                    Get Started
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="w-full basis-[34%] shadow-none sm:shadow-md order-2 sm:order-3">
          <div className="card bg-card p-3 flex items-center justify-between md:p-5 ">
            <ProfileImgDetails
              title={sessionData?.tutorTitle}
              isLoaded={isLoaded}
              name={sessionData?.tutor}
              img={"lady.jpg"}
              size={35}
            />
            <div className="border-1 p-2 rounded-md">
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

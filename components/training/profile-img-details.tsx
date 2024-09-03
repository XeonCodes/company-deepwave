import { Skeleton } from "@nextui-org/skeleton";
import React, { useState } from "react";
import Image from "next/image";

export const ProfileImgDetails = ({
  isLoaded,
  name,
  title,
  img,
  size,
}: {
  isLoaded: boolean;
  name: any;
  title: string;
  img: string;
  size: number;
}) => {
  return (
    <div className="flex items-center gap-2">
      {/* Image Div */}
      <Skeleton className="rounded-full" disableAnimation isLoaded={isLoaded}>
        <div
          className={`bg-background object-cover ${`h-[${size}px]`} ${`w-[${size}px]`} rounded-full`}
        >
          <Image
            width={size}
            height={size}
            alt="dp"
            className={`h-[${size}px] w-[${size}px] rounded-full object-cover`}
            src={`/assets/${img}`}
          />
        </div>
      </Skeleton>
      {/* Text Div */}
      <Skeleton className="rounded-md" disableAnimation isLoaded={isLoaded}>
        <div className=" leading-4">
          <h1 className="text-[15px] sm:text-[13px] lg:text-[15px] font-medium">
            {name}
          </h1>
          <p className="text-[13px] sm:text-[12px] lg:text-[13px] opacity-70">
            {title}
          </p>
        </div>
      </Skeleton>
    </div>
  );
};

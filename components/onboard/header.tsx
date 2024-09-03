import { siteConfig } from "@/config/site";
import Link from "next/link";
import React from "react";

export default function HeaderText({
  title,
  subtitle,
  actionText,
  path,
}: {
  title: string;
  subtitle: string;
  actionText: string;
  path: string;
}) {
  return (
    <div className="text-center flex flex-col gap-3">
      <h1 className="text-[26px] font-semibold text-black">{title}</h1>
      <p className="text-[14px] font-normal text-black">
        {subtitle}{" "}
        <Link href={`/${path}`}>
          <span className="font-bold underline underline-offset-4">
            {actionText}
          </span>
        </Link>
      </p>
    </div>
  );
}

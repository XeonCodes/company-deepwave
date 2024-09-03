import React from "react";
import { siteConfig } from "@/config/site";
import Link from "next/link";

export async function Nav() {
  return (
    <div>
      <div>
        <Link
          className="text-lg"
          href={`${siteConfig.pathLinks.trainingDashboard}`}
        >
          Dashboard
        </Link>
      </div>

      <div>
        <div>
          <Link className="text-lg" href={`${siteConfig.pathLinks.signin}`}>
            Sign In
          </Link>
        </div>
        <div>
          <Link className="text-lg" href={`${siteConfig.pathLinks.register}`}>
            Register
          </Link>
        </div>
      </div>
    </div>
  );
}

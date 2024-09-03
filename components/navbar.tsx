import React, { useEffect, useState } from "react";
import { siteConfig } from "@/config/site";
import Link from "next/link";

interface SessionTypes {
  isLoggedIn: boolean;
}

function Navbar() {
  return (
    <div className="p-4">
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
        <div>
          <Link className="text-lg" href={`${siteConfig.pathLinks.register}`}>
            Training
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

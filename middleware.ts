// middleware.ts
import { siteConfig } from "@/config/site";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// This function is called on each request
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Define routes that require authentication
  const protectedRoutes = ["/dashboard"];
  const protectOnboard = ["/signin", "/register"];

  // Check if the request is for a protected route
  if (protectedRoutes.some((route) => pathname.startsWith(route))) {
    // Check for the session data (you can use cookies or headers)
    const session = request.cookies.get(process.env.COOKIE_NAME!); // Or use another method to check session

    // If session does not exist, redirect to the login page
    if (!session) {
      return NextResponse.redirect(
        new URL(`${siteConfig.pathLinks.signin}`, request.url)
      );
    }
  } else if (protectOnboard.some((route) => pathname.startsWith(route))) {
    // Check for the session data (you can use cookies or headers)
    const session = request.cookies.get(process.env.COOKIE_NAME!); // Or use another method to check session

    // If session does not exist, redirect to the login page
    if (session) {
      return NextResponse.redirect(
        new URL(`${siteConfig.pathLinks.trainingDashboard}`, request.url)
      );
    }
  }

  // Allow the request to proceed if all checks pass
  return NextResponse.next();
}

// Apply middleware to the entire site or specific paths
export const config = {
  matcher: ["/dashboard/:path*", "/dashboard"],
};

import { siteConfig } from "@/config/site";
import { Link } from "@nextui-org/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

export const SignInForm = () => {
  const router = useRouter();

  async function handleLogin(event: any) {
    event.preventDefault(); // Prevents the default form submission

    const formData = new FormData(event.target); // Creates a FormData object from the form

    const response = await fetch("/api/login", {
      method: "POST",
      body: JSON.stringify({
        email: formData.get("email"), // Assuming you're using email as username
        password: formData.get("password"),
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const result = await response.json();
    if (response.ok) {
      // Handle successful login
      router.push(`${siteConfig.pathLinks.trainingDashboard}`);
      // You can also redirect or update the UI here
    } else {
      toast(result.error);
    }
  }

  return (
    <form onSubmit={handleLogin} className="flex flex-col gap-6">
      {/* Email */}
      <div className="flex flex-col gap-1">
        <label htmlFor="email">
          <p className="label1">Your email</p>
        </label>
        <input
          type="email"
          required
          className="input1 bg-white text-black"
          name="email"
          placeholder="e.g, example@xyz.com"
          id="email"
        />
      </div>

      {/* Password */}
      <div className="flex flex-col gap-1">
        <label htmlFor="password">
          <p className="label1">Your password</p>
        </label>
        <input
          type="password"
          required
          placeholder="•••••••"
          className="input1 bg-white text-black"
          name="password"
          id="password"
        />
      </div>

      <div className="flex flex-col gap-3">
        <button type="submit" className="main-btn mt-1">
          Log in
        </button>
        <Link href={`${siteConfig.pathLinks.trainingDashboard}`}>
          <p className="text-black font-semibold underline underline-offset-4">
            Forgot password?
          </p>
        </Link>
      </div>
    </form>
  );
};

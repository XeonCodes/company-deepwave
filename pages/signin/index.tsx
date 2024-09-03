import HeaderText from "@/components/onboard/header";
import { SignInForm } from "@/components/onboard/signinComp";
import { siteConfig } from "@/config/site";
import OnboardLayout from "@/layouts/onboard";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

export default function SigninPage() {
  return (
    <OnboardLayout>
      <section className="flex flex-col gap-10">
        {/* Header Text */}
        <HeaderText
          title="Welcome back"
          subtitle={`New to ${siteConfig.name}?`}
          actionText="Sign up"
          path="register"
        />
        <SignInForm />
      </section>
    </OnboardLayout>
  );
}

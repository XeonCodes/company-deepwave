import HeaderText from "@/components/onboard/header";
import { SignInForm } from "@/components/onboard/signinComp";
import { siteConfig } from "@/config/site";
import OnboardLayout from "@/layouts/onboard";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

export default function SigninPage() {
  const router = useRouter();
  const [load, setLoad] = useState(false);

  useEffect(() => {
    async function Check() {
      const response = await fetch("/api/session", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const result = await response.json();
      if (result.isLoggedIn) {
        return router.push(`${siteConfig.pathLinks.trainingDashboard}`);
      }
      setLoad(true);
    }
    Check();
  }, []);

  if (!load) {
    return;
  }

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

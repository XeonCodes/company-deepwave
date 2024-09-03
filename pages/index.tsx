import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import { ThemeSwitch } from "@/components/theme-switch";

export default function Home() {
  return (
    <DefaultLayout>
      <section className="text-center">
        <div className="flex flex-col gap-4">
          <h1 className={title()}>Landing Page</h1>
          <div>
            <ThemeSwitch />
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
}

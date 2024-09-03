import { title } from "@/components/primitives";
import DashboardLayout from "@/layouts/dashboard";
import TrainingDashboardLayout from "@/layouts/training";

export default function IndexPage() {
  return (
    <TrainingDashboardLayout>
      <section className="text-center">
        <div>
          <h1 className={title()}>General Notification</h1>
        </div>
      </section>
    </TrainingDashboardLayout>
  );
}

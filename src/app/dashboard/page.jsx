import Dashboard from "@/components/Dashboard";
import { auth } from "@/lib/auth";
import { getAppointments } from "@/lib/fetchData";
import { headers } from "next/headers";
import React from "react";

export const metadata = {
  title: "DoctorNow | Dashboard",
  description: "",
};

const DashboardPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const userId = session?.user?.id;

  const appointments = await getAppointments(userId);
  return (
    <div className="max-w-7xl mx-auto py-12">
      <Dashboard appointments={appointments} />
    </div>
  );
};

export default DashboardPage;

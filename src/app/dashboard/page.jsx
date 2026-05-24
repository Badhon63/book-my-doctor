import Dashboard from "@/components/Dashboard";
import { auth } from "@/lib/auth";
import { getAppointments } from "@/lib/fetchData";
import { headers } from "next/headers";
import React from "react";

const DashboardPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(), // you need to pass the headers object.
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

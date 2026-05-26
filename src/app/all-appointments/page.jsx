import React, { Suspense } from "react";
import DoctorSearch from "../../components/DoctorSearch";
import { getAllDoctors } from "@/lib/fetchData";
import { Spinner } from "@heroui/react";

export const metadata = {
  title: "DoctorNow | Appointments",
  description: "",
};

const AllAppointmentsPage = async () => {
  const doctors = await getAllDoctors();

  return (
    <div className="max-w-7xl mx-auto mt-10 px-4">
      <p className="text-center text-4xl md:text-5xl font-bold text-gray-900 mb-4">
        All Appointments
      </p>
      <p className="text-center text-lg text-gray-600 mb-5">
        Find the right doctor for you.
      </p>

      <Suspense
        fallback={
          <div className="flex items-center justify-center py-10">
            <Spinner color="current" />
          </div>
        }
      >
        <DoctorSearch doctors={doctors} />
      </Suspense>
    </div>
  );
};

export default AllAppointmentsPage;

import React, { Suspense } from "react";
import CardAllDoctors from "../../components/CardAllDoctors";
import { getAllDoctors } from "@/lib/fetchData";
import { Spinner } from "@heroui/react";

const AllAppointmentsPage = async () => {
  const doctors = await getAllDoctors();
  return (
    <div className="max-w-7xl mx-auto mt-10 px-4">
      <p className="text-center text-4xl md:text-5xl font-bold text-gray-900 mb-4">
        All Appointments
      </p>
      <p className=" text-center text-lg text-gray-600 mb-5">
        Find the right doctor for you.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 md:gap-5">
        <Suspense
          fallback={
            <div className="col-span-1 sm:col-span-2 md:col-span-3 flex items-center justify-center py-10">
              <Spinner color="current" />
            </div>
          }
        >
          {doctors.map((doctor) => (
            <CardAllDoctors doctor={doctor} key={doctor.id} />
          ))}
        </Suspense>
      </div>
    </div>
  );
};

export default AllAppointmentsPage;

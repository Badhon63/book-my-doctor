import React from "react";
import { getAllDoctors } from "../lib/fetchData";
import CardAllDoctors from "../../components/CardAllDoctors";

const AllAppointmentsPage = async () => {
  const doctors = await getAllDoctors();
  return (
    <div className="max-w-7xl mx-auto mt-10">
      <p className="text-center text-4xl md:text-5xl font-bold text-gray-900 mb-4">
        All Appointments
      </p>
      <p className=" text-center text-lg text-gray-600 mb-5">
        Find the right doctor for you.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        {doctors.map((doctor) => (
          <CardAllDoctors doctor={doctor} key={doctor.id} />
        ))}
      </div>
    </div>
  );
};

export default AllAppointmentsPage;

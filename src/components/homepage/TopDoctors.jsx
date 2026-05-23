import React from "react";
import CardAllDoctors from "../CardAllDoctors";

const TopDoctors = ({ topDoctors }) => {
  return (
    <div className="max-w-7xl mx-auto pt-16">
      <p className="text-center text-4xl md:text-5xl font-bold text-gray-900 mb-4">
        Top Rated Doctors
      </p>
      <p className=" text-center text-lg text-gray-600 mb-10">
        Highly reviewed specialists ready to see you.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        {topDoctors.map((doctor) => (
          <CardAllDoctors doctor={doctor} key={doctor.id} />
        ))}
      </div>
    </div>
  );
};

export default TopDoctors;

"use client";

import React, { useState } from "react";
import { Input } from "@heroui/react";
import CardAllDoctors from "./CardAllDoctors";
import { FiSearch } from "react-icons/fi";

export default function DoctorSearch({ doctors }) {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredDoctors = doctors.filter((doctor) =>
    doctor.name.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <>
      <div className="mb-8 md:w-1/2 mx-auto">
        <div className="relative">
          <Input
            placeholder="Search by doctor's name"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full border border-gray-300 pl-10"
          />
          <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 md:gap-5">
        {filteredDoctors.length > 0 ? (
          filteredDoctors.map((doctor) => (
            <CardAllDoctors doctor={doctor} key={doctor.id} />
          ))
        ) : (
          <div className="col-span-1 sm:col-span-2 md:col-span-3 text-center py-10">
            <p className="text-gray-600 text-lg">No doctors found</p>
          </div>
        )}
      </div>
    </>
  );
}

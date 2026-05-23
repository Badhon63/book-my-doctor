import React from "react";
import { Button } from "@heroui/react";
import { FiMapPin, FiClock } from "react-icons/fi";
import Image from "next/image";
import Link from "next/link";

const CardAllDoctors = ({ doctor }) => {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200 ">
      <div className="w-full h-48 overflow-hidden">
        <Image
          src={doctor.image}
          alt={doctor.name}
          width={500}
          height={500}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>

      <div className="p-6 space-y-2">
        <h3 className="text-xl font-bold text-gray-900">{doctor.name}</h3>

        <p className="text-xs font-semibold text-purple-900 uppercase tracking-wide">
          {doctor.specialty}
        </p>

        <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">
          {doctor.description}
        </p>

        <div className="flex flex-col text-left justify-start py-3 gap-2">
          <div className="flex items-center gap-1">
            <FiClock className="w-5 h-5 opacity-60" />
            <span className="text-xs font-medium text-gray-700">
              {doctor.experience} experience
            </span>
          </div>

          <div className="flex items-center gap-1">
            <FiMapPin className="w-5 h-5 opacity-60" />
            <span className="text-xs font-medium text-gray-700">
              {doctor.location}
            </span>
          </div>
        </div>

        <div className="flex justify-between items-center border-t border-gray-200 pt-4">
          <div className="flex flex-col">
            <p className="text-xs text-gray-700">Consultation</p>
            <span className="text-lg font-bold text-green-600">
              ৳{doctor.fee}
            </span>
          </div>
          <Link href={`doctors/${doctor.id}`}>
            <Button color="primary" className=" font-semibold rounded-lg">
              View Details
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CardAllDoctors;

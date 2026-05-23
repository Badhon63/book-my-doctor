import { Button } from "@heroui/react";
import Image from "next/image";
import React from "react";
import { FaHospital } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa6";
import { FiMapPin } from "react-icons/fi";
import { RiMoneyDollarCircleFill } from "react-icons/ri";

const DetailsCardDoctor = ({ docDetails }) => {
  const {
    name,
    specialty,
    image,
    experience,
    availability,
    description,
    hospital,
    location,
    fee,
  } = docDetails;
  return (
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-center gap-7 items-center pt-16">
      <figure className="">
        <Image
          src={image}
          alt=""
          width={500}
          height={500}
          className="h-98  w-80 object-cover rounded-md"
        ></Image>
      </figure>
      <div className="space-y-3 px-5 sm:px-0">
        <p className="bg-purple-200 text-purple-800 font-bold w-fit px-4 py-1 rounded-full text-xs">
          {specialty}
        </p>
        <p className="text-4xl font-bold">{name}</p>
        <p className="text-gray-500">{description}</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          <div className="flex items-center gap-3 bg-blue-100 p-3 rounded-xl border">
            <div className="p-2 bg-blue-300 rounded-md text-lg">
              <FaRegClock />
            </div>
            <div>
              <p className="text-xs text-gray-600">Experience</p>
              <span className="font-semibold">{experience}</span>
            </div>
          </div>
          <div className="flex items-center gap-3 bg-blue-100 p-3 rounded-xl border">
            <div className="p-2 bg-blue-300 rounded-md text-lg">
              <FaHospital />
            </div>
            <div>
              <p className="text-xs text-gray-600">Hospital</p>
              <span className="font-semibold">{hospital}</span>
            </div>
          </div>
          <div className="flex items-center gap-3 bg-blue-100 p-3 rounded-xl border">
            <div className="p-2 bg-blue-300 rounded-md text-lg">
              <FiMapPin />
            </div>
            <div>
              <p className="text-xs text-gray-600">Location</p>
              <span className="font-semibold">{location}</span>
            </div>
          </div>
          <div className="flex items-center gap-3 bg-blue-100 p-3 rounded-xl border">
            <div className="p-2 bg-blue-300 rounded-md text-lg">
              <RiMoneyDollarCircleFill />{" "}
            </div>
            <div>
              <p className="text-xs text-gray-600">Consultation Fee</p>
              <span className="font-semibold">৳{fee}</span>
            </div>
          </div>
        </div>
        <div className="flex md:block flex-col w-fit gap-2">
          <p className="text-xs font-bold pb-2">Availability</p>
          {availability.map((av) => (
            <span
              className="bg-blue-100 text-blue-500 font-semibold px-4 py-0.5 rounded-full mr-2"
              key={av}
            >
              {av}
            </span>
          ))}
        </div>
        <Button className={"rounded-md mt-3"}>Book Appointment</Button>
      </div>
    </div>
  );
};

export default DetailsCardDoctor;

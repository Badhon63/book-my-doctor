"use client";

import Image from "next/image";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaHospital } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa6";
import { FiMapPin } from "react-icons/fi";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import AppointmentModal from "./AppointmentModal";
import { createAppointment } from "@/lib/actions";

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

  const ref = useRef(null);

  const isInView = useInView(ref, {
    once: true,
    margin: "-100px",
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      className="max-w-7xl mx-auto flex flex-col md:flex-row justify-center gap-7 items-center pt-16"
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <motion.figure variants={itemVariants}>
        <Image
          src={image}
          alt=""
          width={500}
          height={500}
          className="h-98 w-80 object-cover rounded-md"
          priority
        />
      </motion.figure>

      <motion.div
        className="space-y-3 px-5 sm:px-0"
        variants={containerVariants}
      >
        <motion.p
          variants={itemVariants}
          className="bg-purple-200 text-purple-800 font-bold w-fit px-4 py-1 rounded-full text-xs"
        >
          {specialty}
        </motion.p>

        <motion.p variants={itemVariants} className="text-4xl font-bold">
          {name}
        </motion.p>

        <motion.p variants={itemVariants} className="text-gray-500">
          {description}
        </motion.p>

        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 gap-2"
        >
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-3 bg-blue-100 p-3 rounded-xl border"
          >
            <div className="p-2 bg-blue-300 rounded-md text-lg">
              <FaRegClock />
            </div>

            <div>
              <p className="text-xs text-gray-600">Experience</p>

              <span className="font-semibold">{experience}</span>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex items-center gap-3 bg-blue-100 p-3 rounded-xl border"
          >
            <div className="p-2 bg-blue-300 rounded-md text-lg">
              <FaHospital />
            </div>

            <div>
              <p className="text-xs text-gray-600">Hospital</p>

              <span className="font-semibold">{hospital}</span>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex items-center gap-3 bg-blue-100 p-3 rounded-xl border"
          >
            <div className="p-2 bg-blue-300 rounded-md text-lg">
              <FiMapPin />
            </div>

            <div>
              <p className="text-xs text-gray-600">Location</p>

              <span className="font-semibold">{location}</span>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex items-center gap-3 bg-blue-100 p-3 rounded-xl border"
          >
            <div className="p-2 bg-blue-300 rounded-md text-lg">
              <RiMoneyDollarCircleFill />
            </div>

            <div>
              <p className="text-xs text-gray-600">Consultation Fee</p>

              <span className="font-semibold">৳{fee}</span>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex md:block flex-col w-fit gap-2"
        >
          <p className="text-xs font-bold pb-2">Availability</p>

          {availability.map((av) => (
            <span
              className="bg-blue-100 text-blue-500 font-semibold px-4 py-0.5 rounded-full mr-2"
              key={av}
            >
              {av}
            </span>
          ))}
        </motion.div>

        <motion.div variants={itemVariants}>
          <AppointmentModal
            docDetails={docDetails}
            createAppointment={createAppointment}
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default DetailsCardDoctor;

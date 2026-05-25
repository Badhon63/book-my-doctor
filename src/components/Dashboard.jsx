"use client";

import React, { useRef, useState } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import MyAppointmentsCard from "./MyAppointmentsCard";
import Profile from "./Profile";

const Dashboard = ({ appointments }) => {
  const [active, setActive] = useState("bookings");

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
        duration: 0.2,
        ease: "easeOut",
      },
    },
  };

  return (
    <div ref={ref} className="mx-4 sm:mx-0">
      <motion.p
        className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 0.2 }}
      >
        DashBoard
      </motion.p>

      <motion.div
        className="space-x-2 bg-gray-200 w-fit rounded-lg p-1 my-5"
        initial={{ opacity: 0, y: -20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 0.2, delay: 0.1 }}
      >
        <button
          onClick={() => {
            setActive("bookings");
          }}
          className={`cursor-pointer py-1 px-3 rounded-lg font-semibold ${
            active === "bookings" ? "bg-white" : ""
          }`}
        >
          My Bookings
        </button>

        <button
          onClick={() => {
            setActive("profile");
          }}
          className={`cursor-pointer py-1 px-3 rounded-lg font-semibold ${
            active === "profile" ? "bg-white" : ""
          }`}
        >
          My Profile
        </button>
      </motion.div>

      <AnimatePresence mode="wait">
        {active === "bookings" ? (
          <motion.div
            key="bookings"
            className="space-y-5"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0, y: 20 }}
          >
            {appointments.length === 0 ? (
              <motion.div
                variants={itemVariants}
                className="bg-gray-100 max-w-3xl rounded-xl"
              >
                <p className="font-semibold text-4xl text-center py-8 text-gray-400">
                  Empty
                </p>
              </motion.div>
            ) : (
              appointments.map((app) => (
                <motion.div key={app._id} variants={itemVariants}>
                  <MyAppointmentsCard app={app} />
                </motion.div>
              ))
            )}
          </motion.div>
        ) : (
          <motion.div
            key="profile"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
          >
            <Profile />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Dashboard;

"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import CardAllDoctors from "../CardAllDoctors";

const TopDoctors = ({ topDoctors }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <div ref={ref} className="max-w-7xl mx-auto pt-16">
      <motion.p
        className="text-center text-4xl md:text-5xl font-bold text-gray-900 mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 0.6 }}
      >
        Top Rated Doctors
      </motion.p>

      <motion.p
        className="text-center text-lg text-gray-600 mb-10"
        initial={{ opacity: 0, y: -20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        Highly reviewed specialists ready to see you.
      </motion.p>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {topDoctors.map((doctor) => (
          <motion.div key={doctor.id} variants={itemVariants}>
            <CardAllDoctors doctor={doctor} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default TopDoctors;

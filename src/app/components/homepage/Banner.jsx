"use client";

import React from "react";
import { Button } from "@heroui/react";
import {
  FiArrowRight,
  FiStar,
  FiUsers,
  FiCalendar,
  FiSmile,
} from "react-icons/fi";
import Link from "next/link";

const Banner = () => {
  const stats = [
    {
      value: "500+",
      label: "Expert Doctors",
      icon: FiUsers,
      color: "text-blue-600",
    },
    {
      value: "5★",
      label: "Avg. Rating",
      icon: FiStar,
      color: "text-yellow-500",
    },
    {
      value: "10K+",
      label: "Appointments",
      icon: FiCalendar,
      color: "text-green-600",
    },
    {
      value: "99%",
      label: "Patient Satisfaction",
      icon: FiSmile,
      color: "text-red-600",
    },
  ];

  return (
    <section className="relative  bg-linear-to-br from-blue-700 via-blue-500 to-indigo-800 overflow-hidden flex items-center">
      <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-10 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-block">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-white bg-opacity-20 backdrop-blur-md text-white rounded-full text-sm font-semibold border border-white border-opacity-30 hover:bg-opacity-30 transition-all duration-300">
                <span className="inline-flex items-center justify-center w-2 h-2 bg-green-400 rounded-full animate-pulse">
                  {" "}
                </span>
                <p className="text-black">Your Health, Our Priority</p>
              </span>
            </div>
            <div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-4 animate-fade-in">
                Book Your Doctor
                <span className="block text-transparent bg-clip-text bg-linear-to-r from-yellow-300 via-pink-300 to-white">
                  Appointment Today
                </span>
              </h1>
            </div>
            <p className="text-lg md:text-xl text-blue-100 leading-relaxed max-w-xl">
              Connect with 500+ verified doctors across multiple specialties.
              Get instant appointment confirmations, manage your bookings
              easily, and receive the best healthcare experience.
            </p>
            <div className="flex flex-col items-center sm:items-start sm:flex-row gap-4 pt-4">
              <Link href={"/all-appointments"}>
                <Button
                  size="lg"
                  className="bg-white text-blue-600 font-bold hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl"
                  endContent={<FiArrowRight className="w-5 h-5" />}
                >
                  Browse Doctors
                </Button>
              </Link>
              <Link href={"/"}>
                <Button
                  size="lg"
                  variant="bordered"
                  className="text-white border-2 border-white font-bold  transition-all duration-300"
                >
                  My Bookings
                </Button>
              </Link>
            </div>
            <div className="flex items-center gap-2 text-blue-100 text-sm pt-4">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-linear-to-br from-pink-400 to-purple-400 border-2 border-white"></div>
                <div className="w-8 h-8 rounded-full bg-linear-to-br from-blue-400 to-cyan-400 border-2 border-white"></div>
                <div className="w-8 h-8 rounded-full bg-linear-to-br from-green-400 to-emerald-400 border-2 border-white"></div>
              </div>
              <span>Trusted by 10K+ Happy Patients</span>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 text-center gap-4 lg:gap-6 lg:mt-0">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div
                  key={index}
                  className={` p-6 md:p-8 rounded-2xl backdrop-blur-md border border-white border-opacity-30 bg-blue-600 bg-opacity-10 hover:bg-opacity-20 transition-all duration-300 transform hover:scale-105 hover:shadow-xl ${
                    index === 1 ? "sm:mt-8 lg:mt-0" : ""
                  }`}
                  style={{
                    animationDelay: `${index * 0.1}s`,
                  }}
                >
                  <div
                    className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-white bg-opacity-20 mb-4`}
                  >
                    <IconComponent className={`${stat.color} w-6 h-6`} />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                    {stat.value}
                  </div>
                  <p className="text-blue-100 text-sm font-medium">
                    {stat.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;

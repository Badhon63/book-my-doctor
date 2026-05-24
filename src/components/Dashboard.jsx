"use client";

import React, { useState } from "react";
import MyAppointmentsCard from "./MyAppointmentsCard";
import Profile from "./Profile";

const Dashboard = ({ appointments }) => {
  const [active, setActive] = useState("bookings");
  return (
    <div>
      <p className=" text-4xl md:text-5xl font-bold text-gray-900 mb-4">
        DashBoard
      </p>
      <div className="space-x-2 bg-gray-200 w-fit rounded-lg p-1 my-5">
        <button
          onClick={() => {
            setActive("bookings");
          }}
          className={`cursor-pointer py-1 px-3 rounded-lg font-semibold ${active === "bookings" ? "bg-white" : ""}`}
        >
          My Bookings
        </button>

        <button
          onClick={() => {
            setActive("profile");
          }}
          className={` cursor-pointer py-1 px-3 rounded-lg font-semibold ${active === "profile" ? "bg-white" : ""}`}
        >
          My Profile
        </button>
      </div>

      {active === "bookings" ? (
        <div className="space-y-5">
          {appointments.map((app) => (
            <MyAppointmentsCard app={app} key={app._id} />
          ))}
        </div>
      ) : (
        <Profile />
      )}
    </div>
  );
};

export default Dashboard;

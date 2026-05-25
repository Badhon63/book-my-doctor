import React from "react";
import { FaRegClock } from "react-icons/fa";
import { GoPerson } from "react-icons/go";
import { MdDateRange, MdDeleteForever } from "react-icons/md";
import UpdateBookingModal from "./UpdateBookingModal";
import DeleteModal from "./DeleteModal";

const MyAppointmentsCard = ({ app }) => {
  const { date, doctorName, time, name, reason } = app;
  return (
    <div className="bg-gray-100 border p-6 rounded-xl space-y-1 max-w-3xl">
      <p className="font-bold text-blue-900 text-2xl">{doctorName}</p>
      <p className="flex items-center gap-1 opacity-70 mt-2">
        <GoPerson />
        Patient: {name}
      </p>
      <p className="flex items-center gap-1 opacity-70">
        <MdDateRange />
        Date: {date}
      </p>
      <p className="flex items-center gap-1 opacity-70">
        <FaRegClock />
        Time: {time}
      </p>
      <p className="opacity-70 mb-3">Reason: {reason}</p>
      <div className="flex gap-2">
        <UpdateBookingModal app={app} />
        <DeleteModal app={app} />
      </div>
    </div>
  );
};

export default MyAppointmentsCard;

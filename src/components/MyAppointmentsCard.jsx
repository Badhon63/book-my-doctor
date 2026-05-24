import { Button } from "@heroui/react";
import React from "react";
import { FaEdit, FaRegClock } from "react-icons/fa";
import { GoPerson } from "react-icons/go";
import { MdDateRange, MdDeleteForever } from "react-icons/md";

const MyAppointmentsCard = ({ app }) => {
  const { date, doctorName, time, name, reason, email } = app;
  return (
    <div className="bg-gray-100 border p-6 rounded-xl space-y-1 max-w-3xl">
      <p className="text-xs opacity-50">{email}</p>
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
        <Button className={"rounded-md"}>
          <FaEdit />
          Update
        </Button>
        <Button className={"rounded-md"} variant="danger">
          <MdDeleteForever />
          Delete
        </Button>
      </div>
    </div>
  );
};

export default MyAppointmentsCard;

"use server";

import { revalidatePath } from "next/cache";

export const createAppointment = async (appointmentData) => {
  const res = fetch(`${process.env.SERVER_URL}/appointments`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(appointmentData),
  });
  const data = (await res).json();
  return data;
};

export const updateBooking = async (id, newData) => {
  const res = await fetch(`${process.env.SERVER_URL}/appointments/${id}`, {
    method: "PATCH",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(newData),
  });
  const data = await res.json();
  revalidatePath("/dashboard");
  return data;
};

export const deleteBooking = async (id) => {
  const res = await fetch(`${process.env.SERVER_URL}/appointments/${id}`, {
    method: "DELETE",
  });
  const data = await res.json();
  revalidatePath("/dashboard");
  return data;
};

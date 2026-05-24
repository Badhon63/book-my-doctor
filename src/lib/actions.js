export const createAppointment = async (appointmentData) => {
  "use server";
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

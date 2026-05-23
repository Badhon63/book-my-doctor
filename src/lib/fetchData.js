export const getAllDoctors = async () => {
  const res = await fetch(`${process.env.SERVER_URL}/all-doctors`);
  const data = await res.json();
  return data;
};

export const getDoctorDetails = async (id) => {
  const res = await fetch(`${process.env.SERVER_URL}/doctors/${id}`);
  const data = await res.json();
  return data;
};

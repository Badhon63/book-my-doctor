export const getAllDoctors = async () => {
  const res = await fetch(`${process.env.SERVER_URL}/all-doctors`);
  const data = await res.json();
  return data;
};

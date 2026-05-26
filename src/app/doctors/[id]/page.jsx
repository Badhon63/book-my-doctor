import DetailsCardDoctor from "@/components/DetailsCardDoctor";
import { getDoctorDetails } from "@/lib/fetchData";
import React from "react";

export const metadata = {
  title: "DoctorNow | Book appointment",
  description: "",
};

const DoctorDetailsPage = async ({ params }) => {
  const { id } = await params;
  const docDetails = await getDoctorDetails(id);
  return (
    <div>
      <DetailsCardDoctor docDetails={docDetails} />
    </div>
  );
};

export default DoctorDetailsPage;

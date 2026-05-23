import { getDoctorDetails } from "@/app/lib/fetchData";
import DetailsCardDoctor from "@/components/DetailsCardDoctor";
import React from "react";

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

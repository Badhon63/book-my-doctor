import { Spinner } from "@heroui/react";
import React from "react";

const LoadingPage = () => {
  return (
    <div className="flex items-center justify-center py-26">
      <Spinner color="current" />
    </div>
  );
};

export default LoadingPage;

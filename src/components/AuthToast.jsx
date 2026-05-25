"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import toast from "react-hot-toast";

const AuthToast = () => {
  const searchParams = useSearchParams();

  useEffect(() => {
    if (searchParams.get("signup") === "success") {
      toast.success("Registration successful");
    }

    if (searchParams.get("login") === "success") {
      toast.success("Login successful");
    }
  }, [searchParams]);

  return null;
};

export default AuthToast;

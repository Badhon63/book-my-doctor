"use client";

import React from "react";
import {
  Button,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { authClient } from "@/lib/auth-client";
import toast from "react-hot-toast";

const Login = () => {
  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const user = Object.fromEntries(formData.entries());
    const { data, error } = await authClient.signIn.email({
      email: user.email,
      password: user.password,
      rememberMe: true,
      callbackURL: "/",
    });
    if (data) {
      toast.success("Login successful.");
    }
    if (error) {
      toast.error(error.message);
    }
  };

  const googleLogin = async () => {
    await authClient.signIn.social({
      provider: "google",
      callbackURL: "/?login=success",
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-0 md:flex justify-center mt-12">
      <div className="flex flex-col max-w-sm lg:min-w-sm bg-gray-100 p-8 rounded-lg">
        <div className="flex flex-col text-center">
          <p className="font-bold text-4xl">Login</p>
          <p className="text-gray-600 pt-2 pb-5">Welcome back to DoctorNow</p>
        </div>
        <Form className="flex flex-col gap-4 rounded-lg" onSubmit={onSubmit}>
          <TextField
            isRequired
            name="email"
            type="email"
            validate={(value) => {
              if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                return "Please enter a valid email address";
              }
              return null;
            }}
          >
            <Label>Email</Label>
            <Input placeholder=" Emter your email" />
            <FieldError />
          </TextField>

          <TextField
            isRequired
            minLength={8}
            name="password"
            type="password"
            validate={(value) => {
              if (value.length < 8) {
                return "Password must be at least 8 characters";
              }
              if (!/[A-Z]/.test(value)) {
                return "Password must contain at least one uppercase letter";
              }
              if (!/[0-9]/.test(value)) {
                return "Password must contain at least one number";
              }
              return null;
            }}
          >
            <Label>Password</Label>
            <Input placeholder="Enter your password" />

            <FieldError />
          </TextField>
          <Button type="submit" className={"w-full"}>
            Login
          </Button>
        </Form>
        <div className="flex justify-center items-center py-5 gap-4">
          <div className="border h-px w-full"></div>
          <div>OR</div> <div className="border h-px w-full"></div>
        </div>
        <div
          onClick={googleLogin}
          className="flex items-center select-none cursor-pointer gap-2 justify-center bg-white p-2 font-semibold rounded-lg"
        >
          <span className="text-xl">
            {" "}
            <FcGoogle />
          </span>
          <p>Login with Google</p>
        </div>
        <p className="text-sm text-center mt-5">
          Don&apos;t have an account?{" "}
          <span className="underline">
            <Link href={"/signup"}>Register</Link>
          </span>
        </p>
      </div>
    </div>
  );
};
export default Login;

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
import { FcGoogle } from "react-icons/fc";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";

const Signup = () => {
  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const user = Object.fromEntries(formData.entries());
    console.log(user);
    const { data, error } = await authClient.signUp.email({
      name: user.name,
      email: user.email,
      password: user.password,
      image: user.imagUrl,
    });
    console.log("data:", data, "error:", error);
  };

  return (
    <div className="max-w-7xl mx-auto flex justify-center mt-12">
      <div className="flex flex-col max-w-sm lg:min-w-sm bg-gray-100 p-8 rounded-lg">
        <div className="flex flex-col text-center">
          <p className="font-bold text-4xl">Register</p>
          <p className="text-gray-600 pt-2 pb-5">
            Create your DoctorNow account
          </p>
        </div>
        <Form className="flex  flex-col gap-4 rounded-lg" onSubmit={onSubmit}>
          <TextField
            isRequired
            name="name"
            type="text"
            validate={(value) => {
              if (!value) {
                return "Please enter a valid name";
              }
              return null;
            }}
          >
            <Label>Name</Label>
            <Input placeholder="Type your name" />
            <FieldError />
          </TextField>
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

          <TextField name="imagUrl" type="text">
            <Label>
              Image URL <span className="opacity-50">(optional)</span>
            </Label>
            <Input placeholder="Enter your image URL" />
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
            Register
          </Button>
        </Form>
        <div className="flex justify-center items-center py-5 gap-4">
          <div className="border h-px w-full"></div>
          <div>OR</div> <div className="border h-px w-full"></div>
        </div>
        <div className="flex items-center select-none cursor-pointer gap-2 justify-center bg-white p-2 font-semibold rounded-lg">
          <span className="text-xl">
            {" "}
            <FcGoogle />
          </span>
          <p>Register with Google</p>
        </div>
        <p className="text-sm text-center mt-5">
          Already have an account?{" "}
          <span className="underline">
            <Link href={"/login"}>Login</Link>
          </span>
        </p>
      </div>
    </div>
  );
};
export default Signup;

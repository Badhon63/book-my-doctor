"use client";

import { Button } from "@heroui/react";
import Link from "next/link";
import React, { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="shadow bg-gray-100">
      <div className="max-w-7xl mx-auto flex flex-col p-2 lg:p-1">
        <div className="flex justify-between w-full items-center">
          <div className="navbar-start flex gap-2">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="cursor-pointer lg:hidden"
            >
              <CiMenuBurger />
            </button>
            <p className="font-bold text-2xl">🩺 DoctorNow</p>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="flex gap- p-2 text-sm">
              <Link href={"/"}>
                <li>
                  <Button variant="ghost" className={"rounded-none"}>
                    Home
                  </Button>
                </li>
              </Link>
              <Link href={"/all-appointments"}>
                <li>
                  <Button variant="ghost" className={"rounded-none"}>
                    All Appointments
                  </Button>
                </li>
              </Link>
              <Link href={"/dashboard"}>
                <li>
                  <Button variant="ghost" className={"rounded-none"}>
                    Dashboard
                  </Button>
                </li>
              </Link>
            </ul>
          </div>
          <div className="flex gap-2">
            <Button
              variant="tertiary"
              className={"rounded-none hidden sm:block"}
            >
              Login
            </Button>
            <Button className={"rounded-none "}>Register</Button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="w-full lg:hidden">
            <ul className="pt-2">
              <Link href={"/"}>
                <li>
                  <Button variant="ghost" className={"rounded-none"}>
                    Home
                  </Button>
                </li>
              </Link>
              <Link href={"/all-appointments"}>
                <li>
                  <Button variant="ghost" className={"rounded-none"}>
                    All Appointments
                  </Button>
                </li>
              </Link>
              <Link href={"/dashboard"}>
                <li>
                  <Button variant="ghost" className={"rounded-none"}>
                    Dashboard
                  </Button>
                </li>
              </Link>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;

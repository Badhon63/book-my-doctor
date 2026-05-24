"use client";

import { authClient } from "@/lib/auth-client";
import { Avatar, Button, Spinner } from "@heroui/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { FaSignOutAlt } from "react-icons/fa";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();
  const { data: session, isPending } = authClient.useSession();

  const user = session?.user;

  const signOut = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push("/");
        },
      },
    });
  };

  return (
    <div className="shadow bg-blue-50">
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
          {isPending ? (
            <Spinner className="" />
          ) : user ? (
            <div className="flex gap-2">
              <Link href={"/profile"}>
                <Avatar>
                  <Avatar.Image
                    className="hover:bg-gray-300 active:bg-gray-200 duration-75"
                    alt="John Doe"
                    src={user?.image}
                  />
                  <Avatar.Fallback className="hover:bg-gray-300 active:bg-gray-200 duration-75">
                    {user.name.charAt(0)}
                  </Avatar.Fallback>
                </Avatar>
              </Link>
              <button
                onClick={signOut}
                className="flex items-center gap-2 border py-1 px-3 rounded-lg hover:bg-gray-200 cursor-pointer"
              >
                Logout
                <FaSignOutAlt />
              </button>
            </div>
          ) : (
            <div className="flex gap-2">
              <Link href={"/login"}>
                <Button
                  variant="tertiary"
                  className={"rounded-none hidden sm:block"}
                >
                  Login
                </Button>
              </Link>
              <Link href={"/signup"}>
                {" "}
                <Button className={"rounded-none "}>Register</Button>
              </Link>{" "}
            </div>
          )}
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

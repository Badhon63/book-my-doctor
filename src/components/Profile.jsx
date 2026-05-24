import { authClient } from "@/lib/auth-client";
import { Avatar, Button } from "@heroui/react";
import Image from "next/image";
import React from "react";
import { FaEdit } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import UpdateProfileModal from "./UpdateProfileModal";

const Profile = () => {
  const { data: session } = authClient.useSession();
  const user = session?.user;

  return (
    <div className="bg-gray-100 border p-6 rounded-xl space-y-1 max-w-sm">
      <div className="flex items-center gap-3 mb-4">
        <Avatar>
          <Avatar.Image
            className="hover:bg-gray-300 active:bg-gray-200 duration-75"
            alt={user?.name}
            src={user?.image}
          />
          <Avatar.Fallback className="hover:bg-gray-300 active:bg-gray-200 duration-75">
            {user?.name?.[0] || "U"}
          </Avatar.Fallback>
        </Avatar>
        <div>
          <p className="font-bold text-2xl">{user?.name}</p>
          <div className="flex items-center gap-1 opacity-60 ">
            <span>
              <IoMdMail />
            </span>
            <p>{user?.email}</p>
          </div>
        </div>
      </div>
      <UpdateProfileModal />
    </div>
  );
};

export default Profile;

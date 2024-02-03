import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { MdEdit } from "react-icons/md";
import { toast } from "react-toastify";
import { useAuth } from "../auth/AuthProvider";

const Profile = () => {
  const { logout } = useAuth();
  const userdata = JSON.parse(localStorage.getItem("userprofiledata"));
  const [username, setusername] = useState(userdata.username);

  const onchangeHandler = (e) => {
    setusername(e.target.value);
  };

  const handleLogout = () => {
    logout();
  };

  const updateUsername = (e) => {
    if (username.trim() === "") {
      toast.error("Username can't be empty.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      userdata.username = username;
      localStorage.setItem("userprofiledata", JSON.stringify(userdata));
      toast.success("Username updated successfully.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  return (
    <>
      <div className="container h-screen py-[150px] relative">
        <div className="flex justify-center items-center flex-col gap-3 h-full">
          <div className="relative group">
            <img
              src={userdata.userprofile}
              alt=""
              className="w-40 rounded-full cursor-pointer group-hover:opacity-75"
            />
            <div className="absolute top-0 left-0 w-full h-full rounded-full bg-[#58585880] items-center justify-center hidden group-hover:flex cursor-pointer transition ease-in-out">
              <MdEdit className="text-[50px] text-white" />
            </div>
          </div>
          <div className="flex flex-col items-center">
            <p className="font-bold text-3xl">{userdata.username}</p>
            <p className="text-[14px]">{userdata.useremail}</p>
          </div>
          <div>
            <p className="text-[14px] text-center mt-10">Edit Profile</p>
            <input
              type="text"
              placeholder="Edit Name"
              className="w-full border border-black p-2 mt-3"
              id="username"
              value={username}
              onChange={onchangeHandler}
            />
            <div className="flex justify-between gap-3 mt-3 ">
              <button
                className="w-full text-center px-2 py-3 bg-blue-500 text-white cursor-pointer rounded-md"
                onClick={updateUsername}
              >
                Save
              </button>
              <button
                className="w-full text-center px-2 py-3 bg-red-500 text-white cursor-pointer rounded-md"
                onClick={handleLogout}
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
      <Navbar />
    </>
  );
};

export default Profile;

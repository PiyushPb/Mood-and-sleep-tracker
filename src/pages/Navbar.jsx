import React from "react";

import { MdHomeFilled } from "react-icons/md";
import { RiChatSmile2Fill } from "react-icons/ri";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="fixed bottom-0 left-1/2 translate-x-[-50%] flex justify-between flex-row max-w-[400px] w-full items-center lg:px-8 p-5 px-10 bg-white">
      <Link to="/">
        <MdHomeFilled className="text-[20px]" />
      </Link>
      <Link to="/chat">
        <RiChatSmile2Fill className="text-[20px]" />
      </Link>
      <FaUser className="text-[20px]" />
    </div>
  );
};

export default Navbar;

import React from "react";

const HomeNav = () => {
  const userdata = JSON.parse(localStorage.getItem("userprofiledata"));
  return (
    <div className="flex justify-between items-center">
      <div>
        <h1 className="font-bold text-[30px]">Hi, {userdata.username}</h1>
        <p className="text-[14px]">This is your daily summary</p>
      </div>
      <img src={userdata.userprofile} className="w-[60px] rounded-full" />
    </div>
  );
};

export default HomeNav;

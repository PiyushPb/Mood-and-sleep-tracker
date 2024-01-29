import React from "react";

const HomeNav = () => {
  return (
    <div className="flex justify-between items-center">
      <div>
        <h1 className="font-bold text-[30px]">Hi, Piyush</h1>
        {/* TODO : add user name */}
        <p className="text-[14px]">This is your daily summary</p>
      </div>
      <img
        src="https://xsgames.co/randomusers/assets/avatars/male/17.jpg"
        className="w-[60px] rounded-full"
      />
    </div>
  );
};

export default HomeNav;

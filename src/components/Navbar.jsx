import React from "react";
import { FaGripfire, FaPlay, FaSignOutAlt } from "react-icons/fa";
import { IoLibrary } from "react-icons/io5";
import { MdFavorite, MdSpaceDashboard } from "react-icons/md";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="h-screen w-24 bg-gray-800 fixed flex flex-col items-center justify-center">
        <div className="p-4 w-20 items-center rounded-lg flex  flex-col justify-between navbar bg-gray-600">
          <div className="">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCu1yP3YvL0vKj09j9-B57kTbA57YluKxAQg&s"
              className="rounded-full "
              height={70}
              width={70}
              alt="☹️"
            />
          </div>
          <div className="flex flex-col items-center gap-4 text-gray-300">
            <NavLink to='/feed'>
              <div className="hover:bg-gray-200 rounded-full text transform duration-200 transition-all ease-in-out p-4">
                <MdSpaceDashboard className="text-2xl  duration-200 transition-all ease-in-out cursor-pointer  " />
              </div>
            </NavLink>
            <NavLink to='/trending'>
              <div className="hover:bg-gray-200 rounded-full text transform duration-200 transition-all ease-in-out p-4">
                <FaGripfire className="text-2xl  duration-200 transition-all ease-in-out cursor-pointer  " />
              </div>
            </NavLink>
            <NavLink to='/player'>
              <div className="hover:bg-gray-200 rounded-full text transform duration-200 transition-all ease-in-out p-4">
                <FaPlay className="text-2xl  duration-200 transition-all ease-in-out cursor-pointer  " />
              </div>
            </NavLink>
            <NavLink to='/favourites'>
              <div className="hover:bg-gray-200 rounded-full text transform duration-200 transition-all ease-in-out p-4">
                <MdFavorite className="text-2xl  duration-200 transition-all ease-in-out cursor-pointer  " />
              </div>
            </NavLink>
            <NavLink to='/library'>
              <div className="hover:bg-gray-200 rounded-full text transform duration-200 transition-all ease-in-out p-4">
                <IoLibrary className="text-2xl  duration-200 transition-all ease-in-out cursor-pointer  " />
              </div>
            </NavLink>
          </div>
          <div className="hover:bg-gray-200 rounded-full text transform duration-200 transition-all ease-in-out p-4">
            <FaSignOutAlt className="text-2xl  duration-200 transition-all ease-in-out cursor-pointer  text-gray-300" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;

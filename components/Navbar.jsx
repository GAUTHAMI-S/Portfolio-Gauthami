"use client";
import { NavItems } from "@/assests/Data";
import { useEffect, useRef, useState } from "react";
import { FaEarlybirds, FaLocationArrow } from "react-icons/fa";
import { BsMoonStarsFill } from "react-icons/bs";
import { MdOutlineSegment } from "react-icons/md";
import { IoClose } from "react-icons/io5";
const Navbar = () => {
  const sideMenuRef = useRef();
  const [isScroll, setIsScroll] = useState(false);
  const openMenu = () => {
    sideMenuRef.current.style.transform = "translate(-16rem)";
  };
  const closeMenu = () => {
    sideMenuRef.current.style.transform = "translate(16rem)";
  };
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (scrollY > 50) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    });
  }, []);
  return (
    <>
      <div className="bg-green-200  fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]">
        {" "}
      </div>
      <nav
        className={`${
          isScroll ? "bg-white bg-opacity-50 backdrop-blur-lg shadow-sm" : ""
        } w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50`}
      >
        <a href="#top" className="w-28 cursor-pointer ml-14">
          <FaEarlybirds className="w-8 h-8 " />
        </a>
        <ul
          className={`${
            isScroll ? "" : "bg-white shadow-sm bg-opacity-50"
          } hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 `}
        >
          {NavItems.map((item) => {
            return (
              <li key={item.key} className="font-Ovo">
                <a href={item.position}>{item.title} </a>
              </li>
            );
          })}
        </ul>
        <div className="flex items-center gap-4">
          <button>
            <BsMoonStarsFill className="w-6 h-6" />
          </button>
          <a
            href="#contact"
            className="hidden font-Ovo lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4"
          >
            Contact
            <FaLocationArrow className="w-6 h-6" />
          </a>
          <button className="block md:hidden ml-5" onClick={openMenu}>
            <MdOutlineSegment className="w-7 h-7" />
          </button>
        </div>
        {/* mobile menu */}
        <ul
          ref={sideMenuRef}
          className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500"
        >
          <div className="absolute right-6 top-6" onClick={closeMenu}>
            <IoClose className="w-7 h-7 cursor-pointer" />{" "}
          </div>
          {NavItems.map((item) => {
            return (
              <li key={item.key} onClick={closeMenu} className="font-Ovo">
                <a href={item.position}>{item.title} </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;

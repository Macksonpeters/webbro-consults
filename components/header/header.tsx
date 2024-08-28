"use client";

import "animate.css";
import { TbAlignJustified } from "react-icons/tb";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";
import Link from "next/link";
import { Nunito_Sans } from "next/font/google";

const nunitosans = Nunito_Sans({
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  style: "normal",
});

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <header className="w-full bg-gray-950 z-40 top-0 left-0 right-0 lg:px-5  mx-auto  lg:h-auto">
      <div className="text-white my-5 lg:my-7 lg:flex lg:justify-between">
        <div className="flex justify-between vsmall:w-full">
          <div>
            <h1 className={`text-3xl font-bold fontShadow tracking-widest`}>
              Webbro-Consults
            </h1>
          </div>
          <div className="lg:hidden">
            {!navOpen && (
              <TbAlignJustified
                className="text-2xl font-bold cursor-pointer animate__animated animate__zoomIn animate__faster"
                onClick={() => {
                  setNavOpen(true);
                }}
              />
            )}
            {navOpen && (
              <IoMdClose
                className={`text-2xl font-bold cursor-pointer ${
                  navOpen
                    ? "animate__animated animate__zoomIn animate__faster"
                    : ""
                }  `}
                onClick={() => {
                  setNavOpen(false);
                }}
              />
            )}
          </div>
        </div>
        <div className="">
          <ul
            className={`${nunitosans.className} ${
              !navOpen
                ? "hidden"
                : "py-5 bg-gray-950 absolute right-0  w-full px-5 z-50 border-b-2 rounded border-red-600 animate__animated animate__fadeInDown lg:animated__fadeInDownn text-gray-300 tracking-wider text-end h-auto sm:h-auto vsmall:h-[35vh] lg:tracking-normal lg:right-[auto] lg:w-[auto] lg:text-white lg:text-start lg:animate__animated"
            } lg:relative lg:py-0 lg:top-1 lg:px-0 lg:border-none lg:w-full lg:h-auto lg:bg-transparent lg:flex lg:flex-row justify-between lg:me-20 gap-7 text-[14px] `}
          >
            <li
              onClick={() => {
                setNavOpen(!navOpen);
              }}
              className="mt-5 text-base lg:mt-0 lg:border-none "
            >
              <a href="/">Home</a>
            </li>
            <li
              onClick={() => {
                setNavOpen(!navOpen);
              }}
              className="mt-5 text-base lg:mt-0 "
            >
              <a href="/#Projects">Projects</a>
            </li>
            <li
              onClick={() => {
                setNavOpen(!navOpen);
              }}
              className="mt-5 text-base lg:mt-0 "
            >
              <a href="/#About">About</a>{" "}
            </li>
            <li
              onClick={() => {
                setNavOpen(!navOpen);
              }}
              className="mt-5 text-base lg:mt-0 "
            >
              <a href="/#contact">Contact</a>{" "}
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;

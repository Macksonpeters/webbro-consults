"use client";

import "animate.css";
import { TbAlignJustified } from "react-icons/tb";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";
import Link from "next/link";
import { Nunito_Sans } from "next/font/google";
import Image from "next/image";
import Logo from "../../public/images/webbroconsultslogosmall.png";

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
        <div className="flex justify-between mt-8 lg:mt-0 vsmall:w-full">
          <div className="flex">
            <Image
              src={Logo}
              alt="webbro-logo"
              className="object-contain relative top-[-45px] scale-[65%] w-[140px] ms-[-60px] lg:ms-[-70px]"
            />
            <h1
              className={`text-3xl font-bold fontShadow pt-1 tracking-widest relative left-[-58px]`}
            >
              ebbro-Consults
            </h1>
          </div>
          <div className="lg:hidden relative top-[7px]">
            {!navOpen && (
              <TbAlignJustified
                className="text-[28px] font-bold cursor-pointer animate__animated animate__zoomIn animate__faster"
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
        <div className=" lg:relative lg:top-[5px]">
          <ul
            className={`${nunitosans.className} ${
              !navOpen
                ? "hidden"
                : "py-5 bg-gray-950 absolute right-0  top-[100px] w-full px-5 z-50 border-b-2 rounded border-red-600 animate__animated animate__fadeInDown lg:animated__fadeInDownn text-gray-300 tracking-wider text-end h-auto sm:h-auto vsmall:h-[35vh] lg:tracking-normal lg:right-[auto] lg:w-[auto] lg:text-white lg:text-start lg:animate__animated"
            } lg:relative lg:py-0 lg:top-1 lg:px-0 lg:border-none lg:w-full lg:h-auto lg:bg-transparent lg:flex lg:flex-row justify-between lg:me-20 gap-7 text-[14px] `}
          >
            <li
              onClick={() => {
                setNavOpen(!navOpen);
              }}
              className="mt-5 text-base lg:mt-0 lg:border-none "
            >
              <Link href="/">Home</Link>
            </li>
            <li
              onClick={() => {
                setNavOpen(!navOpen);
              }}
              className="mt-5 text-base lg:mt-0 "
            >
              <Link href="/#Projects">Projects</Link>
            </li>
            <li
              onClick={() => {
                setNavOpen(!navOpen);
              }}
              className="mt-5 text-base lg:mt-0 "
            >
              <Link href="/#About">About</Link>{" "}
            </li>
            <li
              onClick={() => {
                setNavOpen(!navOpen);
              }}
              className="mt-5 text-base lg:mt-0 "
            >
              <Link href="/#contact">Contact</Link>{" "}
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;

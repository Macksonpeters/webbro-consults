"use client";

import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { SiLinkedin, SiGmail } from "react-icons/si";
import { BsTelephoneOutboundFill, BsGithub, BsWhatsapp } from "react-icons/bs";

const Hero = () => {
  const [text] = useTypewriter({
    words: ["Front-End Developer", "Web Developer", "S.E.O Specialist"],
    loop: false,
    typeSpeed: 160,
  });

  return (
    <div className=" lg:mt-10 lg:px-5 vsmall:w-full">
      <div className="flex justify-between">
        <div className="lg:w-3/4">
          <div className=" w-[100%] relative xl:relative xl:w-[90%] mt-20 lg:mt-32">
            <p className="text-lg text-gray-300 mb-3 vsmall:text-base">
              Welcome to our world
            </p>
            <h2 className="text-xl lg:text-3xl text-gray-300 vsmall:text-lg  xl:tracking-wide">
              Hi, This is Webbro
            </h2>

            <h2
              className="my-2 text-3xl text-gray-300  vsmall:text-xl vsmall:tracking-wider vsmall:w-full
             xl:w-3/4  xl:text-5xl"
            >
              {" "}
              I'm a{" "}
              <span className="fontShadow text-red-700 font-bold msmall:tracking-normal msmall:w-full">
                {text}
              </span>
              <span className="text-red-700">
                <Cursor />
              </span>
            </h2>

            <p className="text-lg text-gray-400 mt-5 vsmall:text-sm">
              Reactjs, Nextjs, Tailwind, Bootstrap, Shadcn, Typescript, Redux
              Toolkit, Nodejs, Html, Css, C#, .Net Core/Framework
            </p>

            <div className=" mt-5 w-[60%] text-sm pt-3 rounded xl:w-[20%] xl:mt-20 xl:text-lg">
              <p className="text-gray-300 text-lg vsmall:text-base">Find me</p>
              <div className="mt-3 flex gap-4">
                {/* <a
                  href="https://www.linkedin.com/in/peterony"
                  className="text-white"
                  target="_blank"
                >
                  <SiLinkedin className="inline text-lg " />
                </a> */}

                <a
                  href="mailto:macksonpeterfe@gmail.com"
                  className="text-red-700"
                  target="_blank"
                >
                  <SiGmail className="inline text-lg " />
                </a>
                <a
                  href="tel:+2347052283520"
                  className=" text-white"
                  target="_blank"
                >
                  <BsTelephoneOutboundFill className="inline text-lg " />
                </a>
                <a
                  href="https://github.com/Macksonpeters"
                  className=" text-white"
                  target="_blank"
                >
                  <BsGithub className="inline text-lg " />
                </a>
                <a
                  href="https://wa.me/+2347052283520"
                  className=" text-green-400"
                  target="_blank"
                >
                  <BsWhatsapp className="inline text-lg " />
                </a>
              </div>
              {/* <p className="text-gray-300 text-lg mt-5">Projects</p> */}
            </div>
          </div>{" "}
        </div>
      </div>
    </div>
  );
};

export default Hero;

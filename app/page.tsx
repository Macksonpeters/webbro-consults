"use client";

import "animate.css";
import { TbAlignJustified } from "react-icons/tb";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";

import Hero from "@/components/hero/hero";
import Link from "next/link";
import Projects from "@/components/Projects/Projects";
import ProjectsContainer from "@/components/Projects/ProjectsContainer";
import AboutComponent from "@/components/About/AboutComponent";
import Contact from "@/components/Contact/Contact";

export default function Home() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <>
      {/* Hero section */}
      <div className=" relative top-36 lg:top-20">
        <div id="home">
          <Hero />
        </div>
        <div id="Projects" className="relative top-20 mt-5">
          <ProjectsContainer />
        </div>
        <div id="About" className="relative top-20">
          <AboutComponent />
        </div>
        <div id="Contact" className="relative top-20">
          <Contact />
        </div>
      </div>
    </>
  );
}

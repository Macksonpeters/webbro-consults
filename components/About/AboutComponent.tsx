"use client";

import { FaReact } from "react-icons/fa";
import {
  SiHtml5,
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { BsBootstrapFill, BsArrowRight } from "react-icons/bs";
import { TbBrandRedux } from "react-icons/tb";
import { IoLogoCss3, IoLogoJavascript } from "react-icons/io";

const AboutComponent = () => {
  return (
    <div className="text-gray-300 py-10 lg:px-5">
      <div>
        <p className="text-gray-300 text-lg robotoFlex font-semibold tracking-wide  lg:text-2xl">
          About Us
        </p>
        <div className="flex flex-col mx-auto justify-center items-center lg:justify-start ">
          <div>
            <p className="mt-5 text-base lg:text-lg">
              <span className="block text-justify text-gray-400 ">
                We are passionate about creating engaging{" "}
                <span className="capitalize text-red-900 font-semibold">
                  user experiences.
                </span>{" "}
                {""}
                At our core, we are a team of passionate web development and SEO
                professionals dedicated to creating impactful digital
                experiences. With extensive experience across various
                industries, we understand the unique challenges that different
                sectors face, and we bring this insight into every project we
                undertake. Our expertise spans from developing robust, scalable
                websites to optimizing them for search engines, ensuring that
                our clients not only have a strong online presence but also
                achieve their business goals. We pride ourselves on our
                commitment to continuous learning and innovation. Every project
                is an opportunity for us to refine our craft, deliver
                exceptional user experiences, and implement cutting-edge
                solutions that drive results. Whether working on large-scale
                enterprise projects or tailored solutions for small businesses,
                our focus remains on functionality, aesthetics, and user
                satisfaction. At webbro-consults, we don’t just build
                websites—we create digital solutions that resonate with your
                audience and elevate your brand.
              </span>
            </p>
            <span className="block mt-5 text-gray-400 lg:text-lg">
              Here are some of the tools and technologies we've been working
              with:
            </span>
            <p className="text-sm flex flex-wrap gap-4 text-red-900 font-semibold tracking-wider mt-5 vsmall:text-sm lg:text-base">
              <span className="inline-flex items-center">
                ReactJs{" "}
                <span>
                  <FaReact className="inline text-xl text-blue-500 ms-1" />
                </span>{" "}
              </span>
              <span className="inline-flex items-center">
                NextJs{" "}
                <SiNextdotjs className="inline text-xl text-gray-400 ms-1" />
              </span>
              <span className="inline-flex items-center">React-Query </span>

              <span className="inline-flex items-center">
                TailwindCss{" "}
                <SiTailwindcss className="inline text-xl text-[#38bdf8] ms-1" />
              </span>
              <span className="inline-flex items-center">Shadcn </span>
              <span className="inline-flex items-center">
                Bootstrap{" "}
                <BsBootstrapFill className="inline text-xl text-[#8712fb] ms-1" />
              </span>
              <span className="inline-flex items-center">
                Typescript{" "}
                <SiTypescript className="inline text-xl text-[#3178c6] ms-1" />
              </span>
              <span className="inline-flex items-center">
                Redux Toolkit{" "}
                <TbBrandRedux className="inline text-xl text-[#9268b8] ms-1" />
              </span>
              <span className="inline-flex items-center">
                Javascript{" "}
                <IoLogoJavascript className="inline text-xl pt-1 ps-1 bg-[#f0dc4e] ms-1" />
              </span>
              <span className="inline-flex items-center">Nodejs</span>
              <span className="inline-flex items-center">
                Html, Css{" "}
                <SiHtml5 className="inline text-lg text-orange-500 ms-1" />
                <IoLogoCss3 className="inline text-xl text-blue-500 ms-1" />
              </span>
              <span className="inline-flex items-center">
                ExpressJs, C#, Dotnet Core/Framework{" "}
              </span>
            </p>
            <a
              href="mailto:webbroconsults@gmail.com"
              className="pt-5 text-sm inline-block text-gray-400 pb-1 hover:border-b border-gray-400 lg:text-base"
            >
              Get in touch{" "}
              <span>
                <BsArrowRight className="inline text-xl" />
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutComponent;

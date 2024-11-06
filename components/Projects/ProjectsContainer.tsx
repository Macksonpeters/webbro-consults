"use client";

import React, { useEffect, useRef, useState } from "react";
import Projects from "./Projects";
import OuxMedia from "../../public/images/ouxmedia.jpg";
import OuxHcare from "../../public/images/ouxhcare.jpg";
import OuxPay from "../../public/images/ouxpay.jpg";
import ImperiumCloneImg from "../../public/images/imperiumclone.png";
import MacksonMusicImg from "../../public/images/macksonmusic.jpg";
import resultGeneratorImg from "../../public/images/preenata schools.png";
import HealthBancImg from "../../public/images/Healthbanc v1.png";
import HealthBancTwo from "../../public/images/health banc.png";
import HealthBancThree from "../../public/images/healthbanc 1.png";
import BancaImg from "../../public/images/Banca.png";
import CnsImg from "../../public/images/cns.png";
import AdventraImg from "../../public/images/adventra.png";
import HbAdminImg from "../../public/images/healthbanc admin.png";
import NewsquatImgOne from "../../public/images/newsquat 2.png";
import NewsquatImgTwo from "../../public/images/newsquat 5.png";
import NewsquatImgThree from "../../public/images/newsquat 34.png";
import TorrsitaImg from "../../public/images/torrista.png";
import JCHImg from "../../public/images/yoycehomecare.png";
import { Nunito_Sans } from "next/font/google";
import { motion, useInView } from "framer-motion";

const nunitosans = Nunito_Sans({
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  style: "normal",
});

const ProjectsContainer = () => {
  const [newsquatImg, setNewsquatImg] = useState(1);
  const [direction, setDirection] = useState("up");
  const projectsRef = useRef(null);
  const isInView = useInView(projectsRef, { once: true });

  useEffect(() => {
    const interval = setInterval(() => {
      if (direction === "up") {
        if (newsquatImg < 3) {
          setNewsquatImg(newsquatImg + 1);
        } else {
          setDirection("down");
        }
      } else {
        if (newsquatImg > 1) {
          setNewsquatImg(newsquatImg - 1);
        } else {
          setDirection("up");
        }
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [newsquatImg, direction]);

  return (
    <motion.div
      ref={projectsRef}
      style={{
        transform: isInView ? "none" : "translateY(200px)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
      }}
      className="lg:px-5"
    >
      <div>
        <p
          className={`text-gray-300 ${nunitosans.className} text-lg  font-semibold tracking-wide lg:text-2xl`}
        >
          Projects
        </p>
      </div>
      <div
        // key={newsquatImg}
        className="flex justify-around lg:flex-row lg:justify-between flex-wrap vsmall:flex-row"
      >
        {/* <Projects
          projectTitle={"HealthBanc"}
          projectSummary={
            "HealthBanc is a comprehensive digital platform that integrates a range of services aimed at promoting preventive healthcare, wellness, and fitness. Our offerings currently include access to gym and fitness services, healthy meal options, and convenient diagnostic services."
          }
          projectkey={newsquatImg}
          projectImg={
            newsquatImg == 1
              ? HealthBancImg
              : newsquatImg == 2
              ? HealthBancTwo
              : newsquatImg == 3 && HealthBancThree
          }
          projectTools={"NextJs, TailwindCss, Redux"}
        /> */}
        {/* <Projects
          projectTitle={"Torrista"}
          projectSummary={
            "Torrista is an online e-commerce tourism platform to curate all players in the Nigerian tourism space into a single platform. The platform provides a simple and convenient means for customers to book, plan personal, family/group,  vacation and enjoy a completely new experience of adventure, relaxation, and fun with a flexible payment option"
          }
          projectImg={TorrsitaImg}
          projectTools={"NextJs, TailwindCss, Redux"}
          
        /> */}
        <Projects
          projectTitle={"Joyce Care Home"}
          projectSummary={
            "JCH is an organization that are dedicated to providing personalized and compassionate home care services that cater to the unique needs of each of our senior citizens. Our goal is to enhance the quality of life for your loved ones while allowing them to maintain independence in the comfort of own home"
          }
          projectImg={JCHImg}
          projectTools={"NextJs, TailwindCss, Shadcn"}
          projectLiveLink={"https://joycecarehome.net/"}
        />
        {/* <Projects
          projectTitle={"Banca"}
          projectSummary={
            "Banca is a digital SME bank, designed to help small businesses open accounts, transfer funds, pay bills and better manage their money, get loans, generate statements for embassies and grow their businesses from the mobile app or web application."
          }
          projectImg={BancaImg}
          projectTools={"NextJs, TailwindCss, Redux"}
          
        /> */}
        <Projects
          projectTitle={"Newsquat"}
          projectSummary={
            "NewsQuant is a specialized resource platform delivering in-depth media coverage and tailored content creation services. They provide expertly crafted articles and reports for organizations, ensuring insightful and well-researched content that enhances their communication and engagement strategies."
          }
          projectImg={NewsquatImgOne}
          projectTools={"NextJs, TailwindCss, Redux"}
          projectLiveLink={"https://newsquat.netlify.app/"}
        />

        <Projects
          projectTitle={"Adventra"}
          projectSummary={
            "Adventra is your gateway to Africa's most thrilling adventures. Dive into curated experiences like summiting Kilimanjaro or exploring the Serengeti. Each journey is crafted to immerse you in nature and culture, all presented through a sleek, engaging platform"
          }
          projectImg={AdventraImg}
          projectTools={"Nextjs, Tailwindcss"}
          projectLiveLink={"https://adventra.netlify.app/"}
        />
        {/* 
        <Projects
          projectTitle={"Control Notification System"}
          projectSummary={
            "A robust central notification system, empowering authorized admins to seamlessly distribute queries, information, and updates to over 1,000,000 customers via SMS, email, and push notifications. This solution significantly improves communication efficiency, operational effectiveness, and user engagement across the organization"
          }
          projectImg={CnsImg}
          projectTools={"ReactJs, ChakraUI, Redux"}
        /> */}

        {/* <Projects
          projectTitle={"OuxMedia"}
          projectSummary={
            "OuxMedia is a dynamic social media platform where users can explore and engage with a wide range of news articles. You can like and comment on articles, chat with other users, and easily search for articles on topics that interest you. "
          }
          projectImg={OuxMedia}
          projectTools={"ReactJs, Redux, Firebase"}
          projectLiveLink={"https://ouxsocial.netlify.app/"}
        /> */}

        {/* <Projects
          projectTitle={"Imperium Clone"}
          projectSummary={
            "Renewable Energy Application Clone of the SB Imperium Product. Note (This is a clone of the website)"
          }
          projectImg={ImperiumCloneImg}
          projectTools={"Bootstrap, Html/Css"}
          projectLiveLink={"https://imperiumclone.netlify.app/"}
        /> */}
        {/* <Projects
          projectTitle={"HB Admin"}
          projectSummary={"Admin Application of the HB Website"}
          projectImg={HbAdminImg}
          projectTools={"Nextjs, Tailwindcss, ContextApi"}
        /> */}

        <Projects
          projectTitle={"OuxPay"}
          projectSummary={
            "OuxPay is a banking simulation web app offering for fintechs used during pitching and fund raising rounds. It customizes a true-to-life banking experience for their presentation, allowing fintechs to simulate accounts creation, funding, and fund transfers—all without real money involved. "
          }
          projectImg={OuxPay}
          projectTools={"NextJs, Redux-Toolkit"}
          projectLiveLink={"https://ouxay.netlify.app"}
        />
        {/* <Projects
          projectTitle={"OuxHcare"}
          projectSummary={
            "Ouxhcare Hub is your trusted partner on your journey to better health. We specialize in providing top-quality hospital guide including Maternity, Immunization, and Antenatal Information on Clinics, ensuring the well-being of mothers and infants. At Ouxhcare Hub, we aim to be the Health Compass of Nigeria, guiding individuals and families to make informed healthcare decisions. I utilized Node and ExpressJs for the backend Api and NextJs for the frontend"
          }
          projectImg={OuxHcare}
          projectTools={"ExpressJs, NextJs, TypeScript"}
          // projectLiveLink={"https://ouxhcare.vercel.app/"}
        /> */}
        {/* <Projects
          projectTitle={"Music Application"}
          projectSummary={
            "This music website offers a seamless music discovery experience, allowing users to search for any song and enjoy a 1-minute snippet preview. Built with React.js for a dynamic and interactive user interface, I made use of the RapidAPI to access an extensive music library. "
          }
          projectImg={MacksonMusicImg}
          projectTools={"NextJs"}
          // projectLiveLink={"https://macksonmusic.netlify.app/"}
        /> */}
        {/* <Projects
          projectTitle={"School Result Generator"}
          projectSummary={
            "This is a Pc/Laptop web app for Preenata Schools, This report card generation website simplifies the process of creating comprehensive student reports. By inputting exam and test scores, the platform generates report cards that include total scores, teacher remarks, and a full report sheet. This tool empowers educators to efficiently assess student performance and provide valuable feedback."
          }
          projectImg={resultGeneratorImg}
          projectTools={"Vanilla Js, Bs5"}
          // projectLiveLink={"https://preneeta.netlify.app/"}
        /> */}
      </div>
    </motion.div>
  );
};

export default ProjectsContainer;

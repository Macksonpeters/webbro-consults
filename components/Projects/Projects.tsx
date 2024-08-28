import Image from "next/image";
import React from "react";
import { BsGithub } from "react-icons/bs";

interface Props {
  projectTitle?: any;
  projectSummary?: any;
  projectImg?: any;
  projectTools?: any;
  projectLiveLink?: any;
  projectGitHub?: any;
  projectkey?: any;
}

const Projects = ({
  projectTitle,
  projectSummary,
  projectImg,
  projectTools,
  projectLiveLink,
  projectGitHub,
  projectkey,
}: Props) => {
  return (
    <div className="text-gray-300 flex mx-auto flex-col justify-center items-center bg-black  border border-red-900 w-max py-5 px-5 rounded-lg my-8 lg:mx-0 xl:justify-start xl:items-start">
      <div className="flex flex-col flex-grow justify-between lg:gap-3">
        <div className="mb-3 lg:mb-0">
          <p className="font-semibold tracking-wider">{projectTitle}</p>
          <p className="mt-2 xl:h-[auto] xl:pb-[1rem] text-sm text-gray-400 tracking-wider text-justify w-[80vw] sm:w-[90vw] lg:w-[38vw] xl:w-[25vw] 2xl:w-[27vw] 2xl:max-w-[500px]">
            {projectSummary}
          </p>
        </div>
        <div>
          <hr className="hidden lg:block xl:mb-3" />

          <a
            className={`cursor-pointer`}
            target="_blank"
            href={projectLiveLink}
          >
            <Image
              src={projectImg}
              width={0}
              height={0}
              className={` object-contain w-[80vw] sm:w-[90vw] lg:w-[38vw] lg:h-[230px]  xl:w-[25vw] 2xl:w-[27vw] 2xl:max-w-[500px] transform scale-100 transition-transform duration-500 ease-in-out hover:scale-[97%]`}
              alt="Project Img"
            />
          </a>
          <p className="text-sm pt-5 flex justify-between text-gray-400 vsmall:flex-col">
            <span className="lg:w-3/4 xl:w-[50%] 2xl:w-[70%]">
              {" "}
              {projectTools}
            </span>
            <span className="lg:w-1/4 xl:w-[35%] 2xl:w-[30%] flex justify-between gap-3 pb-3 vsmall:mt-4">
              <span className="hover:border-b hover:border-gray-400">
                {projectLiveLink && (
                  <a target="_blank" href={projectLiveLink}>
                    View Project
                  </a>
                )}
              </span>
              <span className="hover:border-b hover:border-gray-400">
                {projectGitHub && (
                  <a target="_blank" href={projectGitHub}>
                    <BsGithub className="inline text-lg " />
                  </a>
                )}
              </span>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Projects;

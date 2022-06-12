import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { SiFrontendmentor } from "react-icons/si";

const Info = () => {
  return (
    <div className="flex flex-col justify-center w-screen h-[90vh]">
      <div className="h-full shadow-md flex flex-col justify-center items-center">
        <div className="shadow-md p-8 w-[24rem] text-sm h-40 flex flex-col justify-center">
          <div className=" mr-auto ml-auto">
            <h2 className="flex items-center gap-2 ">
              <SiFrontendmentor />
              This website idea came from
              <a
                className="font-bold underline"
                href="https://www.frontendmentor.io/challenges/rest-countries-api-with-color-theme-switcher-5cacc469fec04111f7b848ca"
                rel="noreferrer"
                target="_blank"
                alt="frontend mentor"
              >
                Frontend Mentor
              </a>
            </h2>
          </div>

          <div className="mr-auto ml-auto">
            <h2 className="flex items-center pt-4">
              <AiFillGithub />
              <a
                className="font-bold underline pl-2"
                href="https://github.com/Paulorrf?tab=repositories"
                rel="noreferrer"
                target="_blank"
                alt="github"
              >
                My GitHub
              </a>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;

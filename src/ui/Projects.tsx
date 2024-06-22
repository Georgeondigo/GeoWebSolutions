import { projectsData } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Projects = () => {
  return (
    <div className="max-w-screen-2xl mx-auto px-8 pb-6 lgl:pb-20">
      <div className="text-center">
        <h4 className="text-secondaryColor uppercase text-sm tracking-[4px] mb-2">
          projects overview
        </h4>
        <h2 className="text-3xl lg:text-[35px] font-semibold tracking-[2px] lg:leading-[55px]">
          Some of the projects we have done
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-3 gap-16 py-10">
        {projectsData.map((project) => (
          <div
            key={project._id}
            className="w-full h-auto border border-borderColor border-opacity-30"
          >
            <div className="w-full h-80 flex flex-col group border-b border-b-borderColor  overflow-hidden">
              <div className="overflow-hidden relative">
                <Link href={project?.link} target="blank">
                  <Image
                    className="w-full h-auto cursor-pointer object-cover top-0 -translate-y-[0] group-hover:-translate-y-[80%] transition-translate transition-ease-in duration-[5s]"
                    src={project.image}
                    alt="projectOneImg"
                  />
                </Link>
                {/* ================= image design start here ================ */}
                <span className="w-1 h-8 bg-secondaryColor inline-block absolute top-0 left-0  transition-translate duration-500 -translate-x-1 group-hover:-translate-x-0"></span>
                <span className="w-1 h-8 bg-secondaryColor inline-block absolute bottom-0 left-0  transition-translate duration-500 -translate-x-1 group-hover:-translate-x-0"></span>
                <span className="w-1 h-8 bg-secondaryColor inline-block absolute bottom-0 right-0  transition-translate duration-500 translate-x-2 group-hover:translate-x-0"></span>
                <span className="w-1 h-8 bg-secondaryColor inline-block absolute top-0 right-0  transition-translate duration-500 translate-x-1 group-hover:translate-x-0"></span>
                <span className="w-8 h-1 bg-secondaryColor inline-block absolute top-0 right-0  transition-translate duration-500 -translate-y-1 group-hover:-translate-y-0"></span>
                <span className="w-8 h-1 bg-secondaryColor inline-block absolute top-0 left-0  transition-translate duration-500 -translate-y-1 group-hover:-translate-y-0"></span>
                <span className="w-8 h-1 bg-secondaryColor inline-block absolute bottom-0 left-0  transition-translate duration-500 translate-y-1 group-hover:translate-y-0"></span>
                <span className="w-8 h-1 bg-secondaryColor inline-block absolute bottom-0 right-0  transition-translate duration-500 translate-y-1 group-hover:translate-y-0"></span>
                {/* ================= image design end here ================ */}
              </div>
              <Link href={project?.link} target="blank">
                <p className="font-titleFont overflow-hidden text-xs tracking-wider uppercase text-white/70 h-7 w-full px-2 py-1 mt-4 relative font-semibold group-hover:text-white duration-500 cursor-pointer">
                  {project.title}
                  <span className="w-[1px] h-2 bg-borderColor inline-block absolute bottom-0 left-0 -translate-x-[.5px] group-hover:bg-secondaryColor group-hover:translate-x-0 transition-transform duration-500"></span>
                  <span className="w-full h-[1px] bg-borderColor inline-block absolute bottom-0 left-0 translate-y-[.5px] group-hover:bg-secondaryColor group-hover:translate-y-0 transition-transform duration-500"></span>
                </p>
              </Link>
            </div>
            <div className="p-2">
              <p className="w-full text-base text-darkText">{project.des}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;

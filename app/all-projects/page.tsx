"use client";

import React from "react";
import { FaLocationArrow } from "react-icons/fa6";
import { projects } from "@/data";
import { PinContainer } from "@/components/ui/Pin";
import { useRouter } from "next/navigation";

const AllProjects = () => {
  const router = useRouter();

  const handleCardClick = (id: number) => {
    router.push(`/projects/${id}`); // Navigate to the project detail page dynamically
  };

  return (
    <div id="all-projects" className="py-20">
      <h1 className="heading">
        Explore <span className="text-purple">All Projects</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
        {projects.map((project) => (
          <div
            key={project.id}
            onClick={() => handleCardClick(project.id)} // Navigate on card click
            className="cursor-pointer lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
            role="button"
            aria-label={`View details for ${project.title}`}
          >
            <PinContainer title="Available on GITHUB" href={project.link}>
              <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
                <div
                  className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                  style={{ backgroundColor: "#13162D" }}
                >
                  <img src="/bg.png" alt="background" />
                </div>
                <img
                  src={project.img}
                  alt="project cover"
                  className="z-10 absolute bottom-0"
                />
              </div>

              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                {project.title}
              </h1>

              <p
                className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
                style={{
                  color: "#BEC1DD",
                  margin: "1vh 0",
                }}
              >
                {project.des}
              </p>

              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {project.iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                      style={{
                        transform: `translateX(-${5 * index + 2}px)`,
                      }}
                    >
                      <img src={icon} alt="icon" className="p-2" />
                    </div>
                  ))}
                </div>

                <div className="flex justify-center items-center">
                  <span className="flex lg:text-xl md:text-xs text-sm text-purple">
                    Learn More
                  </span>
                  <FaLocationArrow className="ms-3" color="#CBACF9" />
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllProjects;

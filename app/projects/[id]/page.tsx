"use client";

import { projects } from "@/data";
import { FaLocationArrow } from "react-icons/fa6";
import MagicButton from "@/components/MagicButton";

const ProjectDetails = ({ params }: { params: { id: string } }) => {
  const projectId = parseInt(params.id, 10); // Convert to a number
  const project = projects.find((p) => p.id === projectId);

  if (!project) {
    return (
      <div className="text-center py-20 text-gray-400">
        <h1 className="text-2xl font-bold">Oops!</h1>
        <p className="mt-2 text-lg">Project not found!</p>
      </div>
    );
  }

  return (
    <div className="py-20 px-5 lg:px-10">
      <div className="max-w-5xl mx-auto">
        {/* Project Title */}
        <h1 className="text-4xl font-bold text-purple mb-8 text-center">
          {project.title}
        </h1>

        {/* Project Image */}
        <div className="relative w-full lg:w-[50%] mx-auto mb-8 overflow-hidden rounded-3xl">
          <div
            className="absolute inset-0 w-full h-full"
            style={{ backgroundColor: "#13162D" }}
          ></div>
          <img
            src={project.img}
            alt={project.title}
            className="relative z-10 w-full h-auto max-w-[500px] mx-auto"
          />
        </div>

        {/* Project Details */}
        <p
          className="text-lg text-gray-300 font-light mb-8 text-center leading-relaxed"
          style={{ color: "#BEC1DD" }}
        >
          {project.details}
        </p>

        {/* View on GitHub Button */}
        <div className="flex justify-center mt-10">
          <MagicButton
            title="View Project on GitHub"
            icon={<FaLocationArrow />}
            position="right"
            handleClick={() => window.open(project.link, "_blank")}
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;

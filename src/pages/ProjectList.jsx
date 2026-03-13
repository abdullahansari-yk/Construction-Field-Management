import React from "react";
import { projects } from "../data/projects";
import { useNavigate } from "react-router-dom";

const ProjectList = () => {
  const navigate = useNavigate();

  const getStatusColor = (status) => {


    if (status === "Active") {
      return "bg-green-500";
    }
    else {
      return "bg-gray-500";
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">

      <h1 className="text-3xl font-bold mb-6 text-center">
        Projects List
      </h1>


      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

        {projects.map((project) => (
          <div
            key={project.id}
            onClick={() => navigate(`/dpr/${project.id}`)}
            className="cursor-pointer flex flex-col items-start gap-2 bg-white rounded-xl shadow-md p-5 hover:scale-101 "
          >


            <h2 className="text-2xl font-semibold mb-2">
              {project.name}
            </h2>


            <div
              className={`text-white inline text-base px-3 py-1 rounded-full ${getStatusColor(
                project.status
              )}`}
            >
              {project.status}
            </div>


            <div className="mt-4 text-gray-600 text-base space-y-1">
              <p> Start Date: {project.startDate}</p>
              <p> Location: {project.location}</p>
            </div>

          </div>
        ))}

      </div>

    </div>
  );
};

export default ProjectList;
"use client";
import { Description, ManageAccounts, PostAdd } from "@mui/icons-material";
import React from "react";
import { useState, useEffect } from "react";

type Project = {
  id: number;
  name: string;
  description: string;
  completed: boolean;
  picture: string;
};

export default function ProjectManagement() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    async function fetchProjects() {
      const response = await fetch("http://localhost:5000/projects");
      const data = await response.json();
      setProjects(data);
    }
    fetchProjects();
  }, []);

  const handleDelete = async (projectId: number) => {
    await fetch(`http://localhost:5000/projects/${projectId}`, {
      method: "DELETE",
    });
    setProjects(projects.filter((project) => project.id !== projectId));
  };
  return (
    <main className="flex justify-center items-center ">
      <div className="bg-white rounded-md h-min  w-[80vw] p-6 px-12 ">
        <h1 className="text-center font-black text-4xl mt-2">
          Manage Projects
        </h1>
        <div>
          <div className=" flex justify-between items-center p-4">
            <h2 className="text-2xl font-bold mb-4">All Projects</h2>
            <button className="bg-blue-500 text-white p-4  w-32 rounded-md">
              Add Project
            </button>
          </div>
          <ul className="space-y-4">
            {projects.map((project: Project, index: number) => (
              <li
                key={project.id}
                className={` p-4 rounded-md flex justify-between items-center ${
                  index % 2 === 1 ? "bg-gray-200" : ""
                }`}
              >
                <div>
                  <h3 className="text-lg font-medium">{project.name}</h3>
                  <p className="text-gray-500">{project.description}</p>
                </div>
                <div className=" w-32 flex justify-between">
                  <button className="hover:bg-gray-100 p-4 rounded-md">
                    Edit
                  </button>
                  <button
                    className="hover:bg-red-400 p-4 rounded-md"
                    onClick={() => handleDelete(project.id)}
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
}

"use client";
import { useEffect, useState } from "react";
import Navigation from "../(navigation)/Navigation";
import Project from "./Project";

type Project = {
  id: number;
  name: string;
  description: string;
  completed: boolean;
  picture: string;
};

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    async function fetchProjects() {
      const response = await fetch("http://localhost:5000/projects");
      const data = await response.json();
      setProjects(data);
    }
    fetchProjects();
  }, []);
  return (
    <>
      <Navigation></Navigation>

      <main className=" w-full h-auto  flex flex-col p-8">
        <div className="text-center mt-24">
          <h1 className="font-bold font-serif text-5xl  headline"> Projekte</h1>
        </div>
        <div className="flex flex-wrap gap-4 mt-12">
          {projects.map((project: Project) => {
            return (
              <Project
                key={project.id}
                name={project.name}
                description={project.description}
                image={project.picture}
              ></Project>
            );
          })}
        </div>
      </main>
    </>
  );
}

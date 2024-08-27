"use client";
import ArrowBack from "@mui/icons-material/ArrowBack";
import { Project } from "../Project";
import { useState } from "react";
export default function CreateProject() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [picture, setPicture] = useState("");

  const handleNameChange = (e: any) => setName(e.target.value);

  const handleDescriptionChange = (e: any) => setDescription(e.target.value);

  const handlePictureChange = (e: any) => setPicture(e.target.value);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      await fetch("http://localhost:5000/projects", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          description,
          picture,
        }),
      });
    } catch (error) {
      console.error(error);
    }
    window.location.href = "/dashboard/projects";
  };

  return (
    <main className="flex justify-center items-center ">
      <div className="bg-white rounded-md h-min  w-[80vw] p-6 px-12 ">
        <button
          className="bg-blue-500 text-white p-4  w-32 rounded-md"
          onClick={() => window.history.back()}
        >
          <ArrowBack />
        </button>
        <h1 className="text-center font-black text-4xl mt-2">Create Project</h1>

        <form className="flex flex-col space-y-4 mt-4">
          <input
            type="text"
            placeholder="Project Name"
            className="p-4 rounded-md"
            onChange={handleNameChange}
            value={name}
          ></input>
          <textarea
            placeholder="Project Description"
            className="p-4 rounded-md h-48"
            onChange={handleDescriptionChange}
            value={description}
          ></textarea>
          <label>
            Project Picture
            <input type="file" className="p-4 rounded-md"></input>
          </label>

          <button
            className="bg-blue-500 text-white p-4  w-32 rounded-md"
            onClick={handleSubmit}
          >
            Create
          </button>
        </form>
      </div>
    </main>
  );
}

import React from "react";
import ManageAccounts from "@mui/icons-material/ManageAccounts";
import PostAdd from "@mui/icons-material/PostAdd";
import Description from "@mui/icons-material/Description";

export default function Dashboard() {
  return (
    <main className="flex justify-center items-center h-[40vw]">
      <div className="bg-white rounded-md h-[80%] w-3/4 p-6 px-12 ">
        <h1 className="text-center font-black text-4xl mt-2 mb-24">
          Dashboard
        </h1>

        <div className="flex items-center flex-row space-x-12 ">
          <div
            className="w-1/3  flex justify-center items-center flex-col rounded-3xl p-4 cursor-pointer hover:bg-gray-300"
            onClick={() => {
              window.location.href = "/dashboard/projects";
            }}
          >
            <Description sx={{ fontSize: 150 }} />
            <h2 className="text-center font-bold text-2xl">Manage Projects</h2>
          </div>
          <div
            className="w-1/3  flex justify-center items-center flex-col rounded-3xl p-4 cursor-pointer hover:bg-gray-300"
            onClick={() => {
              window.location.href = "/dashboard/blogs";
            }}
          >
            <PostAdd sx={{ fontSize: 150 }} />
            <h2 className="text-center font-bold text-2xl">Manage Blogs</h2>
          </div>
          as
          <div
            className="w-1/3  flex justify-center items-center flex-col rounded-3xl p-4 cursor-pointer hover:bg-gray-300"
            onClick={() => {
              window.location.href = "/dashboard/users";
            }}
          >
            <ManageAccounts sx={{ fontSize: 150 }} />
            <h2 className="text-center font-bold text-2xl">Manage Users</h2>
          </div>
        </div>
      </div>
    </main>
  );
}

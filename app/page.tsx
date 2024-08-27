"use client";
import Image from "next/image";
import Navigation from "./(navigation)/Navigation";
import AboutMe from "./(about)/AboutMe";
import StartPage from "./StartPage";
import Erfahrung from "./(about)/Erfahrung";

export default function LandingPage() {
  return (
    <main className="w-full h-screen flex flex-col  ">
      <Navigation></Navigation>

      <div className=" flex h-5/6 mt-24">
        <div id="startpage" className="w-3/5 h-1/2 ">
          <StartPage></StartPage>
        </div>
        <div className="w-2/5 h-auto flex justify-end ">
          <img
            src={"/alex_nobg_edited.png"}
            alt="Picture of me"
            className="h-full rounded-md"
          ></img>
        </div>
      </div>
      <div className="mt-8 mb-8">
        <AboutMe></AboutMe>

        <Erfahrung></Erfahrung>
      </div>
    </main>
  );
}

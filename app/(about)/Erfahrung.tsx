import PS from "./ProgrammierSprachen";
import WF from "./WebFrameworks";
import S from "./Software";
import { useState } from "react";

const infoPoints = ["Programmiersprachen", "Web Frameworks", "Software"];
const infoPointColor = ["bg-red-500", "bg-green-500", "bg-cyan-500"];

export default function Erfahrung() {
  // either "Programmiersprachen", "Web Frameworks" or "Software"
  const [selectedInfoPoint, setSelectedInfoPoint] = useState(infoPoints[0]);

  const handleInfoPointClick = (e: any) => {
    setSelectedInfoPoint(e.target.innerHTML);
  };
  return (
    <div className="mt-8  bg-slate-200 p-8 rounded-md ">
      <h1 className="font-bold font-serif text-5xl  headline">Erfahrung</h1>

      <div className="mt-12 flex">
        <div className="space-y-12 w-2/5">
          {infoPoints.map((point, i) => {
            return (
              <h2
                className={` w-full font-bold font-serif ${
                  infoPointColor[i]
                } text-3xl infopoint cursor-pointer p-4 hover:shadow-2xl  rounded-md rounded-r-none ${
                  selectedInfoPoint === point ? "" : ""
                }`}
                onClick={handleInfoPointClick}
              >
                {point}
              </h2>
            );
          })}
        </div>
        <div className="w-full">
          <div
            className={`infobox w-full h-[28rem] p-2 rounded-md rounded-tl-none ${
              selectedInfoPoint === infoPoints[0]
                ? infoPointColor[0]
                : selectedInfoPoint === infoPoints[1]
                ? infoPointColor[1]
                : infoPointColor[2]
            }`}
          >
            {selectedInfoPoint === infoPoints[0] ? (
              <PS />
            ) : selectedInfoPoint === infoPoints[1] ? (
              <WF />
            ) : (
              <S />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

"use client";
import "./AboutMe.css";
import Erfahrung from "./Erfahrung";

export default function AboutMe() {
  return (
    <>
      <div className="paper-bg bg-slate-200 p-8 rounded-md ">
        <div className="text-center">
          <h1 className="font-bold font-serif text-5xl  headline">Über mich</h1>
        </div>

        <p className="mt-16 font-medium text-3xl font-serif">
          Mein Name ist Alexander Zeitlhofer und seit ich jung bin, habe ich
          mich für das Internet, Spiele und neueste Technologien interessiert.
          Zurzeit besuche ich die IT-HTL in Ybbs an der Donau. Dort haben wir,
          meiner Meinung nach, zu wenig über die Webentwicklung gelernt,
          deswegen beschäftige ich mich seit einiger Zeit auch viel außerhalb
          des Unterrichts.
          <br />
          <br />
          Diese Website soll mich dem Internet vorstellen und auch eine Sammlung
          meiner Projekte bereitstellen.
        </p>
      </div>
    </>
  );
}

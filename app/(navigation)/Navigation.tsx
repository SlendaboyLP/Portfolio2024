import Image from "next/image";
import NavButton from "./NavButton";
import "./Navigation.css";
export default function Navigation() {
  return (
    <nav className="w-full h-8 z-50  flex items-center justify-between fixed">
      <div>
        <p
          className="font-black text-5xl select-none cursor-pointer title "
          onClick={() => (window.location.href = "/")}
        >
          ALEXANDER ZEITLHOFER
        </p>
      </div>
      <div className="flex w-1/5 justify-between mr-16">
        {/* <NavButton value="Über mich" link="/#about"></NavButton> */}
        <NavButton value="Projekte" link="/projects"></NavButton>
        <NavButton value="Kontakt" link="/contact"></NavButton>
      </div>
    </nav>
  );
}

import { useState } from "react";
import logo from "../images/logo.svg";
import hamburger from "../images/icon-hamburger.svg";

export default function Nav() {
  const [nav, setNav] = useState<boolean>(false);

  return (
    <nav className="pt-7 md:pt-[34px] flex justify-between items-center relative">
      {/* Logo */}
      <img src={logo} alt="Sunnyside Logo" className="md:w-[170px] md:h-[34px]" />

      {/* Hamburger Menu Icon */}
      <div
        className="md:hidden cursor-pointer w-8 h-8 bg-contain bg-no-repeat"
        style={{ backgroundImage: `url(${hamburger})` }}
        onClick={() => setNav(!nav)}
      ></div>

      {/* Navigation Links (Responsive) */}
      <div
        className={
          "w-11/12 ml-4 absolute md:absolute z-[1000] top-[105px] md:top-0   bg-white md:bg-transparent md:flex md:justify-end md:items-center md:gap-12 before:w-0 before:h-0 before:absolute before:-top-6 before:right-0 before:border-t-[24px] before:border-t-transparent before:border-r-[24px] before:border-r-white md:before:hidden " +
          (nav ? "" : "hidden")
        }
      >
        <a href="#" className="nav-link">
          About
        </a>
        <a href="#" className="nav-link">
          Services
        </a>
        <a href="#" className="nav-link">
          Projects
        </a>
        <button className="w-[140px] h-14 mt-8 mb-10 md:my-0 bg-yellow md:bg-white hover:md:bg-[#6fcfff] hover:md:text-white rounded-full font-fraunces uppercase text-[0.95rem]">
          Contact
        </button>
      </div>
    </nav>
  );
}

import Nav from "./Nav";
import mobileImage from "../images/mobile/image-header.jpg";
import desktopImage from "../images/desktop/image-header.jpg";


export default function Header() {
  return (
    <header className="bg-[#3dbeff]">
      {/* <div> */}
      <Nav/>
      
      {/* <img src={mobileImage} alt="sunnyside agency header image" className="md:hidden w-full"/><img src={desktopImage} 
    alt="sunnyside agency header image" className="hidden md:block w-full"/></div> */}

  </header>
  );
}

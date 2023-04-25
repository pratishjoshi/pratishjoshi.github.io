import { useState } from "react";
import "./navbar.scss";

const Navbar = () => {
  const navbarList = [
    { name: "home", link: "home" },
    { name: "about", link: "about" },
    { name: "portfolio", link: "projects" },
    { name: "contact", link: "contact" },
  ];
  const [navbar, setNavbar] = useState("home");
  const onClickHandler = (e) => {
    setNavbar(e);
  };

  return (
    <nav id="navbar" className="text-white text-xl sticky top-0 z-50">
      <div className="container mx-auto">
        <ul
          id="navbar-list"
          className="list-none flex gap-8 h-14 lg:gap-12 lg:justify-start justify-center items-center overflow-x-hidden text-xs md:text-lg"
        >
          {navbarList.map((data, key) => (
            <a
              href={`#${data.link}`}
              className={`uppercase ${
                navbar === data.link ? "text-secondary" : ""
              }`}
              key={key}
              onClick={() => onClickHandler(data.link)}
            >
              <li>{data.name}</li>
            </a>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

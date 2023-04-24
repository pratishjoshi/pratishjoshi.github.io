import { useState } from "react";
import "./navbar.scss";

const Navbar = () => {
  const navbarList = [
    { name: "home", link: "landing-container" },
    { name: "about", link: "about-container" },
    { name: "projects", link: "projects-container" },
    { name: "portfolio", link: "portfolio-container" },
    { name: "blog", link: "blog" },
    { name: "contact", link: "contact" },
  ];
  const [navbar, setNavbar] = useState();
  const onClickHandler = (e) => {
    setNavbar(e);
  };

  return (
    <nav id="navbar-container" className="text-white text-xl sticky top-0 z-50">
      <div className="container mx-auto">
        <ul
          id="navbar-list"
          className="list-none flex gap-12 h-14 items-center"
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

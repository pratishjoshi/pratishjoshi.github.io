import { useState } from "react";
import Title from "../../reusables/Title";
import "./projects.scss";

const Projects = () => {
  const [projectNavState, setProjectNavState] = useState(0);
  const projectNavList = [
    {
      value: 0,
      name: "all",
      content: [
        {
          img: "me.jpeg",
          title: "test title",
          description: "they call me ace",
          tech_used: "test / tech",
        },
        {
          img: "me.jpeg",
          title: "test title",
          description: "they call me ace",
          tech_used: "test / tech",
        },
        {
          img: "me.jpeg",
          title: "test title",
          description: "they call me ace",
          tech_used: "test / tech",
        },
        {
          img: "me.jpeg",
          title: "test title",
          description: "they call me ace",
          tech_used: "test / tech",
        },
        {
          img: "me.jpeg",
          title: "test title",
          description: "they call me ace",
          tech_used: "test / tech",
        },
      ],
    },
    {
      value: 1,
      name: "react-js",
      content: [
        {
          img: "me.jpeg",
          title: "react project title",
          description: "they call me ace",
          tech_used: "react / nodejs",
        },
        {
          img: "me.jpeg",
          title: "react project title",
          description: "they call me ace",
          tech_used: "react / nodejs",
        },
      ],
    },
    {
      value: 2,
      name: "laravel",
      content: [
        {
          img: "me.jpeg",
          title: "laravel project title",
          description: "they call me ace",
          tech_used: "laravel",
        },
      ],
    },
  ];
  const projectStateHandler = (index) => {
    setProjectNavState(index);
  };

  return (
    <section id="projects-container" className="pt-20 pb-32">
      <div className="container mx-auto">
        <Title header_title="Projects" />
        <ul
          id="projects-nav"
          className="list-none grid grid-cols-3 items-center justify-center w-1/2 mx-auto uppercase"
        >
          {projectNavList.map((data, key) => (
            <li
              key={key}
              className={`w-1/2 mx-auto p-2 text-lg text-white text-center ${
                projectNavState === data.value
                  ? "bg-secondary"
                  : "text-zinc-600"
              }`}
              onClick={() => projectStateHandler(data.value)}
            >
              {data.name}
            </li>
          ))}
        </ul>
        <div
          id="projects-list"
          className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-4/5 mx-auto justify-center items-center gap-10"
        >
          {projectNavList
            .find((data) => data.value === projectNavState)
            .content.map((project, key) => (
              <div
                className="grid-content relative mx-auto w-full min-h-[24vh] h-[100%] text-center mt-32 z-10"
                key={key}
              >
                <img
                  src={project.img}
                  alt={`project ${key}`}
                  className="object-cover w-full absolute aspect-square"
                />
                <div
                  className="relative w-full grid grid-cols-1 h-full"
                  id="image-hover-cover"
                >
                  <div className="flex flex-col justify-center items-center">
                    <div className="font-semibold text-2xl capitalize">
                      {project.title}
                    </div>
                    <div className="font-light text-secondary capitalize text-lg">
                      {project.tech_used}
                    </div>
                  </div>
                  <div>
                    <button className="px-10 py-3 uppercase font-light">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

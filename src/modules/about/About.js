import Title from "../../reusables/Title";
import { SiSpeedtest } from "react-icons/si";
import { ImLaptop } from "react-icons/im";
import { FaRegLightbulb } from "react-icons/fa";
import { BiRocket } from "react-icons/bi";
import Chart from "react-apexcharts";
import "./about.scss";

const About = () => {
  const hexagonContent = [
    {
      title: "fast",
      description:
        "Fast load times and lag free interaction, my highest priority.",
      icon: <SiSpeedtest size={48} />,
    },
    {
      title: "responsive",
      description: "My layouts will work on any device, big or small.",
      icon: <ImLaptop size={48} />,
    },
    {
      title: "intuitive",
      description: "Strong preference for easy to use, intuitive UX/UI.",
      icon: <FaRegLightbulb size={48} />,
    },
    {
      title: "dynamic",
      description:
        "Websites don't have to be static, I love making pages come to life.",
      icon: <BiRocket size={48} />,
    },
  ];

  const state = {
    options: {
      chart: {
        id: "basic-bar",
      },
      plotOptions: {
        bar: {
          horizontal: true,
        },
      },
      xaxis: {
        categories: [
          "HTML/CSS",
          "Javascript",
          "PHP",
          "Photoshop",
          "Illustrator",
          "Linux",
          "Git",
        ],
      },
    },
    series: [
      {
        name: "Skill",
        data: [95, 85, 87, 80, 85, 75, 80],
      },
    ],
  };

  return (
    <section id="about-container" className="py-20">
      <div className="container mx-auto">
        <Title header_title="About" />
        <div
          id="hexagon-perks-container"
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-28"
        >
          {hexagonContent.map((data, key) => (
            <div className="grid-content min-h-[250px] -z-10" key={key}>
              <div className="hexagon">
                <span>{data.icon}</span>
              </div>
              <div className="font-semibold text-zinc-500 capitalize text-2xl text-center mt-12">
                {data.title}
              </div>
              <p className="text-ellipsis text-center mt-2 font-light text-zinc-500">
                {data.description}
              </p>
            </div>
          ))}
        </div>

        <div
          id="about-me"
          className="grid sm:grid-cols-1 lg:grid-cols-2 gap-20 py-16"
        >
          <div
            className="grid text-center items-center justify-center j w-full gap-6"
            id="my-description"
          >
            <img
              src="me.jpeg"
              alt="pratish joshi"
              className="rounded-full w-96 h-96 object-cover mx-auto"
            />
            <p className="w-4/5 mx-auto">
              <h1 className="font-semibold text-zinc-700 capitalize text-2xl">
                Who's this guy?
              </h1>
              <br />
              As a Software Engineer and Full-Stack Developer at Krafters Pvt.
              Ltd. located in Tripureshwor, Kathmandu, I possess a strong
              enthusiasm for technology, science, and music. Together, let's
              collaborate and create something exceptional.
            </p>
          </div>
          <div id="my-skills" className="w-[100%] min-h-[24rem] h-[100%] -z-10">
            <Chart
              className="p-5"
              options={state.options}
              series={state.series}
              type="bar"
              height={"100%"}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

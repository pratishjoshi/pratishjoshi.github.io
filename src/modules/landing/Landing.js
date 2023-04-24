import { AiOutlineArrowUp } from "react-icons/ai";
import "./landing.scss";

const Landing = () => {
  return (
    <section className="relative" id="home">
      <video
        autoPlay
        loop
        muted
        className="w-full absolute top-0 object-cover h-full -z-10"
      >
        <source src="background-video.mp4" type="video/mp4" />
      </video>
      <div className="z-10 flex text-white items-center h-[100vh] justify-center text-center">
        <div>
          <h2 className="text-6xl">
            Hello, I'm <span className="text-secondary">Pratish Joshi</span>.
          </h2>
          <h2 className="text-6xl">I'm a full-stack web developer.</h2>
          <button className="border border-2 bg-transparent p-4 mt-5 w-60">
            <div className="flex justify-center items-center gap-4 font-semibold">
              View my work
              <span className="text-white" id="arrow-icon">
                <AiOutlineArrowUp size={"24px"} />
              </span>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Landing;

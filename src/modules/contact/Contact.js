import Title from "../../reusables/Title";
import "./contact.scss";
import { FaLinkedinIn } from "react-icons/fa";
import { GrFacebookOption } from "react-icons/gr";
import { FiInstagram } from "react-icons/fi";
import { SiGmail } from "react-icons/si";

const Contact = () => {
  return (
    <section id="contact" className="py-20 overflow-y-hidden relative">
      <div className="container mx-auto">
        <Title header_title="Contact" color="true" />
        <h1
          className="text-center text-xs md:text-lg lg:text-lg"
          style={{ color: "#04c2c9" }}
        >
          Have a question or want to work together?
        </h1>
        <form
          className="flex flex-col w-4/5 md:w-4/5 lg:w-2/5 mx-auto gap-1 mt-10"
          onClick={(e) => {
            e.preventDefault();
          }}
        >
          <input type="text" name="name" placeholder="Name" className="p-2" />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="p-2"
          />
          <textarea
            name="message"
            rows={10}
            className="resize-none p-2"
            placeholder="Your Message"
          />
          <div className="flex justify-end mt-1">
            <button
              type="submit"
              className="uppercase px-8 py-2 border text-white"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
      <footer className="h-[20%] w-full absolute bottom-0">
        <div className="grid gird-cols-1 mx-auto w-full justify-center items-end h-full">
          <div className="flex gap-4">
            <div className="h-14 text-white bg-secondary w-14 flex justify-center items-center">
              <FaLinkedinIn size={24} />
            </div>
            <div className="h-14 text-white bg-secondary w-14 flex justify-center items-center">
              <GrFacebookOption size={24} />
            </div>
            <div className="h-14 text-white bg-secondary w-14 flex justify-center items-center">
              <FiInstagram size={24} />
            </div>
            <div className="h-14 text-white bg-secondary w-14 flex justify-center items-center">
              <SiGmail size={24} />
            </div>
          </div>
          <div className="mx-auto relative bottom-9">
            <span className="uppercase text-primary font-normal">
              Pratish Joshi
            </span>{" "}
            <span className="text-secondary">© 2023</span>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Contact;

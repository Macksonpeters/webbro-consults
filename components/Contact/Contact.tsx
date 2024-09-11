import { SiLinkedin, SiGmail } from "react-icons/si";

const Contact = () => {
  return (
    <div className="text-gray-300 mt-5 pt-10 lg:mt-10" id="contact">
      <div className="border-b pb-9 border-gray-600">
        <p className="text-gray-300 robotoFlex text-lg  font-semibold tracking-wider lg:text-center lg:text-2xl">
          Get In Touch
        </p>
        <div className="">
          <div className="mt-2">
            <p className="text-base text-gray-400 fontShadow tracking-widest font-bold lg:text-center lg:mt-5 lg:text-lg">
              <a
                href="mailto:webbroconsults@gmail.com"
                className="text-red-700 pe-2"
                target="_blank"
              >
                <SiGmail className="inline text-lg " />{" "}
                <span className="text-gray-400"> webbro-consults</span>
              </a>
            </p>
          </div>
        </div>
      </div>
      <p className="text-center py-2 text-[14px]">
        <span className="">
          Copyright <span className="text-gray-400 font-[600]">©</span>{" "}
          {new Date().getFullYear()}{" "}
          <span className=" tracking-widest fontShadow ">WEBBRO-CONSULTS</span>
        </span>
      </p>
    </div>
  );
};

export default Contact;

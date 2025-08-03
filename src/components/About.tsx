import { CapIcon, WorkIcon } from "../assets/icons";
import ccclogo from "../assets/img/ccclogo.png";
import nextvasLogo from "../assets/img/nextvas-logo.png";

function About() {
  return (
    <div className="mt-30 flex flex-col justify-center" id="about">
      <h3 data-aos="fade-up">About Me</h3>
      <p
        className="mx-7 my-16 text-center font-extralight md:mx-16 md:my-20"
        data-aos="fade-up"
      >
        Driven by passion for continuous learning and innovation, I am dedicated
        to crafting user-centric solutions that make a tangible impact.
      </p>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-4">
        <div
          className="bg-dark-secondary flex flex-col items-center rounded-lg p-6 shadow-lg"
          data-aos="fade-right"
        >
          <CapIcon className="mb-5 h-7 w-7" />
          <div className="mb-10 flex w-full gap-6 max-md:flex-col md:mb-5">
            <img
              src={ccclogo}
              alt="CCC logo"
              className="h-[100px] w-[100px] object-contain duration-500 hover:rotate-y-360 max-md:place-self-center"
            />
            <div className="flex flex-col">
              <span className="mb-2 text-lg">City College of Calamba</span>
              <span className="text-sm font-extralight">
                Bachelor of Science in Computer Science
              </span>
              <span className="text-sm font-extralight">2020 - 2024</span>
            </div>
          </div>
          <p className="font-extralight">
            Developed robust problem-solving abilities through hands-on
            programming, with a specialization in Data Structures and Data
            Science
          </p>
        </div>

        <div
          className="bg-dark-secondary flex flex-col items-center rounded-lg p-6 shadow-lg"
          data-aos="fade-left"
        >
          <WorkIcon className="mb-5 h-6 w-6" />
          <div className="mb-10 flex w-full gap-6 max-md:flex-col md:mb-5">
            <img
              src={nextvasLogo}
              alt="nextvas logo"
              className="h-[80px] w-[200px] object-contain duration-500 hover:rotate-y-360 max-md:place-self-center md:h-[100px] md:w-[120px]"
            />
            <div className="flex flex-col">
              <span className="mb-2 text-lg">NextVas Inc.</span>
              <span className="text-sm font-extralight">
                Customer Service Representative
              </span>
              <span className="text-sm font-extralight">2024 - 2025</span>
            </div>
          </div>
          <p className="font-extralight">
            Honed effective communication and client relationship management
            skills by resolving diverse customer needs, leveraging proficiency
            in CRM systems
          </p>
        </div>
      </div>
      <p
        className="mx-7 my-30 text-center font-extralight md:mx-16"
        data-aos="zoom-out"
      >
        I bridge the gap between user needs and robust code. My unique blend of
        development expertise and customer service insight allows me to identify
        pain points, communicate solutions clearly, and build highly organized,
        user-friendly applications that truly deliver an exceptional experience.
      </p>
    </div>
  );
}

export default About;

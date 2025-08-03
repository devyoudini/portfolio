import profile from "../assets/img/img.png";
import CV from "../assets/cv/Ingua, John Lee CV.pdf";
import { DownloadIcon, HandPointingDownIcon, InfoIcon } from "../assets/icons";
import { useLenis } from "lenis/react";

function Profile() {
  const lenis = useLenis();
  const scrollToSkills = () => {
    lenis?.scrollTo("#about", { offset: -100 });
  };
  return (
    <div className="mt-20 flex flex-col items-center" id="home">
      <h1>John Lee Ingua</h1>
      <span className="mt-3 mb-20 font-extralight">
        Web Developer / Mobile App Developer
      </span>
      <div className="bg-dark-secondary group/profile h-[min(70vw,400px)] w-[min(70vw,400px)] overflow-hidden rounded-full md:h-[400px] md:w-[400px]">
        <img
          src={profile}
          alt="picture of John Lee"
          className="h-full w-full object-cover duration-500 group-hover/profile:translate-x-[-1.5rem] group-hover/profile:translate-y-[3.5rem] group-hover/profile:scale-150 focus:scale-150"
          id="profile"
        />
      </div>
      <div className="mt-15 flex gap-10">
        <a
          href={CV}
          download="John Lee Ingua CV.pdf"
          className="text-accent from-dark-primary to-dark-tertiary group/cv relative flex items-center justify-center rounded-full bg-linear-60 px-4 py-3 drop-shadow-md duration-300 active:opacity-20"
        >
          <span className="duration-500 group-hover/cv:scale-0">
            Download CV
          </span>
          <DownloadIcon className="absolute h-7 w-7 scale-0 duration-500 group-hover/cv:scale-100 group-hover/cv:delay-250" />
        </a>
        <button
          className="text-accent from-dark-primary to-dark-tertiary group relative flex items-center justify-center rounded-full bg-linear-0 px-8 py-3 drop-shadow-md duration-200"
          id="aboutButton"
          onClick={scrollToSkills}
        >
          <span className="duration-500 group-hover:scale-0">About me</span>
          <InfoIcon className="absolute h-7 w-7 scale-0 duration-500 group-hover:scale-100 group-hover:delay-250" />
        </button>
      </div>
      <a className="text-accent mt-10 flex items-center gap-2">
        Explore my work below
        <HandPointingDownIcon className="animate-bounce" />
      </a>
    </div>
  );
}

export default Profile;

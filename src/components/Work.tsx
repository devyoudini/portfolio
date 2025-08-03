import { useRef, useState } from "react";
import { InfoIcon, PlayIcon, RoleIcon, XmarkIcon } from "../assets/icons";
import { FilipinoLingoLogo } from "../assets/logo";
import DemoVideo from "../assets/video/demo.mp4";
import { useLenis } from "lenis/react";

function Work() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const lenis = useLenis();
  const header = document.querySelector("header")!;

  const openModal = () => {
    setIsModalOpen(true);
    if (window.innerWidth > 900) document.body.style.paddingRight = "15px";
    header.style.paddingRight = "15px";
    videoRef.current?.play();
    lenis?.stop();
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.paddingRight = "0";
    header.style.paddingRight = "0";
    videoRef.current?.pause();
    lenis?.start();
  };

  return (
    <div className="mb-30 flex flex-col items-center" id="work">
      <h3 data-aos="zoom-in">My work</h3>
      <div
        className="mt-30 mb-20 flex flex-col items-center justify-center"
        data-aos="zoom-in"
      >
        <FilipinoLingoLogo />
        <span>FilipinoLingo</span>
      </div>

      <div className="mb-20 grid grid-cols-1 justify-center gap-5 text-center font-light md:grid-cols-2 md:gap-x-3 md:gap-y-2">
        <div
          className="flex items-center justify-center"
          data-aos="zoom-in-down"
        >
          <div className="from-dark-tertiary to-dark-primary flex aspect-square items-center justify-center rounded-full bg-radial-[at_25%_25%] p-3 text-[1.2rem] md:order-1">
            <InfoIcon className="h-5 w-5" />
          </div>
        </div>
        <div
          className="from-dark-secondary to-dark-tertiary rounded-2xl bg-gradient-to-tr px-7 py-7 md:order-3"
          data-aos="zoom-in-right"
        >
          <p>
            FilipinoLingo is a robust mobile application tackling the challenge
            of dialectal diversity in the Philippines. It provides precise,
            bidirectional translation between numerous Filipino dialects and
            English, making local communication more accessible
          </p>
        </div>

        <div
          className="flex items-center justify-center"
          data-aos="zoom-in-down"
        >
          <div className="from-dark-tertiary to-dark-primary mt-15 flex aspect-square items-center justify-center rounded-full bg-radial-[at_25%_25%] p-3 text-[1.2rem] md:order-2 md:mt-0">
            <RoleIcon className="h-5 w-5" />
          </div>
        </div>

        <div
          className="from-dark-secondary to-dark-tertiary flex flex-col rounded-2xl bg-gradient-to-tr py-7 text-center md:order-4"
          data-aos="zoom-in-left"
        >
          <span>My Role:</span>
          <span>Lead Programmer</span>
          <span>Front-End</span>
          <span>Back End</span>
          <span>AI Analyst</span>
          <span>LLM Trainer</span>
        </div>
      </div>
      <div data-aos="zoom-in">
        <button
          className="from-dark-primary via-dark-tertiary to-dark-primary flex gap-3 rounded-full bg-linear-30 bg-size-[300%] bg-position-[left_center] p-5 shadow-md duration-200 hover:scale-105 hover:bg-position-[right_center] active:scale-90 active:opacity-50"
          id="openModal"
          onClick={openModal}
        >
          <span>Watch the Demo</span>
          <PlayIcon className="text-accent translate-y-[3px]" />
        </button>
      </div>

      <div
        className={`bg-dark-primary/90 no-scrollbar fixed inset-0 z-50 flex items-center justify-center duration-300 ${isModalOpen ? "visible opacity-100" : "invisible opacity-0"}`}
        id="modal"
        onClick={closeModal}
      >
        <div className="bg-transparent opacity-100">
          <video
            className={`ease-out-back relative aspect-auto max-h-[90vh] rounded-2xl duration-500 ${isModalOpen ? "scale-100" : "scale-0"}`}
            controls
            ref={videoRef}
          >
            <source src={DemoVideo} type="video/mp4" />
          </video>
          <button
            className="bg-dark-secondary hover:bg-dark-tertiary absolute top-3 right-3 flex h-8 w-8 items-center justify-center rounded-full duration-500"
            id="closeModal"
            onClick={closeModal}
          >
            <XmarkIcon />
          </button>
        </div>
      </div>

      <div
        className="mx-3 mt-15 text-center font-light md:mx-20"
        data-aos="zoom-out"
      >
        <p>
          FilipinoLingo is a robust mobile application tackling the challenge of
          dialectal diversity in the Philippines. It provides precise,
          bidirectional translation between numerous Filipino dialects and
          English, making local communication more accessible
        </p>
      </div>
    </div>
  );
}

export default Work;

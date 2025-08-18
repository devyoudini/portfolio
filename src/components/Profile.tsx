import profile from "../assets/img/img.webp";
import CV from "../assets/cv/Ingua, John Lee CV.pdf";
import { DownloadIcon, HandPointingDownIcon, InfoIcon } from "../assets/icons";
import { useLenis } from "lenis/react";
import { useEffect, useState } from "react";
import { motion } from "motion/react";

function Profile() {
  const lenis = useLenis();
  const scrollToSkills = () => {
    lenis?.scrollTo("#about", { offset: -100 });
  };
  return (
    <div className="mt-20 flex flex-col items-center" id="home">
      <motion.h1
        initial={{ y: -100, transition: { duration: 0.5 } }}
        whileInView={{ y: 0 }}
      >
        John Lee Ingua
      </motion.h1>
      <motion.span
        className="mt-3 mb-20 font-extralight"
        whileInView={{ opacity: 1, scale: 1 }}
        initial={{ opacity: 0, scale: 0 }}
        transition={{ duration: 0.5, ease: "backOut" }}
      >
        Web Developer / Mobile App Developer
      </motion.span>
      <ImageLoader src={profile} alt="Picture of John Lee" />
      <motion.div
        initial={{ opacity: 0, scaleY: 2, y: -60, transformOrigin: "bottom" }}
        whileInView={{
          opacity: 1,
          scaleY: 1,
          y: 0,
          transition: { duration: 0.3, ease: "backOut" },
        }}
        className="mt-15 flex gap-5 md:gap-10"
      >
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
          className="text-accent from-dark-primary to-dark-tertiary group relative flex items-center justify-center rounded-full bg-linear-0 px-8 py-3 drop-shadow-md duration-200 active:opacity-30"
          id="aboutButton"
          onClick={scrollToSkills}
        >
          <span className="duration-500 group-hover:scale-0">About me</span>
          <InfoIcon className="absolute h-7 w-7 scale-0 duration-500 group-hover:scale-100 group-hover:delay-250" />
        </button>
      </motion.div>
      <motion.span
        initial={{ opacity: 0, scaleX: 0 }}
        whileInView={{
          opacity: 1,
          scaleX: 1,
          transition: { duration: 0.3, ease: "backOut" },
        }}
        className="text-accent mt-10 flex items-center gap-2"
      >
        Explore my work below
        <HandPointingDownIcon className="animate-bounce" />
      </motion.span>
    </div>
  );
}

function ImageLoader({ src, alt }: { src: string; alt: string }) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [showImage, setShowImage] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = src;

    const handleImageLoad = () => {
      setImageLoaded(true);
    };

    img.addEventListener("load", handleImageLoad);

    return () => {
      img.removeEventListener("load", handleImageLoad);
    };
  }, [src]);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    if (imageLoaded) {
      timeoutId = setTimeout(() => {
        setShowImage(true);
      }, 500);
    }

    return () => clearTimeout(timeoutId);
  }, [imageLoaded]);

  return (
    <motion.div
      initial={{ scale: 0 }}
      whileInView={{
        scale: 1,
        transition: { duration: 0.8, ease: "backOut" },
      }}
      className={`bg-dark-secondary group/profile h-[min(70vw,400px)] w-[min(70vw,400px)] overflow-hidden rounded-full md:h-[400px] md:w-[400px] ${showImage ? "animate-none" : "animate-pulse"}`}
    >
      <motion.img
        src={src}
        alt={alt}
        loading="lazy"
        className={`h-full w-full rounded-full object-cover duration-500 group-hover/profile:translate-x-[-1.5rem] group-hover/profile:translate-y-[3.5rem] group-hover/profile:scale-150 focus:scale-150 ${showImage ? "opacity-100" : "opacity-0"}`}
        id="profile"
      />
    </motion.div>
  );
}

export default Profile;

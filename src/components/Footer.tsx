import { Icon } from "@iconify/react";
import { useLenis } from "lenis/react";

function Footer() {
  const lenis = useLenis();

  return (
    <footer
      className="bg-dark-secondary flex h-[500px] flex-col items-center pt-15"
      data-aos="fade-up"
    >
      <h1>John Lee</h1>
      <ul
        className="text-light mt-20 flex gap-1 text-lg font-light md:gap-2"
        id="nav"
      >
        <li>
          <button
            onClick={() => {
              lenis?.scrollTo("#home", { offset: -200 });
            }}
            aria-label="Go to Home"
          >
            <span>Home</span>
            <Icon icon="fa7-solid:home" className="icon" />
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              lenis?.scrollTo("#about", { offset: -100 });
            }}
            aria-label="Go to About"
          >
            <span>About</span>
            <Icon icon="fa7-solid:circle-info" className="icon" />
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              lenis?.scrollTo("#skills", { offset: -150 });
            }}
            aria-label="Go to Skills"
          >
            <span>Skills</span>
            <Icon icon="fa7-solid:code" className="icon" />
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              lenis?.scrollTo("#work", { offset: -100 });
            }}
            aria-label="Go to Work"
          >
            <span>Work</span>
            <Icon icon="fa7-solid:folder-open" className="icon" />
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              lenis?.scrollTo("#contact", { offset: -200 });
            }}
            aria-label="Go to Contact"
          >
            <span>Contact</span>
            <Icon icon="fa7-solid:comment" className="icon" />
          </button>
        </li>
      </ul>

      <ul
        className="mt-10 flex items-center justify-center gap-2 md:gap-5"
        id="media"
      >
        <li>
          <a
            href="https://facebook.com/youdini31"
            className="before:bg-[#3b5999]"
            target="_blank"
            aria-label="Facebook Link"
          >
            <Icon icon="fa7-brands:facebook-f" />
          </a>
        </li>
        <li>
          <a
            href="https://instagram.com/_youdini"
            className="before:bg-linear-45 before:from-[#f9ce34] before:via-[#ee2a7b] before:to-[#6228d7]"
            target="_blank"
            aria-label="Instagram Link"
          >
            <Icon
              icon="fa7-brands:instagram"
              className="h-6 w-6"
              strokeWidth={4}
            />
          </a>
        </li>
        <li>
          <a
            href="https://linkedin.com/in/youdini"
            className="before:bg-[#0077b5]"
            target="_blank"
            aria-label="LinkedIn Link"
          >
            <Icon icon="fa7-brands:linkedin-in" className="h-5 w-5" />
          </a>
        </li>
        <li>
          <a
            href="mailto:jmingua@ccc.edu.ph"
            className="before:bg-[#dd4b39]"
            target="_blank"
            aria-label="Mail Link"
          >
            <Icon icon="fa7-brands:google-plus-g" className="h-7 w-7" />
          </a>
        </li>
      </ul>

      <span className="text-light mt-20 text-sm font-thin">
        © 2025 YOUDINI. All rights reserved.
      </span>
    </footer>
  );
}

export default Footer;

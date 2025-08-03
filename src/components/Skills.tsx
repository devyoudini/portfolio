import { useLenis } from "lenis/react";
import { GearIcon, MailIcon } from "../assets/icons";
import { Icon } from "@iconify/react/dist/iconify.js";

function Skills() {
  const lenis = useLenis();

  const scrollToSkills = () => {
    lenis?.scrollTo("#skills", { offset: -100 });
  };

  const scrollToContact = () => {
    lenis?.scrollTo("#contact", { offset: -100 });
  };

  return (
    <div
      className="bg-dark-secondary flex flex-col rounded-[3rem] px-6 py-5 md:rounded-[5rem] md:px-15 mb-30"
      data-aos="fade-up"
      id="skills"
    >
      <div className="mb-15 grid grid-cols-3">
        <div className="flex items-center gap-2">
          <button
            className="bg-dark-primary group h-12 w-12 place-items-center rounded-full"
            onClick={scrollToSkills}
          >
            <GearIcon className="h-6 w-6 duration-500 group-hover:rotate-360" />
          </button>
          <span className="text-accent-secondary hidden font-extralight md:block">
            Explore My Skills
          </span>
        </div>
        <div className="bg-dark-primary h-2 w-[30vw] max-w-50 rounded-2xl place-self-center"></div>
        <div className="flex items-center gap-2 transform-3d place-self-end">
          <span className="text-accent-secondary hidden font-extralight md:block">
            Contact Me
          </span>
          <button
            className="bg-dark-primary h-12 w-12 place-items-center rounded-full duration-200 hover:translate-y-[-4px] hover:shadow-[0_4px_4px_rgba(0,0,0,1)]"
            onClick={scrollToContact}
          >
            <MailIcon className="h-5 w-5" />
          </button>
        </div>
      </div>

      <h3>Skills</h3>
      <div className="skillGrid">
        <div data-aos="zoom-in">
          <Icon icon="logos:javascript" />
          <span>JavaScript</span>
        </div>

        <div data-aos="zoom-in">
          <Icon icon="logos:react" />
          <span>React</span>
        </div>

        <div data-aos="zoom-in">
          <Icon icon="logos:python" />

          <span>Python</span>
        </div>

        <div data-aos="zoom-in">
          <Icon icon="logos:php" />

          <span>PHP</span>
        </div>

        <div data-aos="zoom-in">
          <Icon icon="logos:nodejs" />
          <span>Node JS</span>
        </div>

        <div data-aos="zoom-in">
          <Icon icon="devicon:typescript" />
          <span>TypeScript</span>
        </div>

        <div data-aos="zoom-in">
          <Icon icon="devicon:html5" />
          <span>HTML</span>
        </div>

        <div data-aos="zoom-in">
          <Icon icon="devicon:css3" />
          <span>CSS</span>
        </div>
      </div>

      <h3 data-aos="zoom-in">Tools</h3>
      <div id="tools">
        <div data-aos="zoom-in">
          <Icon icon="logos:git-icon" />
          <span>git</span>
        </div>
        <div data-aos="zoom-in">
          <Icon icon="logos:github-icon" />
          <span>GitHub</span>
        </div>
        <div data-aos="zoom-in">
          <Icon icon="devicon:vscode" />
          <span>VS Code</span>
        </div>
        <div data-aos="zoom-in">
          <Icon icon="logos:figma" />
          <span>Figma</span>
        </div>
      </div>
    </div>
  );
}

export default Skills;

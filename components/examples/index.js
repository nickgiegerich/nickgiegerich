import { PageTitle } from "../layout/PageTitle";
import { SocialLinks } from "../layout/SocialLinks";

const works = [
  {
    img: "/examples/tip-calc.png",
    title: "Tip Calculator",
    stack: ["nextjs - react, tailwind"],
    comp: <img className="w-auto" src="/examples/tip-calc.png" />,
    link: "/examples/tip-calculator",
    demo: false,
    code: false,
    demoLink: "#",
    codeLink: "#",
  },
  {
    img: "/examples/tip-calc.png",
    title: "Uber Clone",
    stack: ["react native, redux, google autocomplete api"],
    comp: <img className="h-96" src="/examples/uber-clone.png" />,
    link: "https://github.com/nickgiegerich/uber-clone-build",
    demo: false,
    code: false,
    demoLink: "#",
    codeLink: "#",
  },
  {
    img: "/examples/timer.png",
    title: "Countdown Timer",
    stack: ["nextjs - react, tailwind"],
    comp: <img className="h-96" src="/examples/timer.png" />,
    link: "examples/timer",
    demo: false,
    code: false,
    demoLink: "#",
    codeLink: "#",
  },
];
const title = "Projects 👨‍💻";
const descr =
  "below are some of my projects, if you would like to see more check them out on my GitHub *more coming soon*";

export const ExampleWorks = () => {
  return (
    <div>
      <PageTitle title={title} descr={descr} />
      <SocialLinks/>
      <div className="pt-48">
        {works.map((work, idx) => (
          <div
            key={`work-${idx}`}
            className="w-full bg-darkGrayishCyan rounded-sm shadow-lg my-14"
          >
            <div className=" pl-3 text-2xl sm:text-3xl lg:text-4xl font-thin text-lightGrayCyan border-b">
              {" "}
              {work.title}
            </div>
            {/* <div className=" pl-3 text-xl sm:text-2xl lg:text-3xl text-lightGrayCyan ">
              {" "}
              project descr
            </div> */}
            <div className=" pl-3 text-lg sm:text-xl lg:text-2xl font-light text-lightGrayCyan">
              {" "}
              {work.stack}
            </div>
            <div className="pl-3 text-lg sm:text-xl lg:text-2xl image-scaling text-lightGrayCyan">
              {" "}
              {work.comp}
            </div>
            <div className=" pl-3 text-lg sm:text-xl lg:text-2xl text-lightGrayCyan">
              {" "}
              {work.demo && (
                <a
                  href={work.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  demo
                </a>
              )}
              {work.demo && work.code && <> | </>}
              {work.code && (
                <a
                  href={work.codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  see the code
                </a>
              )}
              <a></a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

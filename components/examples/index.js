import { PageTitle } from "../layout/PageTitle";
import { SocialLinks } from "../layout/SocialLinks";

const works = [
  {
    title: "Space Tourism Website",
    stack: ["react, tailwind css, framer motion"],
    image: <img className="w-auto" src="/examples/space-tourism.png" />,
    demo: true,
    code: true,
    demoLink: "https://space-tourism-website-ebon.vercel.app/",
    codeLink: "https://github.com/nickgiegerich/space-tourism-website",
  },
  {
    title: "Predictive Wine Quality App",
    stack: ["react, django rest framework, scikit-learn, machine learning, tailwind css"],
    image: <img className="w-auto" src="/examples/wine.png" />,
    demo: true,
    code: true,
    demoLink: "https://wine-quality-prediction-app.vercel.app/",
    codeLink: "https://github.com/nickgiegerich/machine-learning-model-wine-quality",
  },
  {
    title: "Tip Calculator",
    stack: ["react, tailwind css"],
    image: <img className="w-auto" src="/examples/tip-calc.png" />,
    demo: true,
    code: true,
    demoLink: "https://tip-calculator-phi-amber.vercel.app/",
    codeLink: "https://github.com/nickgiegerich/tip-calculator",
  },
  {
    title: "Uber Clone",
    stack: ["react native, redux, google autocomplete api"],
    image: <img className="h-96" src="/examples/uber-clone.png" />,
    demo: false,
    code: true,
    demoLink: "#",
    codeLink: "https://github.com/nickgiegerich/uber-clone-build",
  },
  {
    title: "Countdown Timer",
    stack: ["react, tailwind css"],
    image: <img className="h-96" src="/examples/timer.png" />,
    demo: false,
    code: false,
    demoLink: "#",
    codeLink: "#",
  },
];
const title = "Projects 👨‍💻";
const descr =
  "below are some of my projects, if you would like to see more check them out on my GitHub.";

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
            <div className=" pl-3 text-lg sm:text-xl lg:text-2xl font-light text-lightGrayCyan">
              {" "}
              {work.stack}
            </div>
            <div className="pl-3 text-lg sm:text-xl lg:text-2xl image-scaling text-lightGrayCyan">
              {" "}
              {work.image}
            </div>
            <div className=" pl-3 text-lg sm:text-xl lg:text-2xl text-lightGrayCyan">
              {" "}
              {work.demo && (
                <a
                  href={work.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition ease-in-out duration-300 hover:text-desatBlue"
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
                  className="transition ease-in-out duration-300 hover:text-desatBlue"
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

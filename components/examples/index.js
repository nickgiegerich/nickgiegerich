import { PageTitle } from "../layout/PageTitle";
import { SocialLinks } from "../layout/SocialLinks";

const works = [
  {
    title: "Forever Wild Media",
    stack: ["nextjs", "tailwind css", "embla carousel"],
    description:
      "developer and maintainer of this business landing page for an Idaho based media company.",
    image: "/examples/fwm.png",
    demo: true,
    code: true,
    demoLink: "https://forever-wild-media.vercel.app/",
    codeLink: "https://github.com/nickgiegerich/forever-wild-media",
  },
  {
    title: "Predictive Wine Quality App",
    stack: [
      "react",
      "django rest framework",
      "scikit-learn",
      "machine learning",
      "tailwind css",
    ],
    description:
      "machine learning application that makes wine quality predictions based on user inputs.",
    image: "/examples/wine.png",
    demo: true,
    code: true,
    demoLink: "https://wine-quality-prediction-app.vercel.app/",
    codeLink:
      "https://github.com/nickgiegerich/machine-learning-model-wine-quality",
  },
  {
    title: "Tip Calculator",
    stack: ["react", "tailwind css"],
    description: "simple frontend challenge implementation.",
    image: "/examples/tip-calc.png",
    demo: true,
    code: true,
    demoLink: "https://tip-calculator-phi-amber.vercel.app/",
    codeLink: "https://github.com/nickgiegerich/tip-calculator",
  },
];
const title = "Projects 👨‍💻";
const descr =
  "below are a few example projects of mine, more work can be found on my GitHub.";

export const ExampleWorks = () => {
  return (
    <div>
      <PageTitle title={title} descr={descr} />
      <SocialLinks />
      <div className="pt-48">
        <div className="flex flex-col max-w-lg items-center justify-evenly mx-auto">
          {works.map((work, idx) => (
            <div
              key={idx}
              className="bg-darkGrayishCyan rounded-lg shadow-xl transform duration-300 hover:scale-105 flex flex-col mb-10"
            >
              <img
                className="w-auto h-80 transform duration-300 rounded-lg hover:scale-105 object-cover"
                src={work.image}
              />
              <div className=" pl-3 text-2xl sm:text-3xl lg:text-4xl max-w-sm font-semibold text-almostBlackBlue capitalize pt-5">
                <span>{work.title}</span>
              </div>
              <div className=" pl-3 text-2xl sm:text-3xl lg:text-2xl max-w-sm font-light text-almostBlackBlue py-2">
                <span>{work.description}</span>
              </div>
              <div className=" pl-3 text-2xl sm:text-3xl lg:text-2xl font-thin text-lightGrayCyan py-5">
                <a
                  href={work.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition ease-in-out duration-300 hover:text-desatBlue"
                >
                  demo
                </a>
                <a
                  href={work.codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition ease-in-out duration-300 hover:text-desatBlue pl-3"
                >
                  code
                </a>
              </div>
              <div className="border-t-2 border-lightGrayishCyan w-11/12 mx-auto pt-10">
                {work.stack.map((t, idx) => (
                  <span
                    key={idx}
                    className="inline-block bg-darkerSoftRed rounded-full px-3 py-1 text-sm font-light text-lightGrayCyan mr-2 mb-2"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

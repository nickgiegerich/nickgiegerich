import Link from "next/link";

const works = [
  {
    img: "/examples/tip-calc.png",
    title: "Tip Calculator",
    stack: ["nextjs, tailwind"],
    comp: <img className="w-auto" src="/examples/tip-calc.png" />,
    link: "/examples/tip-calculator"
  },
  {
    img: "/examples/tip-calc.png",
    title: "Uber Clone - React Native",
    stack: ["react native, redux, google autocomplete api"],
    comp: <img className="h-96" src="/examples/uber-clone.png" />,
    link: "/examples/timer"
  },
];

export const HomeComponent = () => {
  return (
    <div className="w-screen h-screen bg-white">
      <div className="grid grid-cols-1">
        <div className="text-black text-5xl font-light text-center">
          {" "}
          Example Work
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2">
          {works.map((ex, idx) => (
            <div key={`Ex-${idx}`} className="relative mx-5 p-10">
              <div className="inset-0 z-0">
                <div className="text-black text-4xl text-center bg-clip-text shadow-3xl font-bold">
                  {ex.title}
                </div>
                <div />
              </div>
              <div className="relative bg-darkGrayishCyan rounded-3xl shadow-2xl">
                <div className="flex flex-col items-center space-y-4">
                  <Link href={ex.link}>
                    <button className="image-scaling">{ex.comp}</button>
                  </Link>
                  <div className="text-3xl text-center font-light">
                    built with:
                  </div>
                  <div className="text-center font-semibold p-3">
                    <ul>
                      {ex.stack.map((tech, idx) => (
                        <li key={`Tech-${idx}`}>{tech}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

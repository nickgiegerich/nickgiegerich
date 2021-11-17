import Link from "next/link";
import { useEffect, useState } from "react";

const data = [
  {
    label: "Home",
    to: "/",
  },
  {
    label: "Portfolio",
    to: "/examples",
  },
  {
    label: "About",
    to: "/about",
  },
];

export const Navbar = () => {
  const [activeIdx, setActiveIdx] = useState(false);

  useEffect(() => {
    const path = window.location.pathname;
    if (path === "/") {
      setActiveIdx(0);
    } else if (path === "/examples") {
      setActiveIdx(1);
    } else if (path === "/about") {
      setActiveIdx(2);
    }
  }, []);

  return (
    <div className="fixed w-full z-50 flex justify-between sm:justify-evenly bg-veryDarkCyan py-3 navbar-border shadow-md">
      <div className="justify-center items-center sm:flex hidden text-lightGrayCyan text-xl font-thin">
        Nick Giegerich
      </div>
      <div className="justify-center items-center sm:hidden flex text-lightGrayCyan text-xl font-thin pl-3">
        NG
      </div>
      <nav className="flex pr-3 items-center">
        {data.map(({ label, to }, idx) => (
          <div
            key={`Nav-Item-${idx}`}
            className={`text-lightGrayCyan text-center text-xl z-30 mx-3 ${
              activeIdx === idx
                ? "border-darkerSoftRed border border-b-2 border-l-0 border-t-0 border-r-0"
                : ""
            }`}
          >
            <Link href={to}>
              <button
                className="py-2 rounded-lg transition duration-500 ease-in-out"
                onClick={() => setActiveIdx(idx)}
              >
                {label}
              </button>
            </Link>
              <div className="navbar-border" style={{visibility: "hidden", opacity: "1", transformOrigin: "50% 50% 0px"}}></div>
          </div>
        ))}
      </nav>
    </div>
  );
};

import Link from "next/link";
import { useEffect, useState } from "react";
import { Logo } from "../animatedLogo/Logo";
import { Navigation } from "../navigation/Navigation";

export const Navbar = () => {
  const [activeIdx, setActiveIdx] = useState(false);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const path = window.location.pathname;
    window.onscroll = () => {
      setOffset(window.scrollY);
    };
    if (path === "/") {
      setActiveIdx(0);
    } else if (path === "/projects") {
      setActiveIdx(1);
    }
  }, []);

  return (
    <div
      className={`transition-all transform  ease-in-out duration-300 fixed w-full z-50 flex justify-between sm:justify-evenly bg-veryDarkCyan  navbar-border shadow-md ${
        offset > 85 ? " scale-1" : "py-3"
      }`}
    >
      <div
        className={`transition-all transform  ease-in-out duration-300 ${
          offset > 85 ? "scale-75" : "scale-1"
        }`}
      >
        <Link href="/" scroll={false}>
          <a onClick={() => setActiveIdx(0)}>
            <Logo draw={true} />
          </a>
        </Link>
      </div>
      <div
        className={`transition-all transform ease-in-out duration-300  items-center sm:flex hidden text-lightGrayCyan text-xl font-CalcFont ${
          offset > 85 ? " scale-0" : "scale-1"
        }`}
      >
        Nick Giegerich
      </div>
      <Navigation activeIdx={activeIdx} setActiveIdx={setActiveIdx} />
    </div>
  );
};

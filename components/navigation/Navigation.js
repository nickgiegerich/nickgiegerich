import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimateSharedLayout, motion } from "framer-motion";

const data = [
  {
    label: "Home",
    to: "/",
  },
  {
    label: "Projects",
    to: "/projects",
  },
];

export const Navigation = () => {
  const [activeIdx, setActiveIdx] = useState(false);

  useEffect(() => {
    const path = window.location.pathname;
    if (path === "/") {
      setActiveIdx(0);
    } else if (path === "/projects") {
      setActiveIdx(1);
    }
  }, []);

  return (
    <AnimateSharedLayout>
      <nav className="flex pr-3 items-center">
        {data.map(({ label, to }, idx) => (
          <div
            key={`Nav-Item-${idx}`}
            className="text-lightGrayCyan text-center text-xl z-30 mx-3"
          >
            <Link href={to} scroll={false}>
              <a
                className="flex flex-col relative"
                onClick={() => setActiveIdx(idx)}
              >
                {label}
                {activeIdx === idx && (
                  <motion.div
                    layoutId="navbar-item-underline"
                    className="navbar-item-underline"
                    animate
                  ></motion.div>
                )}
              </a>
            </Link>
          </div>
        ))}
      </nav>
    </AnimateSharedLayout>
  );
};

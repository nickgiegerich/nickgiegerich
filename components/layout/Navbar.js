import Link from "next/link";

const data = [
  {
    label: "Home",
    to: "/",
  },
  {
    label: "Examples",
    to: "/examples",
  },
  {
    label: "About",
    to: "/about",
  },
];

export const Navbar = () => {
  return (
    <div className="grid grid-cols-3 bg-darkGrayishCyan py-3">
      {data.map(({ label, to }, idx) => (
        <div
          key={`Nav-Item-${idx}`}
          className="text-white text-center text-3xl z-30 "
        >
          <Link href={to}>
            <button className="hover:bg-softRed hover:text-almostBlackBlue py-2 px-5 rounded-lg transition duration-1000 ease-in-out">
              {label}
            </button>
          </Link>
        </div>
      ))}
    </div>
  );
};

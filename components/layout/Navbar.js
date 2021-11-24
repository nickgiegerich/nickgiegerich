import Link from "next/link";
import { Logo } from "../animatedLogo/Logo";
import { Navigation } from "../navigation/Navigation";

export const Navbar = () => {
  return (
    <div className="fixed w-full z-50 flex justify-between sm:justify-evenly bg-veryDarkCyan py-3 navbar-border shadow-md">
      <Link href="/" passHref>
        <Logo draw={true} />
      </Link>
      <div className="items-center sm:flex hidden text-lightGrayCyan text-xl font-thin">
        Nick Giegerich
      </div>
      <Navigation />
    </div>
  );
};

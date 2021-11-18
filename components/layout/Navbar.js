import { Navigation } from "../navigation";


export const Navbar = () => {
  return (
    <div className="fixed w-full z-50 flex justify-between sm:justify-evenly bg-veryDarkCyan py-3 navbar-border shadow-md">
      <div className="justify-center items-center sm:flex hidden text-lightGrayCyan text-xl font-thin">
        Nick Giegerich
      </div>
      <div className="justify-center items-center sm:hidden flex text-lightGrayCyan text-xl font-thin pl-3">
        NG
      </div>
      <Navigation/>
    </div>
  );
};

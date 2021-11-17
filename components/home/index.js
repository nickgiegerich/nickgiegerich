// import Particles from "react-particles-js";
// import options from "../../particlesjs-config.json";
// import { Navigation } from "../Navigation";

export const HomeComponent = ({child}) => {
  return (
    <div className="h-screen w-screen bg-homePageBg">
      {/* PARTICLES BG - this is the moving particle background that's interactive, might not use cause it can slow performance */}
      {/* <div className="fixed bg-cover bg-center min-h-full">
        <Particles className="h-screen w-screen" params={options} />
      </div> */}
      {child}
    </div>
  );
};

import Particles from "react-particles-js";
import options from "../../particlesjs-config.json";
import { Navigation } from "../Navigation";

export const BaseComponent = ({child}) => {
  return (
    <body className="h-screen w-screen bg-homePageBg">
      {/* PARTICLES BG */}
      <div className="fixed bg-cover bg-center min-h-full">
        <Particles className="h-screen w-screen" params={options} />
      </div>
      {/* NAVIGATION BAR */}
      <Navigation />
      {child}
    </body>
  );
};

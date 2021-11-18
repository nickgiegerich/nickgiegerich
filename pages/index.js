import Wrapper from "../components/animationWrapper/wrapper";
import { HomeComponent } from "../components/home";

export default function Home() {
  return (
    <>
      <Wrapper children={<HomeComponent />} />
    </>
  );
}

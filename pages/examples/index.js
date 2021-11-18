import Wrapper from "../../components/animationWrapper/wrapper";
import { ExampleWorks } from "../../components/examples";

export default function Exapmples() {
  return (
    <div>
      <Wrapper children={<ExampleWorks />} />
    </div>
  );
}

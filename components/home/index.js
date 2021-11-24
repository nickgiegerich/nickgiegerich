import { data } from "autoprefixer";
import { PageTitle } from "../layout/PageTitle";
import { SocialLinks } from "../layout/SocialLinks";
import items from "./data";
import ResumeSection from "./ResumeSection";

export const HomeComponent = () => {
  const title = "hey! ✌️ my name is Nick";
  const descr =
    "currently living in Colorado working as a remote Application Developer for Central Washington University.";
  return (
    <div>
      <PageTitle title={title} descr={descr} />
      <SocialLinks />
      <div className="mt-56 border-l-2 w-full pl-3 mb-8">
        <ResumeSection title={"01 experience"} items={items.experience} />
      </div>
      <div className="mt-40 border-l-2 w-full pl-3 mb-8">
        <ResumeSection
          title={"02 Programming Languages | Frameworks | Libraries"}
          items={items.languages}
        />
      </div>
      <div className="mt-40 border-l-2 w-full pl-3 mb-8">
        <ResumeSection title={"03 Education"} items={items.education} />
      </div>
      <div className="mt-40 border-l-2 w-full pl-3 mb-8">
        <ResumeSection title={"04 For Fun"} items={items.fun} />
      </div>
    </div>
  );
};

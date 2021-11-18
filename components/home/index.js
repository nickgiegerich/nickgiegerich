import { PageTitle } from "../layout/PageTitle";
import { SocialLinks } from "../layout/SocialLinks";

export const HomeComponent = () => {
  const title = "hey! ✌️ my name is Nick";
  const descr =
    "currently living in Colorado working as a remote Application Developer for Central Washington University.";
  return (
    <div>
      <PageTitle title={title} descr={descr} />
      {/* <div className="flex pt-8">
        <a
          href="https://github.com/nickgiegerich"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="text-4xl mr-2 hover:text-lightGrayishCyan" />
        </a>
        <a
          href="https://www.linkedin.com/in/nick-giegerich-62b369168/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="text-4xl hover:text-lightGrayishCyan" />
        </a>
      </div> */}
      <SocialLinks />
      <div className="mt-56 border-l-2 w-full pl-3 mb-8">
        <div className="text-xl sm:text-2xl lg:text-3xl font-thin font-CalcFont">
          01 Experience
        </div>
        <div className="text-lightGrayCyan pt-6 text-xl sm:text-2xl lg:text-3xl font-thin">
          {" "}
          - IT Application Developer | CWU
        </div>
        <div className="text-lightGrayCyan pt-6 text-xl sm:text-2xl lg:text-3xl font-thin">
          {" "}
          - Software Engineer | Forever Wild Media
        </div>
        <div className="text-lightGrayCyan pt-6 text-xl sm:text-2xl lg:text-3xl font-thin">
          {" "}
          - Web Developer | Boise State University{" "}
        </div>
        <div className="text-lightGrayCyan pt-6 text-xl sm:text-2xl lg:text-3xl font-thin">
          {" "}
          - Machine Learning Intern | Industrial Tech Research Institute, Taiwan
        </div>
      </div>
      <div className="mt-40 border-l-2 w-full pl-3 mb-8">
        <div className="text-xl sm:text-2xl lg:text-3xl font-thin font-CalcFont">
          02 Programming Languages | Frameworks
        </div>
        <div className="flex text-lightGrayCyan pt-6 text-xl sm:text-2xl lg:text-3xl font-thin">
          - Python | Django | Django Rest Framework
        </div>
        <div className="flex text-lightGrayCyan pt-6 text-xl sm:text-2xl lg:text-3xl font-thin">
          - JavaScript | React | NextJs
        </div>
        <div className="flex text-lightGrayCyan pt-6 text-xl sm:text-2xl lg:text-3xl font-thin">
          - Dart | Flutter
        </div>
        <div className="flex text-lightGrayCyan pt-6 text-xl sm:text-2xl lg:text-3xl font-thin">
          - Java | Oracle
        </div>
        <div className="flex text-lightGrayCyan pt-6 text-xl sm:text-2xl lg:text-3xl font-thin">
          - PostgreSQL | SQL
        </div>
        <div className="flex text-lightGrayCyan pt-6 text-lg sm:text-xl lg:text-2xl font-thin">
          I also enjoy working with many different libraries such as tailwind,
          framermotion, postGIS, and mapbox Gl.. the list goes on
        </div>
      </div>
      <div className="mt-40 border-l-2 w-full pl-3 mb-8">
        <div className="text-xl sm:text-2xl lg:text-3xl font-thin font-CalcFont">
          03 Education
        </div>
        <div className="flex text-lightGrayCyan pt-6 text-xl sm:text-2xl lg:text-3xl font-thin">
          - Bachelor of Science in Computer Science
        </div>
        <div className="flex text-lightGrayCyan pt-6 text-xl sm:text-2xl lg:text-3xl font-thin">
          - Minor in Mathematics
        </div>
        <div className="flex text-lightGrayCyan pt-6 text-xl sm:text-2xl lg:text-3xl font-thin">
          - Machine Learning Internship
        </div>
        <div className="flex text-lightGrayCyan pt-6 text-xl sm:text-2xl lg:text-3xl font-thin">
          - 3 years of Undergrad Education in the Geosciences
        </div>
      </div>
      <div className="mt-40 border-l-2 w-full pl-3 mb-8">
        <div className="text-xl sm:text-2xl lg:text-3xl font-thin font-CalcFont">
          04 For Fun
        </div>
        <div className="flex text-lightGrayCyan pt-6 text-xl sm:text-2xl lg:text-3xl font-thin">
          - Backcountry Skiing
        </div>
        <div className="flex text-lightGrayCyan pt-6 text-xl sm:text-2xl lg:text-3xl font-thin">
          - Climbing
        </div>
        <div className="flex text-lightGrayCyan pt-6 text-xl sm:text-2xl lg:text-3xl font-thin">
          - Mountain Biking
        </div>
        <div className="flex text-lightGrayCyan pt-6 text-xl sm:text-2xl lg:text-3xl font-thin">
          - Learning German
        </div>
      </div>
    </div>
  );
};

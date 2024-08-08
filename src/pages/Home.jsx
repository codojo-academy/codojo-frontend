import Content from "../components/codojo-homepage/Content";
import ClassLook from "../components/codojo-homepage/ClassLook";
import GettingStarted from "../components/codojo-homepage/GettingStarted";
import CourseInfo from "../components/codojo-homepage/CourseInfo";
import SetsUpApart from "../components/codojo-homepage/SetsUpApart";
import TrialClassBanner from "../components/codojo-homepage/TrialClassBanner";
import TrySession from "../components/codojo-homepage/TrySession";
import Footer from "../components/codojo-homepage/Footer";

const Home = () => {
  return (
    <>
      <Content />
      <ClassLook />
      <GettingStarted />
      <CourseInfo />
      <SetsUpApart />
      <TrialClassBanner />
      <TrySession />
      <Footer />
    </>
  );
};

export default Home;

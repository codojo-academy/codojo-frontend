import Nav from "../components/codojo-homepage/Nav";
import Content from "../components/codojo-homepage/Content";
import ClassLook from "../components/codojo-homepage/ClassLook";
import GettingStarted from "../components/codojo-homepage/GettingStarted";
import Carousel from "../components/codojo-homepage/Carousel";
import SetsUpApart from "../components/codojo-homepage/SetsUpApart";
import TrialClassBanner from "../components/codojo-homepage/TrialClassBanner";
import TrySession from "../components/codojo-homepage/TrySession";
import Footer from "../components/codojo-homepage/Footer";
// import CourseOverview from "../components/codojo-homepage/CourseOverview";

const Home = () => {
  return (
    <>
      <Nav />
      <Content />
      <ClassLook />
      <GettingStarted />
      <Carousel />
      <SetsUpApart />
      <TrialClassBanner />
      <TrySession />
      <Footer />
      {/* <CourseOverview /> */}
    </>
  );
};

export default Home;

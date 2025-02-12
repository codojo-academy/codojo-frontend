import { useEffect } from "react";
import Nav from "../components/codojo-homepage/Nav";
import CourseInfo from "../components/coursepage/CourseInfo";
import DemoLink from "../components/coursepage/DemoLink";
const CoursePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Nav />
      <DemoLink />
      <CourseInfo />
    </>
  );
};

export default CoursePage;

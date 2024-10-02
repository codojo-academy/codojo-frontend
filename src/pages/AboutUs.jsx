/* eslint-disable react/no-unescaped-entities */
import Footer from "../components/codojo-homepage/Footer";
import Nav from "../components/codojo-homepage/Nav";
const AboutUs = () => {
  return (
    <>
      <Nav />
      <div className="bg-gray-100 py-10 lg:py-20 sm:mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-center mb-6 text-[#E91E63]">
            About Us
          </h1>
          <p className="text-lg text-gray-700 text-center mb-10">
            Welcome to Codojo, where we empower young minds to explore the world
            of coding! Our mission is to make coding accessible, fun, and
            engaging for students from all backgrounds.
          </p>

          <div className="text-center">
            <div className="bg-white p-6 rounded-lg shadow-lg pt-10">
              <h2 className="text-2xl font-semibold text-[#673AB7] mb-4">
                Our Mission
              </h2>
              <p className="text-gray-700">
                We believe coding is the language of the future. Our aim is to
                provide a platform where students can learn coding in a fun and
                interactive way, preparing them for future success in the
                tech-driven world.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <h2 className="text-2xl font-semibold text-[#673AB7] mb-4">
                Why Choose Us?
              </h2>
              <ul className="text-gray-700 ">
                <li>Interactive coding lessons with live support</li>
                <li>Friendly and experienced instructors</li>
                <li>Hands-on projects to boost creativity</li>
                <li>Learning paths for all skill levels</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold text-[#673AB7] mb-4">
                Our Values
              </h2>
              <p className="text-gray-700">
                At Codojo, we emphasize curiosity, collaboration, and
                perseverance. Our values are reflected in everything we do, from
                the way we teach to the supportive community we foster.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg pb-20">
              <h2 className="text-2xl font-semibold text-[#673AB7] mb-4">
                Our Team
              </h2>
              <p className="text-gray-700">
                Our team consists of passionate educators, developers, and
                mentors who are dedicated to helping students achieve their
                potential. With years of experience in coding education, we're
                here to guide every student on their learning journey.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutUs;

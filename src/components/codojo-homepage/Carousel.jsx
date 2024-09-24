import { useState } from "react";
import downloadImage from "../images/download.png";
import oneOneon from "../images/oneonone.jpg";
import webDev from "../images/WD.jpeg";
import scratch from "../images/scratch.png";

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const courses = [
    {
      title: "Web Development",
      description:
        "Build full stack advanced, interactive and functional websites",
      image: webDev,
      features: [
        "HTML and CSS",
        "Basic and advanced Javascript",
        "ReactJS",
        "Backend development",
        "Database management",
      ],
    },
    {
      title: "Scratch Coding",
      description:
        "Create interactive animations and complex games using MIT Scratch",
      image: scratch,
      features: [
        "Intro to block based coding",
        "Logic and control flows",
        "Multi level game design",
        "Game physics",
        "Advanced platformer games",
      ],
    },
    {
      title: "DSA",
      description: "Learn about fundamental Data Structures and Algorithms",
      image: downloadImage,
      features: [
        "Understanding Algorithms",
        "Multi-Level Problem Solving",
        "Problem-solving Techniques",
        "Real-life Applications of DSA",
        "Dynamic Programming",
      ],
    },
    {
      title: "App Development",
      description:
        "Build responsive and interactive industry-grade iOS & Android apps",
      image: oneOneon,
      features: [
        "App layouts & core components",
        "Responsive design",
        "App deployment",
        "Navigation & state management",
        "Network request & data mgmt",
      ],
    },
    {
      title: "Course 5",
      description: "Description for Course 5",
      image: downloadImage,
      features: ["HTML", "CSS", "JavaScript"],
    },
    // {
    //   title: "Course 6",
    //   description: "Description for Course 6",
    //   image: oneOneon,
    // },
  ];

  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? Math.ceil(courses.length / 3) - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === Math.ceil(courses.length / 3) - 1 ? 0 : prevIndex + 1
    );
  };

  const handleDotClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <>
      <h1 className="text-3xl font-bold text-center mb-6 text-[#673AB7] mt-10">
        Online courses for kids for all age groups!
      </h1>
      <p className="text-center text-gray-600 mb-10 font-medium">
        Well researched and highly effective curriculum
      </p>
      <div id="indicators-carousel" className="relative w-full">
        <div className="relative overflow-hidden rounded-lg h-full">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {Array.from({ length: Math.ceil(courses.length / 3) }).map(
              (_, slideIndex) => (
                <div key={slideIndex} className="flex-none w-full flex p-4">
                  {courses
                    .slice(slideIndex * 3, slideIndex * 3 + 3)
                    .map((course, index) => (
                      <div key={index} className="w-1/3 p-4">
                        <div className="border p-4 rounded-lg shadow-lg bg-[#F0F3FF]">
                          <img
                            src={course.image}
                            className="w-full h-48 object-cover rounded-md mb-4"
                            alt={`Course ${index}`}
                          />
                          <h3 className="text-lg font-bold mb-2 text-[#673AB7]">
                            {course.title}
                          </h3>
                          <p className="text-gray-700 font-semibold">
                            {course.description}
                          </p>
                          <ul className="list-disc pl-5 p-1">
                            {course.features.map((feature, idx) => (
                              <li key={idx} className="text-gray-600">
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    ))}
                </div>
              )
            )}
          </div>
        </div>

        <div className="absolute z-30 flex -translate-x-1/2 space-x-3 rtl:space-x-reverse bottom-5 left-1/2">
          {Array.from({ length: Math.ceil(courses.length / 3) }).map(
            (_, index) => (
              <button
                key={index}
                type="button"
                className={`w-3 h-3 rounded-full ${
                  index === activeIndex ? "bg-gray-800" : "bg-gray-400"
                }`}
                aria-current={index === activeIndex}
                aria-label={`Slide ${index + 1}`}
                onClick={() => handleDotClick(index)}
                data-carousel-slide-to={index}
              ></button>
            )
          )}
        </div>

        <button
          type="button"
          className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-prev
          onClick={handlePrev}
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white">
            <svg
              className="w-4 h-4 text-black"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 1 1 5l4 4"
              />
            </svg>
            <span className="sr-only">Previous</span>
          </span>
        </button>
        <button
          type="button"
          className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-next
          onClick={handleNext}
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white">
            <svg
              className="w-4 h-4 text-black"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
            <span className="sr-only">Next</span>
          </span>
        </button>
      </div>
    </>
  );
};

export default Carousel;

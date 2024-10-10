import { useState, useEffect } from "react";
import appDev from "../images/appdev.jpeg";
import webDev from "../images/WD.jpeg";
import scratch from "../images/scratch.png";
import DSA from "../images/DSA.png";
import graphic from "../images/graphic.jpeg";

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [itemsPerSlide, setItemsPerSlide] = useState(3); // Default for large screens

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
      image: DSA,
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
      image: appDev,
      features: [
        "App layouts & core components",
        "Responsive design",
        "App deployment",
        "Navigation & state management",
        "Network request & data mgmt",
      ],
    },
    {
      title: "Graphic Design",
      description:
        "Explore creative tools and techniques to design visually appealing projects.",
      image: graphic,
      features: [
        "Basic design principles",
        "Understanding colors and typography",
        "Working with design software",
        "Creating posters and presentations",
        "Visual storytelling",
      ],
    },
  ];

  // Adjust items per slide based on screen size
  useEffect(() => {
    const updateItemsPerSlide = () => {
      if (window.innerWidth < 640) {
        setItemsPerSlide(1); // Small screen: show 1 item
      } else {
        setItemsPerSlide(3); // Larger screens: show 3 items
      }
    };

    updateItemsPerSlide(); // Set on initial render
    window.addEventListener("resize", updateItemsPerSlide); // Listen to window resize

    return () => window.removeEventListener("resize", updateItemsPerSlide); // Cleanup listener
  }, []);

  const totalSlides = Math.ceil(courses.length / itemsPerSlide);

  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? totalSlides - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === totalSlides - 1 ? 0 : prevIndex + 1
    );
  };

  const handleDotClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <>
      <h1 className="text-2xl sm:text-3xl font-bold text-center mb-6 text-[#673AB7] mt-10 ">
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
            {Array.from({ length: totalSlides }).map((_, slideIndex) => (
              <div
                key={slideIndex}
                className="flex-none w-full flex flex-wrap sm:flex-nowrap p-4"
              >
                {courses
                  .slice(
                    slideIndex * itemsPerSlide,
                    slideIndex * itemsPerSlide + itemsPerSlide
                  )
                  .map((course, index) => (
                    <div
                      key={index}
                      className="w-full sm:w-1/3 p-4 flex-shrink-0"
                    >
                      <div className="border p-4 rounded-lg shadow-lg bg-[#F0F3FF]">
                        <img
                          src={course.image}
                          className="w-full h-48 sm:h-56 object-cover rounded-md mb-4"
                          alt={`Course ${index}`}
                        />
                        <h3 className="text-md sm:text-lg font-bold mb-2 text-[#673AB7]">
                          {course.title}
                        </h3>
                        <p className="text-gray-700 font-semibold text-md">
                          {course.description}
                        </p>
                        <ul className="p-1">
                          {course.features.map((feature, idx) => (
                            <li key={idx} className="text-gray-600 text-md">
                              <span className="text-[#673AB7] font-bold mr-2">
                                ✓
                              </span>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
              </div>
            ))}
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="absolute z-30 flex -translate-x-1/2 space-x-3 rtl:space-x-reverse bottom-5 left-1/2">
          {Array.from({ length: totalSlides }).map((_, index) => (
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
          ))}
        </div>

        {/* Navigation buttons */}
        <button
          type="button"
          className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-prev
          onClick={handlePrev}
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-black/30 group-hover:bg-black/50 group-focus:ring-4 group-focus:ring-[#673AB7]">
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
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-black/30 group-hover:bg-black/50 group-focus:ring-4 group-focus:ring-[#673AB7]">
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

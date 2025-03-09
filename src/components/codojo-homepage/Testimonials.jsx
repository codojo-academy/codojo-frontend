import { useState, useEffect } from "react";
import webDev from "../images/WD.jpeg";

const studentTestimonials = [
  {
    image: webDev,
    text: "My mentor makes difficult topics easy to understand and his way of teaching is unique.",
    name: "Nivriti Senthilnathan",
    country: "India",
  },
  {
    image: "https://via.placeholder.com/150",
    text: "I’ve been delighted by looking at the progress my daughter has made and the sincerity shown by Codeyoung and its mentors.",
    name: "Deepanjan",
    country: "USA",
  },
  {
    image: "https://via.placeholder.com/150",
    text: "The parents should take a trial class, take a decision and definitely join — I think the kids will definitely benefit from it!",
    name: "Rada",
    country: "UK",
  },
  {
    image: "https://via.placeholder.com/150",
    text: "Another great testimonial about the program and its mentors.",
    name: "John Doe",
    country: "Canada",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerSlide, setItemsPerSlide] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      setItemsPerSlide(window.innerWidth >= 1024 ? 2 : 1); // Show 2 items on laptop
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalItems = studentTestimonials.length;

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalItems) % totalItems);
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalItems);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 2000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="relative w-full max-w-4xl mx-auto p-4 overflow-hidden">
        <div
          className="flex transition-transform ease-in-out duration-500 gap-2"
          style={{
            transform: `translateX(-${currentIndex * (100 / itemsPerSlide)}%)`,
          }}
        >
          {[...studentTestimonials, studentTestimonials[0]].map(
            (testimonial, index) => (
              <div
                key={index}
                className="w-full md:w-1/2 p-12 flex-shrink-0 flex flex-col items-center rounded-2xl shadow-md bg-gray-100"
              >
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-32 h-32 rounded-full mb-4"
                />
                <p className="text-center text-lg mb-2">{testimonial.text}</p>
                <p className="font-bold">{testimonial.name}</p>
                <p className="text-sm text-gray-500">{testimonial.country}</p>
              </div>
            )
          )}
        </div>
        <button
          type="button"
          className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-prev
          onClick={prevSlide}
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
          onClick={nextSlide}
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
    </div>
  );
};

export default Testimonials;

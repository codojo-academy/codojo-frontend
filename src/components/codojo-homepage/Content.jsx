// import { useNavigate } from "react-router-dom";
import useBookADemo from "../hooks/useBookADemo";
import downloadImage from "../images/content.png";
import { GoHome } from "react-icons/go";
import { LuUser2 } from "react-icons/lu";
import { BsStars } from "react-icons/bs";
import { RiCalendarScheduleLine } from "react-icons/ri";

const Content = () => {
  const { bookADemoPage } = useBookADemo();
  //   const navigate = useNavigate();
  //
  //   const bookADemoPage = () => {
  //     navigate("/book-a-demo");
  //   };

  return (
    <div className="flex flex-col md:flex-row md:justify-around gap-6 py-20 lg:py-20 sm:py-10 items-center bg-gray-100">
      {/* Text Section */}
      <div className="p-6 md:p-6 lg:pl-20 lg:p-0 w-full md:w-1/2 space-y-6 lg:mr-[-100px]">
        <h1 className="text-[#673AB7] text-3xl sm:text-4xl lg:text-4xl font-semibold leading-tight">
          <span className="text-[#E91E63]">Creating the Tech</span> <br />
          Leaders of Tomorrow
        </h1>
        <h3 className="text-[#E91E63] text-lg sm:text-xl lg:text-xl">
          Live online 1:1 interactive classes for kids aged 5-17
        </h3>
        <ul className="space-y-2">
          <li className="flex items-center gap-2 text-base sm:text-lg lg:text-xl">
            <GoHome className="text-xl sm:text-2xl lg:text-3xl text-[#E91E63]" />
            Learn comfortably from home
          </li>
          <li className="flex items-center gap-2 text-base sm:text-lg lg:text-xl">
            <LuUser2 className="text-xl sm:text-2xl lg:text-3xl text-[#E91E63]" />
            Guided by a dedicated expert mentor
          </li>
          <li className="flex items-center gap-2 text-base sm:text-lg lg:text-xl">
            <BsStars className="text-xl sm:text-2xl lg:text-3xl text-[#E91E63]" />
            AI-powered personalized learning experience
          </li>
          <li className="flex items-center gap-2 text-base sm:text-lg lg:text-xl">
            <RiCalendarScheduleLine className="text-xl sm:text-2xl lg:text-3xl text-[#E91E63]" />
            Flexible class scheduling from any location
          </li>
        </ul>
        <button
          className="bg-[#673AB7] hover:bg-[#E91E63] text-white font-bold py-2 px-4 rounded shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
          onClick={bookADemoPage}
        >
          Book a Free Demo
        </button>
      </div>

      {/* Image Section */}
      <div className="flex justify-center items-center w-full md:w-3/5 lg:pr-12">
        <img
          src={downloadImage}
          alt="Interactive class"
          className="rounded-lg shadow-lg w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg"
        />
      </div>
    </div>
  );
};

export default Content;

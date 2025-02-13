import { IoShieldCheckmarkSharp } from "react-icons/io5";
import { PiUsersThreeFill } from "react-icons/pi";
import { AiFillThunderbolt } from "react-icons/ai";
import { PiDiscDuotone } from "react-icons/pi";
import { RiSimCardFill } from "react-icons/ri";
import { PiBooksDuotone } from "react-icons/pi";

const SetsUpApart = () => {
  return (
    <div className="p-8 bg-gray-100 mt-8 rounded-lg py-10 lg:py-20">
      <h1 className="text-4xl font-bold mb-8 text-center text-[#673AB7]">
        What really sets us apart
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex  items-center p-4 bg-white shadow-lg rounded-lg max-w-md mx-auto">
          <PiBooksDuotone className="text-pink-500 text-4xl mr-4" />

          <div>
            <h4 className="text-xl font-semibold text-[#673AB7]">
              Quality of curriculum
            </h4>
            <p>
              Personalized curriculum focused on mastery through depth and
              practice
            </p>
          </div>
        </div>
        <div className="flex items-center p-4 bg-white shadow-lg rounded-lg max-w-md mx-auto">
          <IoShieldCheckmarkSharp className="text-pink-500 text-4xl mr-4" />
          <div>
            <h4 className="text-xl font-semibold text-[#673AB7]">
              Quality of teachers
            </h4>
            <p>
              Highly passionate and qualified teachers with relevant background
            </p>
          </div>
        </div>
        <div className="flex items-center p-4 bg-white shadow-lg rounded-lg max-w-md mx-auto">
          <AiFillThunderbolt className="text-pink-500 text-4xl mr-4" />
          <div>
            <h4 className="text-xl font-semibold text-[#673AB7]">
              Adaptive AI based learning
            </h4>
            <p>
              Learning journey aided by AI ensuring better learning outcomes
            </p>
          </div>
        </div>
        <div className="flex items-center p-4 bg-white shadow-lg rounded-lg max-w-md mx-auto">
          <RiSimCardFill className="text-pink-500 text-4xl mr-4" />

          <div>
            <h4 className="text-xl font-semibold text-[#673AB7]">
              Hands-on learning
            </h4>
            <p>
              Rigorous hands-on practice enabled through 1k+ of exercises &
              worksheets
            </p>
          </div>
        </div>
        <div className="flex items-center p-4 bg-white shadow-lg rounded-lg max-w-md mx-auto">
          <PiDiscDuotone className="text-pink-500 text-4xl mr-4" />
          <div>
            <h4 className="text-xl font-semibold text-[#673AB7]">
              Progress monitoring
            </h4>
            <p>
              Highly detailed personalized progress report and class engagement
            </p>
          </div>
        </div>
        <div className="flex items-center p-4 bg-white shadow-lg rounded-lg max-w-md mx-auto">
          <PiUsersThreeFill className="text-pink-500 text-4xl mr-4" />
          <div>
            <h4 className="text-xl font-semibold text-[#673AB7]">
              In-class & outside class engagement
            </h4>
            <p>
              Student centric fun environment - community events, webinars &
              more
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SetsUpApart;

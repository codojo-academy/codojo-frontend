import { useNavigate } from "react-router-dom";

import { IoMailOutline } from "react-icons/io5";
import { GrPhone } from "react-icons/gr";
import { LuCalendarClock } from "react-icons/lu";

const TrySession = () => {
  const navigate = useNavigate();

  const bookADemoPage = () => {
    navigate("/book-a-demo");
  };
  return (
    <>
      {/* bg-[#9a71e3] */}
      {/* bg-[#FDECF2] */}
      <div className="bg-gray-100 p-20">
        <h1 className="text-3xl text-[#673AB7] font-bold text-center mb-10">
          Want to try a session before starting?
        </h1>
        <button
          className="bg-[#d43a6e] hover:bg-[#E91E63] block mx-auto text-center text-white font-bold py-2 px-4 rounded shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
          onClick={bookADemoPage}
        >
          Book a Free Demo
        </button>
      </div>
      {/* <div className="space-y-4 flex bg-[#eadff5]"> */}
      {/* bg-[#eadff5] */}
      <div className="grid grid-cols-1 md:grid-cols-3 p-2 py-4 bg-gray-200">
        <div className="flex items-center space-x-4">
          <IoMailOutline className="text-[#673AB7] text-4xl rounded-full bg-[#d8bfd8] p-1" />
          <div className="">
            <p className="font-bold">Email us at</p>
            <a
              href="mailto:codojo05@gmail.com"
              className="hover:text-[#673AB7]"
            >
              codojo05@gmail.com
            </a>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <GrPhone className="text-[#673AB7] text-4xl rounded-full bg-[#d8bfd8] p-1" />
          <div>
            <p className="font-bold">Call us at</p>
            <a href="" className="hover:text-[#673AB7]">
              1234
            </a>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <LuCalendarClock className="text-[#673AB7] text-4xl rounded-full bg-[#d8bfd8] p-1" />
          <div>
            <p className="font-bold">Book a free trial</p>
            <a href="/book-a-demo" className="hover:text-[#673AB7]">
              Click here
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default TrySession;

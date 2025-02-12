// import useBookADemo from "../hooks/useBookADemo";
// import { IoMailOutline } from "react-icons/io5";
// import { GrPhone } from "react-icons/gr";
// import { LuCalendarClock } from "react-icons/lu";

const TrySession = () => {
  // const { bookADemoPage } = useBookADemo();
  return (
    <>
      {/* bg-[#9a71e3] */}
      {/* bg-[#FDECF2] */}
      {/* <div className="bg-gray-100 p-10 sm:p-20">
        <h1 className="text-3xl text-[#673AB7] font-bold text-center mb-10">
          Want to try a session before starting?
        </h1>
        <button
          className="bg-[#d43a6e] hover:bg-[#E91E63] block mx-auto text-center text-white font-bold py-2 px-4 rounded shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
          onClick={bookADemoPage}
        >
          Book a Free Demo
        </button>
      </div> */}
      {/* <div className="space-y-4 flex bg-[#eadff5]"> */}
      {/* bg-[#eadff5] */}
      <div className="grid grid-cols-1 md:grid-cols-2  p-4 py-4 bg-gray-200 md:justify-items-center lg:justify-items-center">
        <div className="flex items-center md:items-center lg:items-center sm:items-start sm:justify-start sm:text-left space-x-4">
          {/* <IoMailOutline className="text-[#673AB7] text-4xl rounded-full bg-[#d8bfd8] p-1" />
          <div>
            <p className="font-bold">Email us at</p>
            <a href="mailto:info@codojo.in" className="hover:text-[#673AB7]">
              info@codojo.in
            </a>
          </div> */}
        </div>
        {/* <div className="flex items-center  md:items-center lg:items-center  sm:items-start sm:justify-start  space-x-4">
          <GrPhone className="text-[#673AB7] text-4xl rounded-full bg-[#d8bfd8] p-1" />
          <div>
            <p className="font-bold">WhatsApp us at</p>
            <a href="" className="hover:text-[#673AB7]">
              
            </a>
          </div>
        </div> */}
        <div className="flex items-center  md:items-center lg:items-center sm:items-start sm:justify-start space-x-4">
          {/* <LuCalendarClock className="text-[#673AB7] text-4xl rounded-full bg-[#d8bfd8] p-1" />
          <div>
            <p className="font-bold">Book a free demo class</p>
            <a href="/book-a-demo" className="hover:text-[#673AB7]">
              Click here
            </a>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default TrySession;

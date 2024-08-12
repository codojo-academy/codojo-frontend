import { GoHome } from "react-icons/go";

const TrySession = () => {
  return (
    <>
      <div className="bg-[#673AB7] p-12">
        <h1 className="text-3xl text-white text-center mb-10">
          Want to try a session before starting?
        </h1>
        <button className="bg-[#d43a6e] hover:bg-[#E91E63] block mx-auto text-center text-white font-bold py-2 px-4 rounded shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
          Book a Free Demo
        </button>
      </div>
      {/* <div className="space-y-4 flex bg-[#eadff5]"> */}

      <div className="grid grid-cols-1 md:grid-cols-3 p-2 py-4 bg-[#eadff5]">
        <div className="flex items-center space-x-4">
          <GoHome className="text-pink-500 text-2xl" />
          <div className="">
            <p>Email us at</p>
            <a href="" className="text-blue-500">
              example@gmail.com
            </a>
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <GoHome className="text-pink-500 text-2xl" />
          <div>
            <p>Call us at</p>
            <a href="" className="text-blue-500">
              example@gmail.com
            </a>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <GoHome className="text-pink-500 text-2xl" />
          <div>
            <p>Book a free trail</p>
            <a href="" className="text-blue-500">
              Click here
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default TrySession;

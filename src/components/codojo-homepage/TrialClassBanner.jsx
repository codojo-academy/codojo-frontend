import useBookADemo from "../hooks/useBookADemo";

import downloadImage from "../images/tryaclass.jpeg";

const TrialClassBanner = () => {
  const { bookADemoPage } = useBookADemo();

  return (
    <div className="bg-gray-100 py-10 px-6 lg:px-20">
      <h1 className="text-4xl text-[#673AB7] font-bold text-center mb-10">
        Want to check out how the classes are conducted?
      </h1>
      <div className="flex flex-col lg:flex-row gap-8 items-center bg-white rounded-lg shadow-lg overflow-hidden">
        <img
          src={downloadImage}
          alt="Class Preview"
          className="w-full lg:w-1/2 h-96 object-cover rounded"
        />
        <div className="p-6 lg:p-10 w-full lg:w-[42%] text-center lg:text-left bg-[#FDECF2]  rounded">
          <h4 className="text-2xl font-semibold mb-4 text-[#673AB7]">
            Try a class for free
          </h4>
          <p className="text-gray-600 mb-6">
            Equip your kids with education for tomorrow. Book a free demo coding
            class now!
          </p>
          <button
            className="bg-[#673AB7] hover:bg-[#E91E63] text-white font-bold py-3 px-6 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
            onClick={bookADemoPage}
          >
            Book a Free Demo
          </button>
        </div>
      </div>
    </div>
  );
};

export default TrialClassBanner;

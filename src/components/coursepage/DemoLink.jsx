import tryaclass from "../images/student_bg_F3F4F6.jpeg";
import useBookADemo from "../hooks/useBookADemo";

const DemoLink = () => {
  const { bookADemoPage } = useBookADemo();
  return (
    <>
      <div className="flex flex-col lg:flex-row md:flex-row justify-evenly items-start bg-gray-100 font-sans p-24 sm:p-20 lg:py-20 sm:mt-20">
        {/* Text Content Section */}
        <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
          <h1 className="text-4xl font-bold text-[#673AB7] mb-4">
            Live online Coding classes for kids
          </h1>
          <p className="text-xl text-gray-600 mb-4">
            Recommended for grades KG to 12
          </p>
          <ul className="text-lg text-gray-700 mb-6">
            <li className="mb-2">✔️ Foster algorithmic thinking skills</li>
            <li className="mb-2">✔️ Unlock your creativity & be a creator</li>
            <li className="mb-2">
              ✔️ Address real-world challenges with coding
            </li>
          </ul>
          <button
            // className="bg-yellow-400 text-[#943000] hover:bg-yellow-500 transition-all py-3 px-6 rounded-lg font-semibold"
            className="bg-[#673AB7] hover:bg-[#E91E63] text-white font-bold py-2 px-4 rounded shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
            onClick={bookADemoPage}
          >
            Book a FREE demo class ➔
          </button>
          {/* <div className="mt-6">
            <img src={downloadImage} alt="STEM Accredited" className="w-24" />
          </div> */}
        </div>

        {/* Image Section */}
        <div className="w-full lg:w-1/2 md:w-1/2 flex items-center justify-center">
          <img
            src={tryaclass}
            alt="Kid Learning Coding"
            className="w-3/5 h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </>
  );
};

export default DemoLink;

// import downloadImage from "../assets/download.png";
//
// const TrialClassBanner = () => {
//   return (
//     <div>
//       <h1>Want to checkout how the classes are conducted?</h1>
//       <div>
//         <img src={downloadImage} />
//         <div>
//           <h4>Try a class for free</h4>
//           <p>
//             Equip your kids with education for tomorrow. Book a free trial
//             coding class now!
//           </p>
//           <button className="bg-[#673AB7] hover:bg-[#E91E63] text-white font-bold py-2 px-4 rounded shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
//             Book a Free Demo
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };
//
// export default TrialClassBanner;

import downloadImage from "../assets/download.png";

const TrialClassBanner = () => {
  return (
    <div className="bg-gray-100 py-10 px-6 lg:px-20">
      <h1 className="text-4xl text-[#673AB7] font-bold text-center mb-10">
        Want to check out how the classes are conducted?
      </h1>
      <div className="flex flex-col lg:flex-row items-center bg-white rounded-lg shadow-lg overflow-hidden">
        <img
          src={downloadImage}
          alt="Class Preview"
          className="w-full lg:w-1/2 h-64 lg:h-auto object-cover"
        />
        <div className="p-6 lg:p-10 w-full lg:w-1/2 text-center lg:text-left">
          <h4 className="text-2xl font-semibold text-gray-800 mb-4">
            Try a class for free
          </h4>
          <p className="text-gray-600 mb-6">
            Equip your kids with education for tomorrow. Book a free trial
            coding class now!
          </p>
          <button className="bg-[#673AB7] hover:bg-[#E91E63] text-white font-bold py-3 px-6 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
            Book a Free Demo
          </button>
        </div>
      </div>
    </div>
  );
};

export default TrialClassBanner;

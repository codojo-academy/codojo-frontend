// import { Link } from "react-router-dom";

const ClassJoin = () => {
  const studentName = "John Doe"; // You can replace this with dynamic data
  const classNumber = "101"; // Replace with dynamic data
  const zoomLink = "https://meet.google.com/asn-ciqx-ifo";
  return (
    <>
      <div className="border border-gray-300 rounded-lg p-6 text-center max-w-xs mx-auto">
        <h2 className="text-2xl font-semibold mb-4">
          Class Number: {classNumber}
        </h2>
        <p className="text-xl mb-4">Student Name: {studentName}</p>
        <a
          href={zoomLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-2 text-white bg-blue-500 hover:bg-blue-600 rounded-full"
        >
          Join Now
        </a>
      </div>
    </>
  );
};

export default ClassJoin;

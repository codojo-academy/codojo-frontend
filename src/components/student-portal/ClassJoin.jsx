const ClassJoin = () => {
  const studentName = "John Doe"; // You can replace this with dynamic data
  const classNumber = "1"; // Replace with dynamic data
  const zoomLink = "https://meet.google.com/asn-ciqx-ifo";

  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="border border-gray-300 rounded-lg p-6 text-center max-w-xs px-12 bg-[#FDECF2]">
          <p className="text-xl text-gray-800 mb-4">
            Student Name: {studentName}
          </p>
          <h2 className="text-xl  mb-4 text-gray-800">
            Class Number: {classNumber}
          </h2>
          <a
            href={zoomLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-2 bg-[#673AB7] hover:bg-[#E91E63]  text-white rounded-full"
          >
            Join Now
          </a>
        </div>
      </div>
    </>
  );
};

export default ClassJoin;

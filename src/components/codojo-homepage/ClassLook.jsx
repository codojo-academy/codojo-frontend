import oneOnone from "../images/oneonone.jpg";

const ClassLook = () => {
  return (
    <div className=" flex flex-col justify-center items-center p-6 lg:py-20 ">
      <h1 className="text-3xl font-bold text-center mb-8 text-pink-500">
        What does a typical class look like?
      </h1>
      <div className="flex flex-col md:flex-row gap-10 w-full max-w-6xl">
        <div className="p-4 md:w-1/3 flex flex-col justify-center">
          <div className="rounded-lg shadow-lg  bg-gray-100 p-3">
            <h3 className="text-lg font-semibold mb-2 text-[#673AB7] ">
              Engaging and enjoyable
            </h3>
            <p className="mb-4 ">
              Each class is packed with quizzes, games, activities, and
              challenges to keep kids actively involved.
            </p>
          </div>
          <div className="rounded-lg shadow-lg bg-gray-100 p-3 mt-4">
            <h3 className="text-lg font-semibold mb-2 text-[#673AB7] ">
              Interactive Learning Experience
            </h3>
            <p>
              Every session is crafted to be both captivating and informative,
              ensuring kids stay enthusiastic about learning.
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center md:w-1/3">
          <img
            src={oneOnone}
            alt="Interactive class"
            className="rounded-lg shadow-lg w-full md:w-96"
          />
        </div>
        <div className="text-grey p-4 md:w-1/3 flex flex-col justify-center">
          <div className="rounded-lg shadow-lg bg-gray-100 p-3">
            <h3 className="text-lg font-semibold mb-2 text-[#673AB7] ">
              Creative Teaching Approaches
            </h3>
            <p className="mb-4">
              We employ diverse, innovative methods to accommodate various
              learning styles.
            </p>
          </div>
          <div className="rounded-lg shadow-lg bg-gray-100 p-3 mt-4">
            <h3 className="text-lg font-semibold mb-2 text-[#673AB7]">
              Supportive Environment
            </h3>
            <p>
              Our classes foster a nurturing environment where kids feel
              confident to express themselves and grow.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassLook;

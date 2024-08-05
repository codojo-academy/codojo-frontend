import oneOnone from "../images/oneonone.jpg";

const ClassLook = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center p-6">
      <h1 className="text-3xl font-bold text-center mb-8 text-pink-500">
        What does a typical class look like?
      </h1>
      <div className="flex flex-col md:flex-row gap-10 w-full max-w-6xl">
        <div className="p-4 md:w-1/3 flex flex-col justify-center">
          <div className="rounded-lg shadow-lg  bg-gray-100 p-3">
            <h3 className="text-lg font-semibold mb-2">
              Highly interactive and fun
            </h3>
            <p className="mb-4 ">
              Regular classes are filled with quizzes, games, activities and
              challenges to ensure active participation of the kid.
            </p>
          </div>
          <div className="rounded-lg shadow-lg bg-gray-100 p-3 mt-4">
            <h3 className="text-lg font-semibold mb-2">
              Engaging Learning Experience
            </h3>
            <p>
              Each session is designed to be engaging and educational, keeping
              the kids excited about learning.
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
            <h3 className="text-lg font-semibold mb-2">
              Innovative Teaching Methods
            </h3>
            <p className="mb-4">
              We use a variety of innovative teaching methods to cater to
              different learning styles.
            </p>
          </div>
          <div className="rounded-lg shadow-lg bg-gray-100 p-3 mt-4">
            <h3 className="text-lg font-semibold mb-2">
              Supportive Environment
            </h3>
            <p>
              Our classes provide a supportive environment where kids feel
              comfortable to express themselves and learn.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassLook;

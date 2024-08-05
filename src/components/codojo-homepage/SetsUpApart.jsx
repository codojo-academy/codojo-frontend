import { GoHome } from "react-icons/go";

const SetsUpApart = () => {
  return (
    <div className="p-8 bg-gray-100 min-h-screen mt-8 rounded-lg py-10 ">
      <h1 className="text-4xl font-bold mb-8 text-center">
        What really sets us apart.
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex  p-4 bg-white shadow-lg rounded-lg max-w-md mx-auto">
          <GoHome className="text-pink-500 text-4xl mr-4" />
          <div>
            <h4 className="text-xl font-semibold">Quality of curriculum</h4>
            <p>
              Personalized curriculum focused on mastery through depth and
              practice
            </p>
          </div>
        </div>
        <div className="flex items-center p-4 bg-white shadow-lg rounded-lg max-w-md mx-auto">
          <GoHome className="text-pink-500 text-4xl mr-4" />
          <div>
            <h4 className="text-xl font-semibold">Quality of teachers</h4>
            <p>
              Highly passionate and qualified teachers with relevant background
            </p>
          </div>
        </div>
        <div className="flex items-center p-4 bg-white shadow-lg rounded-lg max-w-md mx-auto">
          <GoHome className="text-pink-500 text-4xl mr-4" />
          <div>
            <h4 className="text-xl font-semibold">
              Adaptive AI based learning
            </h4>
            <p>
              Learning journey aided by AI ensuring better learning outcomes
            </p>
          </div>
        </div>
        <div className="flex items-center p-4 bg-white shadow-lg rounded-lg max-w-md mx-auto">
          <GoHome className="text-pink-500 text-4xl mr-4" />
          <div>
            <h4 className="text-xl font-semibold">Hands-on learning</h4>
            <p>
              Rigorous hands-on practice enabled through 1k+ of exercises &
              worksheets
            </p>
          </div>
        </div>
        <div className="flex items-center p-4 bg-white shadow-lg rounded-lg max-w-md mx-auto">
          <GoHome className="text-pink-500 text-4xl mr-4" />
          <div>
            <h4 className="text-xl font-semibold">Progress monitoring</h4>
            <p>
              Highly detailed personalized progress report and class engagement
            </p>
          </div>
        </div>
        <div className="flex items-center p-4 bg-white shadow-lg rounded-lg max-w-md mx-auto">
          <GoHome className="text-pink-500 text-6xl mr-4" />
          <div>
            <h4 className="text-xl font-semibold">
              In-class & outside class engagement
            </h4>
            <p>
              Student centric fun environment - community events, webinars &
              more
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SetsUpApart;

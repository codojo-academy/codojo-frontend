import downloadImage from "../assets/download.png";
import { GoHome } from "react-icons/go";
import { useNavigate } from "react-router-dom";
const Content = () => {
  const navigate = useNavigate();

  const bookADemoPage = () => {
    navigate("/book-a-demo");
  };
  return (
    <div className="flex gap-10">
      <div className="p-20">
        <h1 className="text-[#673AB7] text-4xl font-semibold">
          Creating Future Tech <br></br>
          Leader
          {/* Unleash your kid’s full<br></br>
        learning potential with<br></br>
        expert mentors */}
        </h1>
        <h3 className="text-[#E91E63] py-2">
          Live online 1:1 interactive classes for kids aged 5-17
        </h3>
        <ul className="">
          <li className="flex align-middle gap-2">
            <GoHome style={{ color: "#E91E63", fontSize: "20px" }} /> Learn from
            the comfort of home
          </li>
          <li>Dedicated personal expert mentor</li>
          <li>AI-driven adaptive learning journey</li>
          <li>Schedule classes anytime from anywhere</li>
        </ul>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
          onClick={bookADemoPage}
        >
          Book a Free Demo
        </button>
      </div>
      <div>
        <img src={downloadImage} alt="image" />
      </div>
    </div>
  );
};

export default Content;

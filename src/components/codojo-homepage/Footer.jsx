// import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-black py-8 p-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start space-y-8 md:space-y-0">
        {/* Social Media Links */}
        <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
          <div className="flex flex-col">
            <h1 className="text-lg font-bold text-gray-700">FOLLOW CODOJO</h1>
            <div className="flex gap-3 mt-1">
              <a
                href="https://www.instagram.com/codo_jo/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-500 hover:text-pink-400"
              >
                <FaInstagram className="text-4xl bg-[#ffe0eb] p-1 rounded" />
              </a>
              {/* <a
                href="https://www.instagram.com/codo_jo/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-500 hover:text-pink-400"
              >
                <FaYoutube className="text-4xl bg-[#ffe0eb] p-1 rounded" />
              </a> */}
              <a
                href="https://www.linkedin.com/company/codojo0/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-500 hover:text-pink-400"
              >
                <FaLinkedin className="text-4xl bg-[#ffe0eb] p-1 rounded" />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Courses</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/course-info"
                  className="text-black-300 hover:text-pink-500"
                >
                  Web Development
                </Link>
              </li>
              <li>
                <Link
                  to="/course-info"
                  className="text-black-300 hover:text-pink-500"
                >
                  Scratch Coding
                </Link>
              </li>
              <li>
                <Link
                  to="/course-info"
                  className="text-black-300 hover:text-pink-500"
                >
                  Java
                </Link>
              </li>
              <li>
                <Link
                  to="/course-info"
                  className="text-black-300 hover:text-pink-500"
                >
                  DSA
                </Link>
              </li>
              <li>
                <Link
                  to="/course-info"
                  className="text-black-300 hover:text-pink-500"
                >
                  Graphic Design
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/aboutus"
                  className="text-black-300 hover:text-pink-500"
                >
                  About Us
                </Link>
              </li>
              {/* <li>
                <Link to="#" className="text-black-300 hover:text-white">
                  
                </Link>
              </li> */}
              {/* <li>
                <Link to="#" className="text-black-300 hover:text-white">
                  Blog
                </Link>
              </li> */}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/book-a-demo"
                  className="text-black-300 hover:text-pink-500"
                >
                  Contact Us
                </Link>
              </li>
              {/* <li>
                <Link
                  to="/login"
                  className="text-black-300 hover:text-pink-500"
                >
                  Login
                </Link>
              </li> */}
              {/* <li>
                <Link to="#" className="text-balck-300 hover:text-white">
                  Support
                </Link>
              </li> */}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

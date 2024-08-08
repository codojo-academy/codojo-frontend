import { GoHome } from "react-icons/go";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-black py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
        {/* Social Media Links */}
        <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
          <div className="flex flex-col space-x-4">
            <h1 className="text-lg font-bold pl-4">FOLLOW CODOJO</h1>
            <div className="flex">
              <a
                href="https://www.linkedin.com/feed/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-500 hover:text-pink-400"
              >
                <GoHome className="text-2xl" />
              </a>
              <a
                href="https://www.linkedin.com/feed/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-500 hover:text-pink-400"
              >
                <GoHome className="text-2xl" />
              </a>
              <a
                href="https://www.linkedin.com/feed/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-500 hover:text-pink-400"
              >
                <GoHome className="text-2xl" />
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
                <Link to="#" className="text-black-300 hover:text-white">
                  Web Development
                </Link>
              </li>
              <li>
                <Link to="#" className="text-black-300 hover:text-white">
                  Data Science
                </Link>
              </li>
              <li>
                <Link to="#" className="text-black-300 hover:text-white">
                  AI & ML
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link to="#" className="text-black-300 hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="#" className="text-black-300 hover:text-white">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="#" className="text-black-300 hover:text-white">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="#" className="text-black-300 hover:text-white">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="#" className="text-black-300 hover:text-white">
                  FAQs
                </Link>
              </li>
              <li>
                <Link to="#" className="text-balck-300 hover:text-white">
                  Support
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

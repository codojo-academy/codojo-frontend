// import { useState } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import icon from "../images/icon.png"; // Make sure this path is correct

export default function Nav() {
  // const [isLoggedIn, setIsLoggedIn] = useState(false); /* true */

  return (
    <nav className="bg-white shadow-lg p-3 fixed top-0 h-30 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 pl-0 sm:pl-20">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            {/* Brand */}
            <div className="flex-shrink-0 flex items-center">
              <Link to="/">
                <img
                  src={icon}
                  alt="Interactive class"
                  className="h-8 w-auto"
                />
              </Link>
              <Link
                to="/"
                className="text-xl font-bold ml-2 hidden sm:block text-transparent bg-clip-text bg-gradient-to-r from-[#673AB7]  to-[#E91E63]"
              >
                CODOJO
              </Link>
            </div>
            {/* Navigation Links */}
            <div className="hidden sm:flex space-x-4 ml-40 gap-4 flex justify-center">
              <Link
                to="/"
                className="text-gray-700 font-semibold hover:text-purple-600"
              >
                Home
              </Link>
              <Link
                to="/course-info"
                className="text-gray-700  font-semibold hover:text-purple-600"
              >
                Courses
              </Link>
              <Link
                to="/aboutus"
                className="text-gray-700 font-semibold hover:text-purple-600"
              >
                About Us
              </Link>
            </div>
          </div>

          {/* Right side of Navbar */}
          {/* <div className="flex items-center space-x-4">
            {isLoggedIn ? (
              <>
                <Link
                  to="/student-portal"
                  target="_blank"
                  className="bg-purple-100 text-purple-700 hover:bg-purple-600 hover:text-white py-1.5 px-4 rounded"
                >
                  Student Portal
                </Link>
                <button
                  onClick={() => setIsLoggedIn(true)} false
                  className="bg-purple-600 text-white py-1.5 px-4 rounded hover:bg-purple-700"
                >
                  Logout
                </button>
              </>
            ) : (
              <Link
                to="/login"
                className="bg-purple-600 text-white py-1.5 px-4 rounded hover:bg-purple-700"
              >
                Login
              </Link>
            )}
          </div> */}
        </div>
      </div>
    </nav>
  );
}

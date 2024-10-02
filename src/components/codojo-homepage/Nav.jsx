// import {
//   Navbar,
//   NavbarBrand,
//   NavbarContent,
//   NavbarItem,
//   // NavbarMenuToggle,
//   // NavbarMenu,
//   // NavbarMenuItem,
//   Link,
//   Button,
// } from "@nextui-org/react";
//
// import { useState } from "react";
// import icon from "../images/icon.png";
//
// export default function Nav() {
//   // const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isLoggedIn, setIsLoggedIn] = useState(true); // State for login status
//   // const menuItems = [
//   //   "Profile",
//   //   "Dashboard",
//   //   "Activity",
//   //   "Analytics",
//   //   "System",
//   //   "Deployments",
//   //   "My Settings",
//   //   "Team Settings",
//   //   "Help & Feedback",
//   //   "Log Out",
//   // ];
//
//   return (
//     // onMenuOpenChange={setIsMenuOpen}
//     <Navbar>
//       <NavbarContent>
//         {/* <NavbarMenuToggle
//           aria-label={isMenuOpen ? "Close menu" : "Open menu"}
//           className="sm:hidden"
//         /> */}
//         <NavbarBrand>
//           <img src={icon} alt="Interactive class" />
//           <Link className="font-bold text-inherit" href="/">
//             CODOJO
//           </Link>
//         </NavbarBrand>
//       </NavbarContent>
//
//       <NavbarContent className="sm:flex gap-8 font-bold" justify="center">
//         <NavbarItem>
//           <Link className="text-gray-700" href="/">
//             Home
//           </Link>
//         </NavbarItem>
//         <NavbarItem>
//           <Link
//             href="/course-info"
//             aria-current="page"
//             className="lg:flex text-gray-700"
//           >
//             Courses
//           </Link>
//         </NavbarItem>
//         <NavbarItem>
//           <Link className="text-gray-700" href="aboutus">
//             About Us
//           </Link>
//         </NavbarItem>
//       </NavbarContent>
//       <NavbarContent justify="end">
//         {isLoggedIn && (
//           <NavbarItem>
//             <Link
//               href="/student-portal"
//               aria-current="page"
//               className="lg:flex bg-[#F8F0FF] hover:bg-[#6636CC] hover:text-white text-[#673AB7] py-1.5 px-4 rounded"
//               target="_blank"
//             >
//               Student Portal
//             </Link>
//           </NavbarItem>
//         )}
//       </NavbarContent>
//       <NavbarContent justify="end">
//         {!isLoggedIn ? (
//           <NavbarItem>
//             <Link
//               href="/login"
//               variant="flat"
//               className="bg-[#7047c9] hover:bg-[#957dbd] text-white py-1.5 px-4 rounded"
//             >
//               Login
//             </Link>
//           </NavbarItem>
//         ) : (
//           <NavbarItem>
//             <Button
//               as={Link}
//               className="bg-[#7047c9] hover:bg-[#957dbd] text-white py-1.5 px-4 rounded"
//               href="#"
//               variant="flat"
//               onClick={() => setIsLoggedIn(false)}
//             >
//               Logout
//             </Button>
//           </NavbarItem>
//         )}
//       </NavbarContent>
//       {/* <NavbarMenu>
//         {menuItems.map((item, index) => (
//           <NavbarMenuItem key={`${item}-${index}`}>
//             <Link
//               color={
//                 index === 2
//                   ? "primary"
//                   : index === menuItems.length - 1
//                   ? "danger"
//                   : "foreground"
//               }
//               className="w-full"
//               href="#"
//               size="lg"
//             >
//               {item}
//             </Link>
//           </NavbarMenuItem>
//         ))}
//       </NavbarMenu> */}
//     </Navbar>
//   );
// }

import { useState } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import icon from "../images/icon.png"; // Make sure this path is correct

export default function Nav() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <nav className="bg-white shadow-lg p-3">
      <div className="max-w-7xl mx-auto px-4 pl-0 sm:pl-20">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            {/* Brand */}
            <div className="flex-shrink-0 flex items-center">
              <img src={icon} alt="Interactive class" className="h-8 w-auto" />
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
          <div className="flex items-center space-x-4">
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
                  onClick={() => setIsLoggedIn(false)}
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
          </div>
        </div>
      </div>
    </nav>
  );
}

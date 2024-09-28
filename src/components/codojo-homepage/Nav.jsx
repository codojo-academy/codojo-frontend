import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
} from "@nextui-org/react";

import { useState } from "react";
import icon from "../images/icon.png";

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(true); // State for login status
  const menuItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          {/* <AcmeLogo /> */}
          <img src={icon} alt="Interactive class" />
          <Link className="font-bold text-inherit" href="/">
            CODOJO
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="sm:flex gap-8 font-bold" justify="center">
        <NavbarItem>
          <Link className="text-gray-700" href="/">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            href="/course-info"
            aria-current="page"
            className="lg:flex text-gray-700"
          >
            Courses
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-gray-700" href="aboutus">
            About Us
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        {isLoggedIn && (
          <NavbarItem>
            <Link
              href="/student-portal"
              aria-current="page"
              className="lg:flex bg-[#F8F0FF] hover:bg-[#6636CC] hover:text-white text-[#673AB7] py-1.5 px-4 rounded"
              target="_blank"
            >
              Student Portal
            </Link>
          </NavbarItem>
        )}
      </NavbarContent>
      <NavbarContent justify="end">
        {!isLoggedIn ? (
          <NavbarItem>
            <Link
              href="/login"
              variant="flat"
              className="bg-[#7047c9] hover:bg-[#957dbd] text-white py-1.5 px-4 rounded"
            >
              Login
            </Link>
          </NavbarItem>
        ) : (
          <NavbarItem>
            <Button
              as={Link}
              className="bg-[#7047c9] hover:bg-[#957dbd] text-white py-1.5 px-4 rounded"
              href="#"
              variant="flat"
              onClick={() => setIsLoggedIn(false)}
            >
              Logout
            </Button>
          </NavbarItem>
        )}
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2
                  ? "primary"
                  : index === menuItems.length - 1
                  ? "danger"
                  : "foreground"
              }
              className="w-full"
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}

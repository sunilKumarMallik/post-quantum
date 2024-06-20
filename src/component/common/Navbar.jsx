import React, { useEffect, useState } from "react";
import clogo from "../../assets/images/POSTQUANTUM.png";
import { AdjustmentsHorizontalIcon } from "@heroicons/react/24/solid";
import { MobileNav } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { navItem } from "./navList";
import { GiMagnifyingGlass } from "react-icons/gi";

export default function Navbar() {
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeSubDropdown, setActiveSubDropdown] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleMouseEnter = (label) => {
    setActiveDropdown(label);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
    setActiveSubDropdown(null);
  };

  const handleSubMouseEnter = (label) => {
    setActiveSubDropdown(label);
  };

  const handleSubMouseLeave = () => {
    setActiveSubDropdown(null);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navList = (
    <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-900 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0">
      <li>
        <Link
          to="/pqcmigration"
          className="hovered-links block py-2 pl-3 pr-4 text-black bg-white rounded md:bg-transparent md:text-white-700 md:p-0"
        >
          The PQC Migration
        </Link>
      </li>

      {navItem.map((item) => (
        <li
          key={item.label}
          onMouseEnter={() => handleMouseEnter(item.label)}
          onMouseLeave={handleMouseLeave}
          className="hovered-links"
        >
          <button
            id="dropdownNavbarLink"
            data-dropdown-toggle="dropdownNavbar"
            className="flex items-center justify-between w-full py-2 pl-3 pr-4 text-black border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-black md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700"
          >
            {item.label}
          </button>
          {item.subMenu.length > 0 && (
            <div
              id="dropdownNavbar"
              className={`${activeDropdown === item.label ? "" : "hidden"
                } absolute z-10 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-48`}
            >
              <ul
                className="py-2 text-sm text-black dark:text-gray-900"
                aria-labelledby="dropdownLargeButton"
              >
                {item.subMenu.map((subitem) => (
                  <li
                    key={subitem.label}
                    onMouseEnter={() => handleSubMouseEnter(subitem.label)}
                    onMouseLeave={handleSubMouseLeave}
                    aria-labelledby="dropdownNavbarLink"
                  >
                    <Link
                      to={subitem.to}
                      className="flex items-center justify-between w-full px-4 py-2 hover:bg-gray-100  dark:hover:text-gray-800"
                    >
                      {subitem.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </li>
      ))}

      <li>
        <Link
          to="/"
          className="hovered-links text-2xl block py-2 pl-3 pr-4 text-white bg-white-700 rounded md:bg-transparent md:text-white-700 md:p-0 md:dark:text-white-500 dark:bg-white-600 md:dark:bg-transparent"
        >
          <GiMagnifyingGlass className="text-black" />
        </Link>
      </li>
    </ul>
  );

  return (
    <>
      {["lg"].map((expand) => (
        <nav
          key={expand}
          expand={expand}
          className={`custom-navbar fixed top-0 left-0 right-0 z-50 bg-gray-200 border-gray-900 shadow-md ${isScrolled ? "small-navbar" : ""
            }`}
        >
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-1">
            <div>
              <Link to="/">
                <img
                  src={clogo}
                  className="h-20 mr-3 mt-2"
                  alt="Synergy Quantum"
                />
              </Link>
            </div>

            <div
              className="hidden w-full md:block md:w-auto"
              id="navbar-dropdown"
            >
              {navList}
            </div>
            <div
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden cursor-pointer"
              onClick={() => setOpenNav(!openNav)}
            >
              <AdjustmentsHorizontalIcon className="h-6 w-6 text-black ml-auto" />
            </div>
            {/* mobile nav */}
            <MobileNav open={openNav} className="bg-white list-none">
              <div className="container mx-auto">{navList}</div>
            </MobileNav>
          </div>
        </nav>
      ))}
    </>
  );
}

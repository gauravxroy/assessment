"use client";

import React, { useState, useEffect, useRef } from "react";
import IconButton from "@mui/material/IconButton";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Badge from "@mui/material/Badge";
import user from "../assets/user.png";
import Navigations from "./Navigations";
import { Menu, X, ChevronRight } from "lucide-react";
import axios from "axios";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);

  const searchRef = useRef(null); // Reference to search container

  useEffect(() => {
    loadData();

    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setFilteredResults([]);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const loadData = () => {
    // axios call to fetch data from localData.json
    axios
      .get("./localData.json")
      .then((res) => {
        console.log("The API response is", res.data);
        setData(res.data.accuknox);
      })
      .catch((err) => {
        console.log("The Error is", err);
      });
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSearch = (e) => {
    const term = e.target.value;
    setSearchTerm(term);

    if (term.trim() === "") {
      setFilteredResults([]);
      return;
    }

    const results = data
      .flatMap((category) => category.widgets)
      .filter(
        (widget) =>
          widget.title &&
          widget.title.toLowerCase().includes(term.toLowerCase())
      );

    setFilteredResults(results);
  };

  const menuItems = [
    {
      name: "Home",
      href: "#",
    },
    {
      name: "CNAPP Dashboard",
      href: "#",
    },
  ];
  console.log(filteredResults);
  return (
    <div className="relative w-full bg-white shadow-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8 md:2px">
        <div className="inline-flex items-center space-x-2">
          <span>
            <Navigations />
          </span>
        </div>

        <div className="flex grow flex-col items-end">
          <input
            className="flex h-10 rounded-md bg-blue-50 px-3 py-2 text-sm placeholder:text-gray-700 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 w-full sm:w-[300px]"
            type="text"
            placeholder="Search Anything.."
            value={searchTerm}
            onChange={handleSearch}
          />
          {filteredResults.length > 0 && (
            <div className="absolute mt-2 w-full sm:w-[300px] bg-white shadow-lg rounded-md z-10">
              <ul className="divide-y divide-gray-200">
                {filteredResults.map((result) => (
                  <li
                    key={result.id}
                    className="p-2 hover:bg-blue-50 cursor-pointer"
                    onClick={() => setSearchTerm(result.title)}
                  >
                    {result.title}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <IconButton
          size="larger"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={5} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>

        <div className="ml-2 mt-2 hidden lg:block">
          <span className="relative inline-block">
            <img className="h-8 w-8 rounded-full" src={user} alt="User" />
            <span className="absolute bottom-0 right-0 block h-2.5 w-2.5 rounded-full bg-green-600 ring-2 ring-white"></span>
          </span>
        </div>

        <div className="ml-2 lg:hidden">
          <Menu onClick={toggleMenu} className="h-6 w-6 cursor-pointer" />
        </div>

        {isMenuOpen && (
          <div className="absolute inset-x-0 top-0 z-50 origin-top-right transform p-2 transition lg:hidden">
            <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
              <div className="px-5 pb-6 pt-5">
                <div className="flex items-center float-right">
                  <div className="-mr-2">
                    <button
                      type="button"
                      onClick={toggleMenu}
                      className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                      <span className="sr-only">Close menu</span>
                      <X className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                </div>

                <div className="flex w-full">
                  <input
                    className="flex h-10 w-[300px] rounded-md bg-blue-50 px-3 py-2 text-sm placeholder:text-gray-700 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="text"
                    placeholder="Search"
                    value={searchTerm}
                    onChange={handleSearch}
                  />
                </div>

                {filteredResults.length > 0 && (
                  <div className="mt-2 w-full bg-white shadow-lg rounded-md z-10">
                    <ul className="divide-y divide-gray-200">
                      {filteredResults.map((result) => (
                        <li
                          key={result.id}
                          className="p-2 hover:bg-blue-50 cursor-pointer"
                          onClick={() => setSearchTerm(result.title)}
                        >
                          {result.title}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="mt-6">
                  <nav className="grid gap-y-4">
                    {menuItems.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="-m-3 flex items-center rounded-md p-3 text-sm font-semibold hover:bg-gray-50"
                      >
                        <span className="ml-3 text-base font-medium text-gray-900">
                          {item.name}
                        </span>
                        <span>
                          <ChevronRight className="ml-3 h-4 w-4" />
                        </span>
                      </a>
                    ))}
                  </nav>
                </div>

                <div className="ml-3 mt-4 flex items-center space-x-2">
                  <img className="h-8 w-8 rounded-full" src={user} alt="User" />
                  <span className="flex flex-col">
                    <span className="text-sm font-medium text-gray-900">
                      Gaurav
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;

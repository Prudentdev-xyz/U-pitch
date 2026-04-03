import React from "react";
import logo from "../assets/logo.svg";
import { links } from "../constants/links";
import { Link } from "react-router-dom";
import { BellDot, Search, SunMoon, User } from "lucide-react";

export const Header = () => {
  return (
    <>
      <div className="flex justify-between items-center max-w-screen-2 py-4 px-9 w-full bg-background z-20 border-ghost-white text-ghost-white">
        <div className="h-12">
          <img src={logo} alt="logo" />
        </div>

        <div>
          <ul className="md:flex hidden gap-10">
            {links.map((link) => (
              <li
                key={link.link}
                className="text-ghost-white hover:text-solar-yellow transition-colors"
              >
                <Link to={link.link}>{link.text}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex gap-3 items-center text-ghost-white">
          <button>
            <SunMoon />
          </button>
          <button>
            <Search />
          </button>
          <button>
            <BellDot />
          </button>
          <button>
            <User />{" "}
          </button>
        </div>
      </div>
    </>
  );
};

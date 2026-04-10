import React, { useState } from "react";
import logo from "@/assets/logo.svg";
import { links } from "../../constants/links";
import { Link } from "react-router-dom";
import { BellDot, Search, User, Menu, X } from "lucide-react";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className="fixed md:relative flex justify-between items-center w-full py-4 px-9 bg-transparent md:bg-background z-20 text-ghost-white">
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
          <button className="hidden md:block"><Search /></button>
          <button className="hidden md:block"><BellDot /></button>
          <button className="hidden md:block"><User /></button>
          
          <div className="flex gap-6">
          <div className="flex items-center gap-2 w-3/4 md:hidden bg-black/20 border rounded-xl px-4 py-3">
            <Search className="text-ghost-white w-5 h-5 md:hidden" />
            <input
              type="text"
              placeholder="Search matches, teams, players, news..."
              className="bg-transparent md:hidden text-ghost-white placeholder-black-shadr outline-none w-full text-sm"
            />
          </div>
        
          <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      </div>

      {menuOpen && (
        <div className="fixed top-16 left-0 w-full h-screen bg-black z-10 flex flex-col items-center pt-10 gap-8 md:hidden">
          

          <ul className="flex flex-col items-center gap-6">
            {links.map((link) => (
              <li key={link.link} className="text-ghost-white text-xl hover:text-solar-yellow transition-colors">
                <Link to={link.link} onClick={() => setMenuOpen(false)}>
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};
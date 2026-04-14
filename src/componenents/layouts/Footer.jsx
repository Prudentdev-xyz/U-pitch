import React from "react";

export const Footer = () => {
  return (
    <div className="pt-18">
      <div className="hidden md:block bg-Dark-Shade">
        <div className="p-10">
          <p className="text-ghost-white text-center font-semibold text-xl">
            UPITCH
          </p>
          <ul className="text-ghost-white font-normal gap-8 flex justify-center text-center py-5">
            <li>Privacy Policy</li>
            <li>Cookies Policy</li>
            <li>Accessibility Policy</li>
            <li>Terms & Conditions</li>
          </ul>
          <ul className="text-ghost-white font-normal gap-8 flex justify-center text-center">
            <a href="/">
              <li>Live</li>
            </a>
            <a href="/fixtures">
              <li>Fixtures</li>
            </a>
            <a href="/standings">
              <li>Standings</li>
            </a>
            <a href="/leaderboards">
              <li>Leaderboards</li>
            </a>
            <a href="/news">
              <li>News</li>
            </a>
          </ul>
        </div>

        <hr className="border-ghost-white/30 w-full" />

        <p className="text-ghost-white text-center font-normal py-10">
          © 2026 UPITCH - All rights reserved.
        </p>
      </div>
    </div>
  );
};

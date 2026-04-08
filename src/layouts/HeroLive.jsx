import React from "react";
import HeroBg from "../assets/HeroBg.svg";

export const HeroLive = () => {
  return (
    <div className="px-4 py-6">
      <div
        className="relative h-[582px] bg-cover bg-center border border-ghost-white rounded-3xl"
        style={{ backgroundImage: `url(${HeroBg})` }}
      >
        <div className="text-white p-5 text-2xl">HeroLive is working!</div>
      </div>
    </div>
  );
};

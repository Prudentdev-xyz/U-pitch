import React from "react";
import HeroBg from "@/assets/HeroBg.svg";
import { AncientButton } from "../buttons/AncientButton";

export const HeroLive = () => {
  return (
    <div className=" md:px-4 md:py-6">
      <div
        className="relative h-[582px] bg-cover bg-center md:border md:rounded-3xl"
        style={{ backgroundImage: `url(${HeroBg})` }}
      >
        <div className="py-35 px-12 md:p-52">
          <div className="mx-auto space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold text-ghost-white text-center">
              Every Goal. Every Match. Right Now.
            </h1>
            <p className="text-lg md:text-2xl md:max-w-2xl font-medium text-ghost-white text-center mx-auto">
              Stay connected to Nigerian university sports with live scores,
              fixtures, results, and player performance updates.
            </p>
            <div className="flex justify-center">
              <AncientButton>Watch the Scores Live</AncientButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

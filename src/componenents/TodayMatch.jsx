import React from "react";
import { AncientButton } from "./buttons/AncientButton";
import RealMadrid from "@/assets/RealMadrid-1.svg";
import Barcelona from "@/assets/Barcelona-Barca1.svg";

export const TodayMatch = () => {
  return (
    <div>
      <div className="py-5 px-3.5 md:px-15">
        <div className="relative bg-Dark-Shade p-5 md:p-7 rounded-3xl flex flex-col gap-3">
          {/* Live badge */}
          <div className="self-end">
            <AncientButton>Live 67'</AncientButton>
          </div>

          {/* League */}
          <p className="text-ghost-white font-medium text-sm">Laliga</p>

          {/* Score rows */}
          <div className="flex flex-col gap-1.5 px-1 md:px-4">
            <div className="flex justify-between items-center text-ghost-white">
              <div className="gap-0 flex items-center">
                <img src={RealMadrid} alt="RealMadrid" />
                <p>Real Madrid</p>
              </div>
              <p>2</p>
            </div>
            <div className="flex justify-between items-center text-ghost-white">
              <div className="gap-0 flex items-center">
                <img src={Barcelona} alt="Barcelona" />
                <p>Barcelona</p>
              </div>
              <p>1</p>
            </div>
          </div>

          <hr className="border-ghost-white/20" />

          {/* Footer meta */}
          <div className="flex justify-between items-center text-ghost-white text-sm px-1 md:px-4">
            <p>Football</p>
            <p>2026-01-30</p>
          </div>
        </div>
      </div>

      <div className="py-5 px-3.5 md:px-15">
        <div className="relative bg-Dark-Shade p-5 md:p-7 rounded-3xl flex flex-col gap-3">
          {/* Live badge */}
          <div className="self-end">
            <AncientButton>Live 67'</AncientButton>
          </div>

          {/* League */}
          <p className="text-ghost-white font-medium text-sm">Laliga</p>

          {/* Score rows */}
          <div className="flex flex-col gap-1.5 px-1 md:px-4">
            <div className="flex justify-between items-center text-ghost-white">
              <div className="gap-0 flex items-center">
                <img src={RealMadrid} alt="RealMadrid" />
                <p>Real Madrid</p>
              </div>
              <p>2</p>
            </div>
            <div className="flex justify-between items-center text-ghost-white">
              <div className="gap-0 flex items-center">
                <img src={Barcelona} alt="Barcelona" />
                <p>Barcelona</p>
              </div>
              <p>1</p>
            </div>
          </div>

          <hr className="border-ghost-white/20" />

          {/* Footer meta */}
          <div className="flex justify-between items-center text-ghost-white text-sm px-1 md:px-4">
            <p>Football</p>
            <p>2026-01-30</p>
          </div>
        </div>
      </div>
    </div>
  );
};

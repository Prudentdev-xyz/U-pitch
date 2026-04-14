import React from "react";
import { HeroLive } from "../componenents/layouts/HeroLive";
import Ellipse from "@/assets/Ellipse.svg";
import { LiveCard } from "../componenents/layouts/LiveCard";
import { Dot } from "lucide-react";

export const Live = () => {
  return (
    <div>
      <HeroLive />
      <p className="font-semibold text-white text-2xl py-1.5 px-5 flex">
        LIVE NOW
      </p>
      <div>
        {" "}
        <LiveCard />{" "}
      </div>
      <p className="font-semibold text-white text-2xl py-1.5 px-5 flex">
        TODAY`S MATCH
      </p>
    </div>
  );
};

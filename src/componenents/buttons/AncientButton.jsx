import React from "react";

export const AncientButton = ({ children }) => {
  return (
    <button className="bg-solar-yellow rounded-lg text-ghost-white px-3 py-1">
      {children}
    </button>
  );
};

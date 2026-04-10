import React from "react";

export const PrimaryButton = ({ children }) => {
  return (
    <button className="bg-black-shadr rounded-lg text-ghost-white px-3 py-1">
      {children}
    </button>
  );
};


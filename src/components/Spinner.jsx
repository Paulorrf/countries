import React from "react";

const Spinner = () => {
  return (
    <div className="grid justify-center items-center h-80">
      <div
        className="h-40 w-40 border-4 border-darkElements rounded-full animate-spin"
        style={{
          borderTop: "transparent",
          borderRight: "transparent",
        }}
      ></div>
    </div>
  );
};

export default Spinner;

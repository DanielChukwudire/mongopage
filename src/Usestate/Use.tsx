import React, { useState } from "react";

const ColorBox = () => {
  const [color, setColor] = useState("white");

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-6 bg-black">
      {/* The Box */}
      <div
        className="w-64 h-64 rounded shadow-md"
        style={{ backgroundColor: color }}
      ></div>

      {/* BUTTON */}
      <div className="flex flex-wrap gap-4">
        <button
          className="px-4 py-2 bg-red-500 text-white w-20 rounded"
          onClick={() => setColor("red")}
        >
          Red
        </button>
        <button
          className="px-4 py-2 bg-green-500 text-white w-20  rounded"
          onClick={() => setColor("green")}
        >
          Green
        </button>
        <button
          className="px-4 py-2 bg-blue-500 w-20  text-white rounded"
          onClick={() => setColor("blue")}
        >
          Blue
        </button>
        <button
          className="px-4 py-2 bg-pink-500 w-20  text-white rounded"
          onClick={() => setColor("pink")}
        >
          pink
        </button>
        <button
          className="px-4 py-2 bg-purple-600 text-white w-20  rounded"
          onClick={() => setColor("purple")}
        >
          Purple
        </button>
      </div>
    </div>
  );
};

export default ColorBox;

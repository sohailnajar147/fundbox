import React from "react";

function ColoredDivs({ number }) {
  const renderDivs = () => {
    const divs = [];
    for (let i = 0; i < 4; i++) {
      if (i < number) {
        divs.push(
          <div
            key={i}
            className="flex w-1/4 h-2 bg-[#3B82F6] rounded-full"
          ></div>
        );
      } else {
        divs.push(
          <div
            key={i}
            className="flex w-1/4 h-2 bg-gray-200 rounded-full"
          ></div>
        );
      }
    }
    return divs;
  };

  return <div className="flex flex-row-reverse gap-2">{renderDivs()}</div>;
}

export default ColoredDivs;

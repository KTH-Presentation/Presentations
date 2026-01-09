import { useState } from "react";
import ArrowLine from "../assets/grupp2/icons/arrow-line.svg";
import ArrowVertical from "../assets/grupp2/icons/arrow-vertical.svg";
const MatrixScenario = () => {
  const [visibleTexts, setVisibleTexts] = useState({
    1: false,
    2: false,
    3: false,
    4: false,
  });

  const toggleText = (id) => {
    setVisibleTexts((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="relative w-full max-w-[700px] h-[400px] flex items-center justify-center text-center mx-auto">
      {/* Arrows */}
      <img
        src={ArrowLine}
        alt="Horizontal arrow"
        className="absolute top-1/2 left-0 w-full h-auto -translate-y-1/2"
      />
      <img
        src={ArrowVertical}
        alt="Vertical arrow"
        className="absolute left-1/2 top-0 h-full w-auto -translate-x-1/2"
      />

      {/* Axis Labels */}
      <span className="absolute -left-[18%] top-1/2 -translate-y-1/2 -translate-x-8 text-lg">
        Low technological <span className="block">standardisation</span>
      </span>
      <span className="absolute -right-[18%] top-1/2 -translate-y-1/2 translate-x-8 text-lg">
        High technological <span className="block">standardisation</span>
      </span>
      <span className="absolute -top-2 left-1/2 -translate-x-1/2 -translate-y-8 text-lg">
        High political commitment
      </span>
      <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 translate-y-8 text-lg">
        Low political commitment
      </span>

      {/* Circles and Texts */}
      {[1, 2, 3, 4].map((id, index) => {
        const positions = [
          { top: "25%", left: "25%" }, // Scenario 1
          { top: "25%", left: "75%" }, // Scenario 2
          { top: "75%", left: "25%" }, // Scenario 3
          { top: "75%", left: "75%" }, // Scenario 4
        ];

        const titles = {
          1: "Scenario 1",
          2: "Scenario 2",
          3: "Scenario 3",
          4: "Scenario 4",
        };

        const descriptions = {
          1: "Governed patchwork",
          2: "Collaborative digital ecosystem",
          3: "Data free from policies",
          4: "Standards without strategy",
        };

        const colors = {
          1: "bg-[#D266CB]",
          2: "bg-[#3CA9DF]",
          3: "bg-[#92D050]",
          4: "bg-[#FFC86C]",
        };

        const size = visibleTexts[id] ? "w-44 h-44" : "w-32 h-32";

        return (
          <div key={id}>
            {/* Expandable Circle */}
            <div
              style={positions[index]}
              onClick={() => toggleText(id)}
              className={`absolute flex flex-col items-center justify-center rounded-full cursor-pointer transition-all duration-300 ease-out
                ${colors[id]} ${size} -translate-x-1/2 -translate-y-1/2 p-4`}
            >
              <span className="text-center font-bold text-lg text-[#450744]">
                {titles[id]}
              </span>

              {visibleTexts[id] && (
                <span className="text-center">
                  {descriptions[id]}
                </span>
              )}
            </div>
          </div>
        );
      })}

    </div>
  );
}
export default MatrixScenario;
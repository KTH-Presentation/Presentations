import { useState } from "react";

export default function ScenarioQuadrant() {
  const [open, setOpen] = useState([]);

  const toggle = (id) => {
    setOpen((prev) =>
      prev.includes(id)
        ? prev.filter((x) => x !== id)
        : [...prev, id]
    );
  };

  const scenarios = [
    {
      id: 1,
      title: "Scenario 1",
      result: "Chaotic, inconsistent",
      color: "bg-[#D266CB]"
    },
    {
      id: 2,
      title: "Scenario 2",
      result: "Fully realized potential",
      color: "bg-[#3CA9DF]"
    },
    {
      id: 3,
      title: "Scenario 3",
      result: "Opportunities missed",
      color: "bg-[#92D050]"
    },
    {
      id: 4,
      title: "Scenario 4",
      result: "System built but not used",
      color: "bg-[#FFC86C]"
    }
  ];

  return (
    <div className="w-full max-w-3xl mx-auto relative">
      {/* Vertical label */}
      <div className="absolute -left-20 top-1/2 -translate-y-1/2 rotate-90 text-xl font-semibold">
        Political Will
      </div>

      {/* Vertical arrows */}
      <div className="absolute -left-12 top-6 text-sm">High ↑</div>
      <div className="absolute -left-12 bottom-6 text-sm">Low ↓</div>

      {/* Horizontal label */}
      <div className="absolute left-1/2 top-[-35px] -translate-x-1/2 text-xl font-semibold">
        Technological Standards
      </div>

      {/* Horizontal arrows */}
      <div className="absolute top-[-20px] left-6 text-sm">Low ←</div>
      <div className="absolute top-[-20px] right-6 text-sm">→ High</div>

      {/* Grid */}
      <div className="relative grid grid-cols-2 grid-rows-2 border-2 border-[#B4CBFF] h-[500px]">

        {scenarios.map((s) => (
          <div
            key={s.id}
            className="flex items-center justify-center border border-[#B4CBFF] cursor-pointer"
            onClick={() => toggle(s.id)}
          >
            <div
              className={`
                rounded-full text-center font-medium flex flex-col items-center justify-center transition-all duration-300
                ${s.color}
                ${open.includes(s.id) ? "w-48 h-48 p-4" : "w-32 h-32 p-2"}
              `}
            >
              <h3 className="font-bold">{s.title}</h3>

              {open.includes(s.id) && (
                <div className="text-sm mt-2 leading-tight">
                  <p className="mt-2 font-medium">{s.result}</p>
                </div>
              )}
            </div>
          </div>
        ))}

      </div>
    </div>
  );
}

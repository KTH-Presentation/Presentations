import { useState } from "react";

const ExpandableCircle = ({ items }) => {
  const [activeKey, setActiveKey] = useState(null);

  const toggle = (key) => {
    setActiveKey((prev) => (prev === key ? null : key));
  };

  return (
    <div className="grid grid-cols-2 gap-8">
      {items.map((item) => {
        // Use a custom field for toggle instead of "id"
        const keyValue = item.key || item.slug || item.internalKey; // whatever unique field you define
        const isOpen = activeKey === keyValue;

        return (
          <div
            key={keyValue}
            onClick={() => toggle(keyValue)}
            className={`
              flex flex-col justify-center cursor-pointer shadow-sm transition-all duration-300 p-4 bg-[#79DBF7] text-[#061C39]
              ${isOpen ? "opacity-100 max-w-[600px] rounded-l-full rounded-r-full pl-[5%]" : "opacity-70 w-52 h-52 rounded-full text-center items-center animate-pulse"}
            `}
          >
            <h3 className="text-xl font-semibold">{item.title}</h3>

            {isOpen && (
              <p className="max-w-[90%]">
                {item.text}
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
}
export default ExpandableCircle;
import { tabs } from "../utils/constant";
import { useState } from "react";
const Table = () => {

  const [activeTab, setActiveTab] = useState(0);
  return (
    <>
      <div className="bg-customGradient h-screen">
        <div className="container">
            <h2 className="pt-[160px] font-bold font-montserrat text-[34px]">Event Schedule</h2>
          <div className="flex flex-col w-full">
            <div className="gap-[30px] grid grid-cols-3">
              {tabs.map((tab, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`flex flex-col items-start  ${
                    activeTab === index ? "border-b-2 border-secondary-500" : ""
                  }`}
                >
                  <span
                    className={`font-montserrat  font-extrabold text-2xl ${
                      activeTab === index ? " text-secondary-500" : "text-gray-400"
                    }`}
                  >
                    {tab.day}
                  </span>
                  <span className={"text-secondary-500 font-montserrat font-bold text-base"}>{tab.date}</span>
                </button>
              ))}
            </div>
            <div className="mt-[20px] border rounded">
              Content for {tabs[activeTab].day} ({tabs[activeTab].date})
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Table;

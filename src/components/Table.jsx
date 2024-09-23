import { tabs } from "../utils/constant";
import { useState } from "react";
import { SCHEDULE_DATA } from "../utils/constant";
import { Clock, Video } from "lucide-react";

const Table = () => {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <>
      <div className="bg-customGradient mb-[240px]">
        <div className="container">
          <h2 className="mb-[60px] pt-[160px] font-bold font-montserrat text-[34px]">
            Event Schedule
          </h2>
          <div className="flex flex-col w-full">
            <div className="gap-[30px] grid grid-cols-3">
              {tabs.map((tab, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`flex flex-col items-start pt-[20px] ${
                    activeTab === index ? "border-b-4 border-secondary-500" : ""
                  }`}
                >
                  <span
                    className={`font-montserrat  font-extrabold text-2xl ${
                      activeTab === index
                        ? " text-secondary-500"
                        : "text-gray-400"
                    }`}
                  >
                    {tab.day}
                  </span>
                  <span
                    className={` font-montserrat font-bold text-base ${
                      activeTab === index
                        ? " text-secondary-500"
                        : "text-gray-400"
                    }`}
                  >
                    {tab.date}
                  </span>
                </button>
              ))}
            </div>

            <div className="border-gray-200 bg-white shadow-sm mt-[40px]">
              <table className="rounded-3xl w-[1170px] text-left">
                <thead className="bg-[#efecfc]">
                  <tr className="px-4 border rounded-3xl w-full font-bold font-raleway text-[#222222] text-2xl text-left">
                    <th className="w-[230px]">
                      <p className="p-10 font-bold font-raleway text-[#222222] text-2xl">
                        Time
                      </p>
                    </th>
                    <th className="w-[370px]">
                      <p className="font-bold font-raleway text-[#222222] text-2xl">
                        Content
                      </p>
                    </th>
                    <th className="w-[230px]">
                      <p className="p-10 font-bold font-raleway text-[#222222] text-2xl">
                        Speakers
                      </p>
                    </th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {SCHEDULE_DATA.map((item, index) => (
                    <tr
                      key={index}
                      className="border-gray-200 border-t"
                    >
                      <td className="flex items-start px-4 py-10">
                        <p className="opacity-80 font-normal font-raleway text-[#222222] text-base">
                          {item.time}
                        </p>
                      </td>
                      <td className="items-start px-4 py-10 text-left">
                        <p className="font-bold font-raleway text-base">
                          {item.content}
                        </p>
                      </td>
                      <td className="px-4 py-10">
                        {item.speakers.map((speaker, speakerIndex) => (
                          <div
                            key={speakerIndex}
                            className="flex justify-between items-center m-7"
                          >
                            <div className="flex items-center gap-[10px]">
                              <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy1_-CtaHKfJ4P5lrBXGx0OmVKg5EwqQKovg&s"
                                alt={speaker.name}
                                className="rounded-full w-14 h-14"
                              />
                              <div className="flex flex-col font-medium text-gray-900 text-sm">
                                <p className="font-bold font-raleway text-base">
                                  {speaker.name}
                                </p>
                                <p className="opacity-50 font-normal font-raleway text-[#222222] text-base">
                                  Booth:
                                  <span className="font-bold">
                                    {speaker.booth}
                                  </span>
                                </p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </td>
                      <td className="px-4 py-10">
                        <div className="flex flex-row-reverse items-center gap-2">
                          <Clock className="w-6 h-6" />
                          <p className="font-bold font-montserrat text-base">
                            Preview
                          </p>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Table;

import NavBar from "./NavBar";
import { CirclePlay } from "lucide-react";
import CountDown from "./CountDown";

const HeroSection = () => {
  return (
    <>
      <div className="bg-heroSectionBackground bg-cover bg-center lg:h-[968px] font-montserrat sm:h-[768px]">
        <NavBar />
        <div className="flex justify-center w-full">
          <div className="flex flex-col mt-[105px] w-[970px] h-[388px]">
            <div>
              <h1 className="font-bold text-center text-white sm:text-6xl lg:text-7xl capitalize lg:leading-[87px]">
                The Best experience of {" "}
                <span className="text-primary-300">music</span> in 2021
              </h1>
            </div>
            <div>
              <p className="mt-10 font-normal font-raleway text-center text-white sm:text-xl lg:text-2xl lg:leading-[38px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse vitae ligula placerat, eleifend ex non, vehicula
                libero. Suspendisse eget tellus lectus.
              </p>
            </div>
            <div className="flex justify-center gap-10 mt-10">
              <button className="bg-primary-500 rounded-lg  lg:w-[164px] h-14 font-bold font-montserrat text-white md:text-xs lg:text-base sm:p-4">
                Get Started
              </button>
              <button className="flex items-center gap-[20px] font-extrabold font-montserrat text-white text-xl">
                <CirclePlay className="w-14 h-14" />
                Watch Video
              </button>
            </div>
          </div>
        </div>
        {/* <CountDown /> */}
      </div>
    </>
  );
};

export default HeroSection;

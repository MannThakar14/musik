import { Carousel } from "@trendyol-js/react-carousel";
import { CONCERT_DATA } from "../../utils/constant";
import ConcertCard from "./ConcertCard";
import {CUSTOM_CAROUSEL_IMAGES} from "../../utils/images";

const CustomCarousel = () => {
  
  const { LeftImg, RightImg, instagramBackGround } = CUSTOM_CAROUSEL_IMAGES;
  return (
    <div className="relative bg-customGradientPink mb-[240px] p-1 h-[770px]">
      <h2 className="mt-[160px] font-bold font-montserrat text-[34px] container">
        See our Best Shots
      </h2>
      <img
        src={instagramBackGround}
        alt="Instagram Background"
        className="top-10 left-1/4 absolute opacity-10 w-[360px] h-[360px]"
      />
      <div className="mt-[50px]">
        <Carousel
          show={5}
          slide={2}
          swiping
          centerMode
          useArrowKeys={true}
          transition={0.5}
          leftArrow={
            <img
              src={LeftImg}
              alt="Left Arrow"
              className="top-52 left-24 z-10 absolute transform -translate-y-1/2 cursor-pointer"
            />
          }
          rightArrow={
            <img
              src={RightImg}
              alt="Right Arrow"
              className="top-52 right-24 absolute transform -translate-y-1/2 cursor-pointer"
            />
          }
        >
          {CONCERT_DATA?.map((data) => (
            <ConcertCard key={data.id} {...data} />
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default CustomCarousel;

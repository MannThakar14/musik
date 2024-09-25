import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { TESTIMONIALS_DATA } from "../utils/constant";
import vectorOne from "../assets/imgs/testimonial_imgs/01_vector.svg";
import vectorTwo from "../assets/imgs/testimonial_imgs/02_vector.svg";

const Testmonials = () => {
  const [currentIndex, setCurrentIndex] = useState(1);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === TESTIMONIALS_DATA.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? TESTIMONIALS_DATA.length - 1 : prevIndex - 1
    );
  };
  return (
    <>
      <div className="mb-[240px] overflow-hidden">
        <h2 className="font-bold font-montserrat text-[34px] text-center">
        Testimonials
        </h2>
        <div className="mt-[60px]">
          <div className="relative">
            <div className="flex justify-center items-center">
              {TESTIMONIALS_DATA.map((testimonial, index) => (
                <div
                  key={TESTIMONIALS_DATA.id}
                  className={`transition-all duration-300 ${
                    index === currentIndex
                      ? "opacity-100 scale-100"
                      : "opacity-50 scale-90"
                  }`}
                >
                  <div className="relative w-[770px] h-[379px]">
                    <div className="bg-[#f8f8f8] p-1 w-full h-[232px]">
                      <div className="mx-[30px] mt-[20px]">
                        <img
                          src={vectorOne}
                          alt=""
                          srcset=""
                          className="w-[24px] h-[24px]"
                        />
                        <p className="opacity-70 pr-[30px] pl-[30px] font-normal font-raleway text-base text-center leading-6 color-[#222222]">
                          {testimonial.text}
                        </p>
                        <img
                          src={vectorTwo}
                          alt=""
                          srcset=""
                          className="float-right w-[30px] h-[30px]"
                        />
                      </div>
                    </div>
                    <div className="bottom-0 left-1/2 absolute transform -translate-x-1/2">
                      <img
                        src="https://img.freepik.com/free-photo/portrait-man-laughing_23-2148859448.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1727049600&semt=ais_hybrid"
                        alt=""
                        className="mx-auto rounded-full w-[120px] h-[120px]"
                      />
                      <p className="mt-[20px] font-extrabold font-montserrat text-[#222222] text-center text-xl">
                        {testimonial.name}
                      </p>
                      <p className="pt-[5px] font-normal font-raleway text-base text-center text-secondary-500">
                        {testimonial.website}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <button
              onClick={prevTestimonial}
              className="top-1/2 left-0 absolute bg-white shadow-md p-2 rounded-full transform -translate-y-1/2"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextTestimonial}
              className="top-1/2 right-0 absolute bg-white shadow-md p-2 rounded-full transform -translate-y-1/2"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testmonials;

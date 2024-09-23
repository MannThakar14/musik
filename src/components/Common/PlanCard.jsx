const PlanCard = ({
  heading,
  price,
  subHeadingOne,
  subHeadingTwo,
  subHeadingThree,
  color
}) => {
  return (
    <>
      <div
        className="bg-white shadow-custom w-[370px] h-[404px] overflow-hidden"
        style={{ borderRadius: "20px" }}
      >
        <div className={` w-full h-1`} style={{ backgroundColor: color }}></div>
        <div>
          <h2 className="mt-[30px] font-extrabold font-montserrat text-3xl text-center" style={{ color: color}}>
            {heading}
          </h2>
          <h2 className="mt-[15px] font-bold font-montserrat text-6xl text-center" style={{ color: color}}> 
            {price}
          </h2>
          <p className={`mt-[30px] font-normal font-raleway text-base text-center ${subHeadingOne ? "opacity-1" : "opacity-80"} ${subHeadingTwo? "text-black" : "text-[#222222]"}`}>
            1 Seat Available
          </p>
          <p className={`mt-[15px] font-normal font-raleway ${subHeadingTwo? "text-black" : "text-[#222222]"} text-base text-center ${subHeadingTwo ? "opacity-1" : "opacity-40"}`}>
            Access to Wifi Router
          </p>
          <p className={`opacity-80 mt-[15px] font-normal font-raleway ${subHeadingThree? "text-black" : "text-[#222222]"} text-base text-center ${subHeadingThree ? "opacity-1" : "opacity-40"}`}>
            Free Food & Coffee
          </p>
          <div className="flex justify-center">
            <button
              className="border-[1px] border-secondary-500 hover:bg-secondary-500 ease-custom-ease mt-[30px] w-[162px] h-[56px] font-bold font-montserrat text-base text-secondary-500 hover:text-white transition-custom-transform duration-custom-duration"
              style={{
                borderRadius: "5px",
              }}
            >
              Get Tickets
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PlanCard;

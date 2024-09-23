
const Card = ({ img, heading, descripstion, color }) => {
  return (
    <>
      <div
        style={{ backgroundColor: color }} 
        className="p-1 pl-14 rounded-3xl w-[370px] h-[326px]"
      >
        <img src={img} alt={heading} className="mt-[86px] w-10 h-10" />
        <div className="w-fit">
          <h2 className="mt-[30px] w-fit font-extrabold font-montserrat text-[#222222] text-2xl">
            {heading}
          </h2>
          <p className="opacity-70 mt-[20px] w-[190px] font-normal font-raleway text-[#222222] text-base leading-6">
            {descripstion}
          </p>
        </div>
      </div>
    </>
  );
};

export default Card;
import { CATEGORIES_IMAGES } from "../../utils/images";

const Card = ({ img, heading, descripstion, color, id }) => {
  const { lineOne, lineTwo, lineThree, circle } = CATEGORIES_IMAGES;

  console.log(id);
  return (
    <>
      <img
        src={lineOne}
        alt={heading}
        className="top-16 left-20 absolute lg:block sm:hidden"
      />

      <div className={`p-1 lg:pl-14 rounded-3xl w-[370px] h-[326px] ${color} sm:p-5`}>
        <img src={img} alt={heading} className="lg:mt-[86px] w-10 h-10 sm:mt-5" />
        <div className="w-fit">
          <h2 className="mt-[30px] w-fit font-extrabold font-montserrat text-[#222222] text-2xl">
            {heading}
          </h2>
          <p className="opacity-70 mt-[20px] w-[190px] font-normal font-raleway text-[#222222] lg:text-base leading-6 sm:text-sm">
            {descripstion}
          </p>
          {id === 4 && (
            <img
              src={circle}
              alt="Floating Circle"
              className="right-[53px] absolute"
            />
          )}
        </div>
      </div>
      {id === 0 && (
        <img
          src={lineTwo}
          alt="Floating Line"
          className="-bottom-[100px] left-[150px] absolute lg:block sm:hidden"
        />
      )}

      {id === 4 && (
        <img
          src={lineThree}
          alt="Floating Line"
          className="top-[113px] right-44 absolute lg:block sm:hidden"
        />
      )}
    </>
  );
};

export default Card;

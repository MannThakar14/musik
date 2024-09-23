import scaleOne from "../../assets/Imgs/CategoriesLogo/CategoryFloatingElements/01_category_line.svg";
import scaleTwo from "../../assets/Imgs/CategoriesLogo/CategoryFloatingElements/02_category_line.svg";
import scaleThree from "../../assets/Imgs/CategoriesLogo/CategoryFloatingElements/03_category_line.svg";
import circle from "../../assets/Imgs/CategoriesLogo/CategoryFloatingElements/04_category_circle.svg";
const Card = ({ img, heading, descripstion, color, id }) => {
  return (
    <>
      {id === 0 && (
        <img src={scaleOne} alt={heading} className="top-16 left-20 absolute" />
      )}
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
          {id === 4 && (
            <img
              src={circle}
              alt=""
              className="right-[53px] absolute"
            />
          )}
        </div>
      </div>
      {id === 0 && (
        <img
          src={scaleTwo}
          alt=""
          className="-bottom-[100px] left-[150px] absolute"
        />
      )}

      {id === 4 && (
        <img
          src={scaleThree}
          alt=""
          className="top-[113px] right-44 absolute"
        />
      )}
     
      

    </>
  );
};

export default Card;

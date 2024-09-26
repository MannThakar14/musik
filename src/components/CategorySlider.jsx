import { cardData } from "../utils/constant";
import Card from "./Common/Card";

const CategorySlider = () => {
  return (
    <div className="relative lg:mt-[240px] mb-[240px] sm:mt-[160px]">
      <h2 className="font-bold font-montserrat text-[34px] container">
        <span className="text-secondary-500">Explore </span> By Category
      </h2>

      <div className="flex gap-[30px] mt-[60px] sm:overflow-x-auto lg:overflow-hidden sm:overflow-y-hidden">
        
          {cardData.map((item, id) => (
            <Card
              img={item.img}
              heading={item.heading}
              descripstion={item.description}
              color={item.color}
              key={id}
              id={id}
            />
          ))}
        
      </div>
    </div>
  );
};

export default CategorySlider;

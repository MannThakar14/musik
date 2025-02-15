import {cardData} from "../utils/constant"
import Card from "./Common/Card";

const CategorySlider = () => {
  return (
    <div className="mt-[240px] mb-[240px]">
      <h2 className="font-bold font-montserrat text-[34px] container">
        <span className="text-secondary-500">Explore </span> By Category
      </h2>
      
      <div className="flex gap-[30px] mt-[60px]">
      {cardData.map((item) => (
        <>
        <Card img={item.img} heading={item.heading} descripstion={item.description} color ={item.color} />
        </>
      ))}
      </div>
    </div>
  );
};

export default CategorySlider;

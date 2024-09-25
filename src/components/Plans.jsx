import PlanCard from "./Common/PlanCard";
import { plans } from "../utils/constant";
import line from "../assets/imgs/plans_imgs/PlansFloatingElements/01_plans_line.svg";
import circle from "../assets/imgs/plans_imgs/PlansFloatingElements/02_plans_circle.svg";

const Plans = () => {
  return (
    <div className="relative mb-[240px]">
      <img src={line} alt="" srcset="" className="top-12 left-28 absolute" />
      <img src={circle} alt="" srcset="" className="top-48 left-52 absolute" />
      <div className="container">
        <h2 className="font-bold font-montserrat text-[34px] text-center">
          Choose a Tier that’s right for you
        </h2>
        <div className="flex justify-center gap-[30px] mt-[60px]">
          {plans?.map((plan) => (
            <PlanCard key={plan.id} {...plan} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Plans;

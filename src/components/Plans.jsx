import PlanCard from "./Common/PlanCard";
import { plans } from "../utils/constant";
import { PLAN_IMAGES } from "../utils/images";
const Plans = () => {
  const { planLine, planCircle } = PLAN_IMAGES;

  return (
    <div className="relative mb-[240px]">
      <img
        src={planLine}
        alt="Floating Line"
        srcset=""
        className="top-12 left-28 absolute lg:block sm:hidden"
      />
      <img
        src={planCircle}
        alt="Floating Circle"
        srcset=""
        className="top-48 left-52 absolute lg:block sm:hidden"
      />
      <div className="container">
        <h2 className="font-bold font-montserrat text-[34px] text-center">
          Choose a Tier that’s right for you
        </h2>
        <div className="flex justify-center gap-[30px] mt-[60px] lg:flex-row sm:flex-col sm:items-center lg:items-start">
          {plans?.map((plan) => (
            <PlanCard key={plan.id} {...plan} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Plans;

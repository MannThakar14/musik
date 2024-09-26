import { sponsorsImages } from "../utils/constant";
import CustomButton from "./Common/CustomButton";
import { SPONSORS_IMAGES } from "../utils/images";
const Sponsors = () => {
  const { sponsorBox, sponsorTriangle } = SPONSORS_IMAGES;

  return (
    <>
      <div className="mb-[240px] relative">
        <img
          src={sponsorBox}
          alt="Box"
          srcset=""
          className="absolute left-0 top-16 lg:block sm:hidden"
        />
        <div className="container ">
          <h2 className="font-bold font-montserrat text-[34px] text-center">
            Our Sponsors
          </h2>
          <div className="place-items-center gap-[60px] grid lg:grid-cols-4 lg:grid-rows-2 mt-[60px] sm:grid-cols-2">
            {sponsorsImages?.map((image) => (
              <img src={image} alt="sponsors" className="" />
            ))}
          </div>
          <div className="flex justify-center mt-[80px]">
            <CustomButton
              buttonText="Become a Sponsor"
              height="h-14"
              width="w-[225px]"
              isIcon={false}
              className="shadow-custom"
            />
          </div>
        </div>
        <img
          src={sponsorTriangle}
          alt="Triangle"
          className="absolute right-24 top-40 lg:block sm:hidden"
        />
      </div>
    </>
  );
};

export default Sponsors;

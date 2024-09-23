import { sponsorsImages } from "../utils/constant";
import CustomButton from "./Common/CustomButton";
import sponsorOne from "../assets/Imgs/SponsorsImg/SponsorFloatingElements/01_sponsor_box.png";
import sponsorTwo from "../assets/Imgs/SponsorsImg/SponsorFloatingElements/02_sponsor_triangle.png";

const Sponsors = () => {
  return (
    <>
      <div className="mb-[240px] relative">
        <img src={sponsorOne} alt="" srcset="" className="absolute left-0 top-16"/>
        <div className="container ">
          <h2 className="font-bold font-montserrat text-[34px] text-center">
            Our Sponsors
          </h2>
          <div className="place-items-center gap-[60px] grid grid-cols-4 grid-rows-2 mt-[60px]">
            {sponsorsImages?.map((image) => (
              <img src={image} alt="sponsors" className="" />
            ))}
          </div>
          <div className="flex justify-center mt-[80px]">
            <CustomButton
              buttonText="Become a Sponsor"
              height="56px"
              width="225px"
              isIcon={false}
              className="shadow-custom"
            />
          </div>
        </div>
        <img src={sponsorTwo} alt="" srcset="" className="absolute right-24 top-40"/>
      </div>
    </>
  );
};

export default Sponsors;

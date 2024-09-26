import { CONTACTUS_IMAGES } from "../utils/images";
import CustomForm from "./Common/CustomForm";
import CustomButton from "./Common/CustomButton";

const ContactUs = () => {
  const { shapeOne, shapeTwo, phoneIcon, emailIcon, locationIcon } =
    CONTACTUS_IMAGES;
  return (
    <>
      <div className="relative flex bg-[#f8f8f8] lg:flex-row sm:flex-col-reverse sm:gap-20 lg:gap-0">
        <div className="relative flex flex-col lg:gap-20 bg-secondary-500 lg:w-[845px] lg:h-[662px] sm:gap-8 pb-40">
          <img
            src={shapeOne}
            alt="Floating Element"
            className="right-0 bottom-0 absolute"
          />
          <div className="lg:mt-[120px] ml-20 sm:mt-20">
            <h2 className="font-bold font-montserrat text-[34px] text-white">
              Contact us
            </h2>
            <h4 className="opacity-70 mt-2 font-normal font-raleway text-2xl text-white">
              Have an inquiry? We’ll be happy to assist you
            </h4>
          </div>
          <div className="flex flex-col lg:gap-10 ml-20 font-bold text-base text-white sm:gap-5">
            <p className="flex gap-2">
              <img src={phoneIcon} alt="Phone Icon" srcset="" /> +92 333 6527366
            </p>
            <p className="flex gap-2">
              <img src={emailIcon} alt="Mail Icon" srcset="" />{" "}
              abuzer@greelogix.com
            </p>
            <p className="flex gap-2">
              <img src={locationIcon} alt="Location Icon" srcset="" />
              Plot 252, Block L Phase 2 Johar Town, Lahore, PK
            </p>
          </div>
        </div>
        <div className="mg:bg-red-500 lg:ml-[130px] md:w-[100px] lg:w-[570px] lg:h-[456px]">
          <h2 className="mt-[103px] font-extrabold font-montserrat text-[#222222] text-2xl sm:mx-auto sm:w-fit lg:w-auto">
            Fill in your details
          </h2>
          <div className="mt-10">
            <CustomForm
              name="name"
              value="John Doe"
              labelName="Name"
              type="text"
            />
            <CustomForm
              name="email"
              value="abuzer@greelogix.com"
              labelName="Email"
              type="email"
            />
          </div>
          <div className="mb-[30px] sm:flex sm:flex-col sm:justify-center sm:items-center lg:block">
            <label
              htmlFor="message"
              className="font-bold font-raleway text-[#222222] lg:text-xs sm:text-base "
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className="border-[#E0E0E0] focus:border-gray-500 border-b lg:w-full focus:outline-none bg-transparent pb-2 font-normal font-raleway text-base sm:w-1/2"
              defaultValue="Duis nec sodales nibh. Proin lectus tortor, rutrum vel vulputate vitae, fringilla id magna. Vestibulum ornare eget urna nec pulvinar. Praesent porttitor convallis blandit. Fusce vel egestas dolor. Donec eu augue enim. Donec rutrum non lacus ac rhoncus. Morbi quis luctus leo, nec cursus ex |"
            />
          </div>

          <div className="flex justify-center">
            <CustomButton
              buttonText="Submit"
              height="h-14"
              width="w-[570px]"
              isIcon={false}
            />
          </div>
        </div>
        <img
          src={shapeTwo}
          alt="Floating Element"
          className="right-14 bottom-0 absolute"
        />
      </div>
    </>
  );
};

export default ContactUs;

import CustomButton from "./Common/CustomButton";
import phoneIcon from "../assets/Imgs/ContactUsImg/01_contact_phone.svg";
import emailIcon from "../assets/Imgs/ContactUsImg/02_contact_email.svg";
import locationIcon from "../assets/Imgs/ContactUsImg/03_contact_point.svg";
import shapeOne from '../assets/Imgs/ContactUsImg/ContactUsFloatingElements/01_contactus_shape.svg';
import shapeTwo from '../assets/Imgs/ContactUsImg/ContactUsFloatingElements/02_contactus_shape.svg';


const ContactUs = () => {
  return (
    <>
      <div className="relative flex bg-[#f8f8f8]">
        <div className="relative flex flex-col gap-20 bg-secondary-500 w-[845px] h-[662px]">
          <img src={shapeOne} alt="" className="right-0 bottom-0 absolute"/>
          <div className="mt-[120px] ml-20">
            <h2 className="font-bold font-montserrat text-[34px] text-white">
              Contact us
            </h2>
            <h4 className="opacity-70 mt-2 font-normal font-raleway text-2xl text-white">
              Have an inquiry? We’ll be happy to assist you
            </h4>
          </div>
          <div className="flex flex-col gap-10 ml-20 font-bold text-base text-white">
            <p className="flex gap-2">
              <img src={phoneIcon} alt="" srcset="" /> +92 333 6527366
            </p>
            <p className="flex gap-2">
              <img src={emailIcon} alt="" srcset="" /> abuzer@greelogix.com
            </p>
            <p className="flex gap-2">
              <img src={locationIcon} alt="" srcset="" />
              Plot 252, Block L Phase 2 Johar Town, Lahore, PK
            </p>
          </div>
        </div>
        <div className="ml-[130px] w-[570px] h-[456px]">
          <h2 className="mt-[103px] font-extrabold font-montserrat text-[#222222] text-2xl">
            Fill in your details
          </h2>
          <form className="mt-[40px]">
            <div className="mb-4">
              <label
                htmlFor="name"
                className="font-bold font-raleway text-[#222222] text-xs"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="border-[#E0E0E0] focus:border-gray-500 border-b w-full focus:outline-none bg-transparent pb-2 font-normal font-raleway text-base"
                defaultValue="John Doe"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="font-bold font-raleway text-[#222222] text-xs"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="border-[#E0E0E0] focus:border-gray-500 border-b w-full focus:outline-none bg-transparent pb-2 font-normal font-raleway text-base"
                defaultValue="johndoe2347@mail.com"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="font-bold font-raleway text-[#222222] text-xs"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="border-[#E0E0E0] focus:border-gray-500 border-b w-full focus:outline-none bg-transparent pb-2 font-normal font-raleway text-base"
                defaultValue="Duis nec sodales nibh. Proin lectus tortor, rutrum vel vulputate vitae, fringilla id magna. Vestibulum ornare eget urna nec pulvinar. Praesent porttitor convallis blandit. Fusce vel egestas dolor. Donec eu augue enim. Donec rutrum non lacus ac rhoncus. Morbi quis luctus leo, nec cursus ex |"
              />
            </div>
            <CustomButton
              buttonText="Submit"
              height="56px"
              width="570px"
              isIcon={false}
            />
          </form>
        </div>
        <img src={shapeTwo} alt="" className="right-14 bottom-0 absolute"/>
      </div>
    </>
  );
};

export default ContactUs;



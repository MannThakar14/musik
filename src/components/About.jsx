import aboutConcertImage from "../assets/Imgs/About/01_about_concert.png";
import aboutConcertBackgroud from "../assets/Imgs/About/02_about_concert_backgroud.png";
import CustomButton from "./Common/CustomButton";

const About = () => {
  return (
    <>
      <div className="flex justify-between container h-[550px] mb-[240px]">
        <div className="relative">
          <img
            src={aboutConcertImage}
            alt=""
            srcSet=""
            className="top-[70px] left-[70px] absolute mb-10"
          />
          <img src={aboutConcertBackgroud} alt="" srcSet="" className="" />
        </div>
        <div className="w-[570px] h-[336px] flex flex-col self-center">
          <h2 className="font-bold font-montserrat text-[34px]">About Musik</h2>
          <p className="mt-[32px] font-normal font-raleway text-[#222222] text-base leading-6">
            Fusce justo mi, vehicula id arcu et, dapibus tristique lectus.
            Vivamus a elit sodales, tincidunt nunc non, maximus lacus. Fusce a
            augue sed dolor auctor iaculis vitae id mauris. Integer ut lectus
            non neque suscipit luctus. Mauris et erat id ipsum condimentum
            cursus. Sed tempus enim non massa mattis iaculis. In quis massa
            risus
          </p>
          <CustomButton buttonText="Learn More" height="60px" width="199px" />
        </div>
      </div>
    </>
  );
};

export default About;

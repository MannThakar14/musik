import { ABOUT_IMAGES } from "../utils/images";
import CustomButton from "./Common/CustomButton";

const About = () => {

  const { line, conertBlurBackground, concertBackground } = ABOUT_IMAGES;
  return (
    <>
      <div className="w-full relative lg:h-[550px] mb-[240px] sm:h-full">
        <div className="flex justify-between container h-full lg:flex-row sm:flex-col sm:items-center">
          <div className="relative">
            <img
              src={concertBackground}
              alt="about Background Image"
              srcSet=""
              className="top-[70px] left-[70px] absolute mb-10"
            />
            <img
              src={conertBlurBackground}
              alt="blured background"
              srcSet=""
              className=""
            />
          </div>
          <div className="w-[570px] h-[336px] flex flex-col self-center lg:mt-0 sm:mt-28 sm:items-center lg:items-start">
            <h2 className="font-bold font-montserrat text-[34px]">
              About Musik
            </h2>
            <p className="mt-[32px] font-normal font-raleway text-[#222222] text-base leading-6">
              Fusce justo mi, vehicula id arcu et, dapibus tristique lectus.
              Vivamus a elit sodales, tincidunt nunc non, maximus lacus. Fusce a
              augue sed dolor auctor iaculis vitae id mauris. Integer ut lectus
              non neque suscipit luctus. Mauris et erat id ipsum condimentum
              cursus. Sed tempus enim non massa mattis iaculis. In quis massa
              risus
            </p>
            <CustomButton
              buttonText="Learn More"
              height="h-[60px]"
              width="w-[199px]"
              isIcon
            />
          </div>
        </div>
        <img
          src={line}
          alt="Floating Line"
          srcset=""
          className="w-44 h-40 absolute left-24 bottom-0 lg:block sm:hidden"
        />
      </div>
    </>
  );
};

export default About;

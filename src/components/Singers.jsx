import { SINGERS_IMAGES } from "../utils/images";
import CustomButton from "./Common/CustomButton";

const Singers = () => {
  const {
    personOne,
    personTwo,
    personThree,
    personFour,
    personOneBackground,
    personTwoBackground,
    personThreeBackground,
    personFourBackground,
    aboutLineOne,
    triangle,
    box,
  } = SINGERS_IMAGES;

  return (
    <>
      <div className="lg:relative mb-[240px] ">
        <img
          src={box}
          alt="Floating Box"
          srcset=""
          className="lg:right-0 lg:absolute lg:top-[108px] sm:hidden lg:block"
        />
        <div className="flex items-center gap-[30px] container lg:flex-row sm:flex-col-reverse">
          <div className="flex flex-col justify-center lg:w-[470px] lg:h-[360px]">
            <h2 className="font-bold font-montserrat text-[34px]">Singers</h2>
            <p className="mt-[32px] font-normal font-raleway text-[#222222] text-base leading-6">
              Fusce justo mi, vehicula id arcu et, dapibus tristique lectus.
              Vivamus a elit sodales, tincidunt nunc non, maximus lacus. Fusce a
              augue sed dolor auctor iaculis vitae id mauris. Integer ut lectus
              non neque suscipit luctus. Mauris et erat id ipsum condimentum
              cursus. Sed tempus enim non massa mattis iaculis. In quis massa
              risus
            </p>
            <CustomButton
              buttonText="View All Singers"
              height="h-[60px]"
              width="w-[240px]"
              isIcon={true}
            />
          </div>
          <div className="relative grid grid-cols-1 grid-rows-2 w-[670px] h-[712px]">
            <div className="flex items-center gap-[30px]">
              <div className="relative">
                <img
                  src={personOne}
                  alt="Person One"
                  className="relative z-10 w-[370px] h-[270px]"
                />
                <img
                  src={personOneBackground}
                  alt="Person One Background"
                  className="top-[80px] z-0 absolute w-[370px] h-[270px]"
                />
              </div>
              <div className="">
                <img
                  src={personTwo}
                  className="top-[-10px] right-0 absolute w-[270px] h-[300px] z-10"
                  alt="Person Two"
                />
                <img
                  src={personTwoBackground}
                  alt="Person Two Background"
                  className="lg:top-[80px] lg:absolute lg:w-[270px] lg:h-[300px] lg:z-0 lg:block sm:hidden"
                />
              </div>
            </div>

            <div className="flex gap-[30px] mt-[10px]">
              <div className="relative">
                <img
                  src={personThree}
                  alt="Person Three"
                  className="w-[270px] h-[300px] z-10"
                />
                <img
                  src={personThreeBackground}
                  alt="Person Three Background"
                  className="absolute w-[270px] h-[300px] top-[80px] z-0"
                />
              </div>
              <div className="relative">
                <img
                  src={personFour}
                  alt="Person Four"
                  className="w-[370px] h-[270px] z-10"
                />
                <img
                  src={personFourBackground}
                  alt="Person Four Background"
                  className="absolute w-[370px] h-[270px] top-[80px] z-0"
                />
              </div>
            </div>
          </div>
        </div>
        <img
          src={aboutLineOne}
          alt="Floating Line"
          className="absolute -bottom-36 left-36 lg:block sm:hidden"
        />
        <img
          src={triangle}
          alt="Triangle"
          className="absolute right-[117px] -bottom-[250px] lg:block sm:hidden"
        />
      </div>
    </>
  );
};

export default Singers;

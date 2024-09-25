import personOne from "../assets/imgs/singers_imgs/01_singer.png";
import personTwo from "../assets/imgs/singers_imgs/02_singer.png";
import personThree from "../assets/imgs/singers_imgs/03_singer.png";
import personFour from "../assets/imgs/singers_imgs/04_singer.png";
import personOneBackground from "../assets/imgs/singers_imgs/05_singer_background.png";
import personTwoBackground from "../assets/imgs/singers_imgs/06_singer_backgroud.png";
import personThreeBackground from "../assets/imgs/singers_imgs/07_singer_background.png";
import personFourBackground from "../assets/imgs/singers_imgs/08_singer_background.png";
import line from "../assets/imgs/singers_imgs/SingersFloatingElements/01_singers_line.svg";
import triangle from "../assets/imgs/singers_imgs/SingersFloatingElements/02_singers_triangle.svg";
import box from "../assets/imgs/singers_imgs/SingersFloatingElements/03_singers_box.svg";
import CustomButton from "./Common/CustomButton";
const Singers = () => {
  return (
    <>
      <div className="relative mb-[240px]">
        <img
          src={box}
          alt=""
          srcset=""
          className="right-0 absolute top-[108px]"
        />
        <div className="flex items-center gap-[30px]  container">
          <div className="flex flex-col justify-center w-[470px] h-[360px]">
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
              height="60px"
              width="240px"
              isIcon={true}
            />
          </div>
          <div className="relative grid grid-cols-1 grid-rows-2 w-[670px] h-[712px]">
            <div className="flex items-center gap-[30px]">
              <div className="relative">
                <img
                  src={personOne}
                  alt=""
                  className="relative z-10 w-[370px] h-[270px]"
                />
                <img
                  src={personOneBackground}
                  alt=""
                  className="top-[80px] z-0 absolute w-[370px] h-[270px]"
                />
              </div>
              <div className="">
                <img
                  src={personTwo}
                  className="top-[-10px] right-0 absolute w-[270px] h-[300px] z-10"
                />
                <img
                  src={personTwoBackground}
                  alt=""
                  srcset=""
                  className="top-[80px] absolute w-[270px] h-[300px] z-0"
                />
              </div>
            </div>

            <div className="flex gap-[30px] mt-[10px]">
              <div className="relative">
                <img
                  src={personThree}
                  alt=""
                  className="w-[270px] h-[300px] z-10"
                />
                <img
                  src={personThreeBackground}
                  alt=""
                  srcset=""
                  className="absolute w-[270px] h-[300px] top-[80px] z-0"
                />
              </div>
              <div className="relative">
                <img
                  src={personFour}
                  alt=""
                  className="w-[370px] h-[270px] z-10"
                />
                <img
                  src={personFourBackground}
                  alt=""
                  srcset=""
                  className="absolute w-[370px] h-[270px] top-[80px] z-0"
                />
              </div>
            </div>
          </div>
        </div>
        <img src={line} alt="" className="absolute -bottom-36 left-36" />
      <img src={triangle} alt="" srcset=""  className="absolute right-[117px] -bottom-[250px]"/>
      </div>
    </>
  );
};

export default Singers;

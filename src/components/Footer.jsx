import {FOOTER_IMAGES} from "../utils/images";
import { FOOTER_LINKS } from "../utils/constant";
const Footer = () => {
  const { logoImg, facebook, twitter, instagram, linkedin } = FOOTER_IMAGES;
  
  return (
    <>
      <footer className="bg-[#222222] lg:h-[180px] sm:mb-[350px] lg:mb-0 sm:h-auto">
        <div className="container flex flex-col justify-center h-full gap-[55px] ">
          <div className="sm:mt-10 lg:mt-0">
            <img src={logoImg} alt="Logo" />
          </div>
          <div className="flex justify-between lg:flex-row sm:flex-col">
            <div className="flex gap-[30px] sm:flex-col lg:flex-row">
              {FOOTER_LINKS?.map((item, index) => (
                <a
                  href=""
                  className="font-montserrat text-white font-semibold"
                  key={index}
                >
                  {item.name}
                </a>
              ))}
            </div>
            <div className="flex gap-[30px] lg:mt-0 sm:mt-10">
              {[facebook, twitter, instagram, linkedin].map((item, index) => (
                <img src={item} alt="Icons" key={index} className="sm:w-[50px] lg:w-auto"/>
              ))}
            </div>
            <p className="font-raleway text-white opacity-30 font-normal">
              © musik.com, 2021
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

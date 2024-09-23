import React from "react";
import logoImg from "../assets/Imgs/01_navbar_logo.svg";
import facebook from "../assets/Imgs/FooterImg/01_Facebook.svg";
import twitter from "../assets/Imgs/FooterImg/04_Twitter.svg";
import instagram from "../assets/Imgs/FooterImg/02_Instagram.svg";
import linkedin from "../assets/Imgs/FooterImg/03_Linkedin.svg";

const Footer = () => {
  return (
    <>
      <footer className="bg-[#222222] h-[180px]">
        <div className="container flex flex-col justify-center h-full gap-[55px]">
          <div className="">
            <img src={logoImg} alt="" />
          </div>
          <div className="flex justify-between"> 
            <div className="flex gap-[30px]">
              <a href="" className="font-montserrat text-white font-semibold">
                HOME
              </a>
              <a href="" className="font-montserrat text-white font-semibold">
                COMPANY
              </a>
              <a href="" className="font-montserrat text-white font-semibold">
                BLOG
              </a>
              <a href="" className="font-montserrat text-white font-semibold">
                CONTACT US
              </a>
              <a href="" className="font-montserrat text-white font-semibold">
                SITEMAP
              </a>
            </div>
            <div className="flex gap-[30px]">
              <img src={facebook} alt="" />
              <img src={twitter} alt="" />
              <img src={instagram} alt="" />
              <img src={linkedin} alt="" />
            </div>
            <p className="font-raleway text-white opacity-30 font-normal">© musik.com, 2021 </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

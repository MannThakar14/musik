import logoImg from "../assets/imgs/01_navbar_logo.svg";

const NavBar = () => {
  return (
    <>
      <div className="h-[120px] font-montserrat font-semibold text-white container">
        <nav className="flex justify-between items-center h-full">
          <div>
            <img src={logoImg} alt="" srcSet="" />
          </div>
          <div>
            <ul className="flex flex-row items-center gap-10 text-sm">
              <li className="">HOME</li>
              <li>SPEAKERS</li>
              <li>SCHEDULE</li>
              <li>CONTACT US</li>
              <li>
                <button className="bg-white rounded-lg w-44 h-14 font-bold text-base text-secondary-500 ml-[10px]">
                  GET TICKETS
                </button>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
};

export default NavBar;

import { NAVBAR_IMAGES } from "../utils/images";
import { NAV_LINKS } from "../utils/constant";
const NavBar = () => {
  return (
    <>
      <div className="h-[120px] font-montserrat font-semibold text-white container">
        <nav className="flex justify-between items-center h-full">
          <div>
            <img src={NAVBAR_IMAGES.navLogoImage} alt="Logo" srcSet="" />
          </div>
          <div>
            <ul className="flex flex-row items-center gap-10 text-sm">
              {NAV_LINKS?.map((item, index) => (
                <li key={index}>
                  <a href={item.link}>{item.name}</a>
                </li>
              ))}
              <li>
                <button className="bg-white ml-[10px] rounded-lg w-44 h-14 font-bold text-base text-secondary-500">
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

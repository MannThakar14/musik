import { ArrowRight } from "lucide-react";
import React from "react";
const CustomButton = ({ buttonText, height, width ,isIcon }) => {
    return (
        <button 
            style={{ height, width }}
            className="flex justify-center items-center gap-[12px] hover:border-secondary-500 bg-secondary-500 hover:bg-white mt-[80px] hover:border rounded-lg font-bold font-montserrat text-base text-white hover:text-secondary-500"
        >
            {buttonText} {isIcon ? <ArrowRight /> : ""} 
        </button>
    );
};


export default CustomButton;

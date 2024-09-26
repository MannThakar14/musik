const CustomForm = ({ name, value, labelName, type }) => {
  return (
    <>
      <form className="">
        <div className="mb-[30px] sm:flex sm:flex-col sm:justify-center sm:items-center lg:block">
          <label
            htmlFor="name"
            className="font-bold font-raleway text-[#222222] lg:text-xs sm:text-base "
          >
            {labelName}
          </label>
          <input
            type={type}
            id={name}
            name={name}
            className="border-[#E0E0E0] focus:border-gray-500 border-b lg:w-full focus:outline-none bg-transparent pb-2 font-normal font-raleway text-base sm:w-1/2"
            defaultValue={value}
          />
        </div>
      </form>
    </>
  );
};

export default CustomForm;

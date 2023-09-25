const Banner = () => {
  return (
    <div className=" border w-full h-72 flex justify-center items-center">
      <div className="">
        <h2 className="text-4xl font-semibold">
          I Grow By Helping People In Need
        </h2>
        <div className="flex justify-center mt-3">
            <input className="border rounded-l-md py-2 pl-5 w-96" type="text" name="" id="" placeholder="Search here...." />
            <button className="py-2 rounded-r-md px-3 font-medium  text-white bg-[#ff676c] hover:bg-[#ff2c33]">Search</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;

import { useEffect, useState } from "react";
import Categories from "../../Components/Categories/Categories";
import "./Home.css";

const Home = () => {
  const [categories, setCategories] = useState([]);
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("fakeData.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  const handleSearch = (e) => {
    e.preventDefault();
    const text = e.target.text.value.toLowerCase();
    const filteredResults = categories.filter(
      (item) => item.category_name.toLowerCase() === text
    );
    setData(filteredResults);
  };
  return (
    <div>
      <div className="bg w-full h-32 md:h-72 flex justify-center items-center rounded-sm">
        <div className="">
          <h2 className="text-xl md:text-4xl font-semibold">
            I Grow By Helping People In Need
          </h2>
          <div className="flex justify-center mt-3 text-sm md:text-base">
            <form onSubmit={handleSearch}>
              <input
                className="rounded-l-sm py-1 pl-3 md:rounded-l-md md:py-2 md:pl-5 md:w-96 shadow-md"
                type="text"
                name="text"
                id=""
                placeholder="Search here...."
              />
              <input
                className="py-1 px-2 rounded-r-sm md:py-2 md:rounded-r-md md:px-3 font-medium  text-white bg-[#ff676c] hover:bg-[#ff2c33] shadow-md"
                value="Search"
                type="submit"
              />
            </form>
          </div>
        </div>
      </div>
      <Categories categories={categories} data={data}></Categories>
    </div>
  );
};

export default Home;

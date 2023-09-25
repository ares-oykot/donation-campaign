import { useEffect, useState } from "react";
import Categories from "../../Components/Categories/Categories";


const Home = () => {
    const [categories, setCategories] = useState([]);
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('fakeData.json')
        .then(res => res.json())
        .then(data => setCategories(data))

    }, []);
    const handleSearch = (e) => {
        e.preventDefault();
        const text = e.target.text.value.toLowerCase();
        const filteredResults = categories.filter((item) => item.category_name.toLowerCase() === text);
        setData(filteredResults);
    }
  return (
    <div>
      <div className="w-full h-72 flex justify-center items-center bg-lime-50">
        <div className="">
          <h2 className="text-4xl font-semibold">
            I Grow By Helping People In Need
          </h2>
          <div className="flex justify-center mt-3">
            <form onSubmit={handleSearch}>
              <input
                className="border rounded-l-md py-2 pl-5 w-96"
                type="text"
                name="text"
                id=""
                placeholder="Search here...."
              />
              <input
                className="py-2 rounded-r-md px-3 font-medium  text-white bg-[#ff676c] hover:bg-[#ff2c33]"
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

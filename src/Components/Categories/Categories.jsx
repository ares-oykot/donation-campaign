import { useEffect } from "react";
import { useState } from "react";
import Category from "./Category/Category";

const Categories = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch('fakeData.json')
        .then(res => res.json())
        .then(data => setCategories(data));
    }, []);
    console.log(categories);
    return (
        <div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-4 gap-6">
                {
                    categories?.map(category => <Category key={category.id} category={category} ></Category>)
                }
            </div>
        </div>
    );
};

export default Categories;
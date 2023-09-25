import { useEffect } from "react";
import { useState } from "react";

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
            
        </div>
    );
};

export default Categories;
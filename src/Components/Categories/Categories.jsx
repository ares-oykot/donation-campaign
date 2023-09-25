import Category from "./Category/Category";

const Categories = ({categories, data}) => {
    const dataToMap = data.length ? data : categories;
    return (
        <div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-4 gap-6">
                {
                    dataToMap?.map(category => <Category key={category.id} category={category} ></Category>)
                }
            </div>
        </div>
    );
};

export default Categories;
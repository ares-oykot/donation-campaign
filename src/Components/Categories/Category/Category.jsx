import { useNavigate } from "react-router-dom";

const Category = ({category}) => {
    const {id, picture, title, category_name, color_for_text, color_for_card_bg, color_for_btn_bg} = category || {}
    const color = {color: color_for_text, backgroundColor: color_for_card_bg}
    const btnBgColor = {backgroundColor: color_for_btn_bg}
    const navigate = useNavigate();
    const handleDetails = () => {
        navigate(`/details/${id}`)
    }

    return (
        <div onClick={handleDetails}>
            <div className="w-full">
                <img src={picture} alt="" />
                <div style={color} className="pt-3 pb-2 pl-3 rounded-b-md">
                    <button style={btnBgColor} className="px-2 rounded">{category_name}</button>
                    <h4 className="mt-1 font-semibold">{title}</h4>
                </div>
            </div>
        </div>
    );
};

export default Category;
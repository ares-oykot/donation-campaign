import { Link } from "react-router-dom";

const DetailsCard = ({card}) => {
    const {id, picture_cart, title, category_name, color_for_text, color_for_card_bg, color_for_btn_bg, price} = card || {};
    const color = {color: color_for_text, backgroundColor: color_for_card_bg};
    const btnBgColor = {backgroundColor: color_for_btn_bg};
    const detailsBtnBgColor = {backgroundColor: color_for_text};
    return (
        <div>
            <div style={color} className="flex rounded-r-md">
                <div className="rounded-l-md"><img className="rounded-l-md h-full w-full" src={picture_cart} alt=""/></div>
                <div className="w-full pl-6 py-6">
                    <button className="px-5 rounded" style={btnBgColor}>{category_name}</button>
                    <h5 className="font-semibold">${price}</h5>
                    <h4 className="text-black text-xl font-semibold">{title}</h4>
                    <Link to="/"><button className="text-white px-4 py-2 rounded-md" style={detailsBtnBgColor}>View Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default DetailsCard;
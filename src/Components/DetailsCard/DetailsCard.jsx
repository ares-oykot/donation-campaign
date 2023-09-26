import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const DetailsCard = ({card}) => {
    const {picture_cart, title, category_name, color_for_text, color_for_card_bg, color_for_btn_bg, price} = card || {};
    const color = {color: color_for_text, backgroundColor: color_for_card_bg};
    const btnBgColor = {backgroundColor: color_for_btn_bg};
    const detailsBtnBgColor = {backgroundColor: color_for_text};
    return (
        <div>
            <div style={color} className="flex rounded-l-md rounded-r-md">
                <div className="rounded-l-md"><img className="rounded-l-md h-full w-full" src={picture_cart} alt=""/></div>
                <div className="w-full pl-6 py-6">
                    <span className="text-[15px] md:text-base px-5 rounded" style={btnBgColor}>{category_name}</span>
                    <h5 className="font-semibold">${price}</h5>
                    <h4 className="text-black  md:text-xl font-semibold">{title}</h4>
                    <Link to="/"><button className="md:text-base text-white px-2 md:px-4 py-1 md:py-2 rounded md:rounded-md" style={detailsBtnBgColor}>View Details</button></Link>
                </div>
            </div>
        </div>
    );
};

DetailsCard.propTypes = {
    card: PropTypes.object
}
export default DetailsCard;
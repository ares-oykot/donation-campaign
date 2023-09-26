import { useLoaderData, useParams } from "react-router-dom";
import { saveCardsId } from "../../Utility/LocalStorage";
import swal from 'sweetalert';

const Details = () => {
    const {id} = useParams();
    const idInt = parseInt(id);
    const cards = useLoaderData();
    const card = cards.find(card => card.id == idInt);
    const {title, description, color_for_text, details_img, price} = card || {};
    const btnBgColor = {backgroundColor: color_for_text}

    const handleDonate = () => {
        saveCardsId(idInt);
        // alert(`Thanks for Donate $ ${price}`)
        swal("We are grateful to you!", "Thanks for being by our side", "success");
    }

    return (
        <div className="my-10">
            <div className="relative">
            <div className=""><img className="w-full h-[70vh] rounded-lg" src={details_img} alt="" /></div>
            <div style={{backgroundColor: 'rgba(11, 11, 11, 0.50)'}} className="flex items-center absolute rounded-b-lg bottom-0 left-0 h-24 w-full">
            <button onClick={handleDonate} style={btnBgColor} className="px-12 text-white py-3 ml-5 text-lg rounded-md font-medium">Donate ${price}</button>
            </div>
            </div>
            <h2 className="text-3xl font-semibold mt-3">{title}</h2>
            <p className="italic">{description}</p>
        </div>
    );
};

export default Details;
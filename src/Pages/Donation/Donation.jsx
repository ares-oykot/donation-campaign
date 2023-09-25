import { useEffect, useState } from "react";
import { getStoredCardsId } from "../../Utility/LocalStorage";
import { useLoaderData } from "react-router-dom";
import DetailsCard from "../../Components/DetailsCard/DetailsCard";

const Donation = () => {
    const [displayCards, setDisplayCards] = useState([]);
    const [display, setDisplay] = useState(4);
    console.log(displayCards);
    const cards = useLoaderData();
    useEffect(() => {
        const storedCardsIds =  getStoredCardsId();
        if(cards.length > 0){
            const donateCards = [];
            for(let id of storedCardsIds){
                const card = cards.find((card) => card.id == id);
                if(card){
                    donateCards.push(card);
                }
            }
            setDisplayCards(donateCards);
        }
    },[cards])
    const handleSeeAll = () => {
        setDisplay(displayCards.length);
    }
    return (
        <div className="mb-10">
            {
                displayCards.length > 0 ? <div className="grid grid-cols-2 gap-5 mt-10">
                    {
                        displayCards.slice(0, display).map((card, idx) => <DetailsCard key={idx} card={card} ></DetailsCard>)
                    }
                </div> : <div className="">No Donation Available</div>
            }
            <div className={`flex justify-center mt-4 ${display === displayCards.length && 'hidden'}`}><button onClick={handleSeeAll} className="bg-green-600 hover:bg-green-800 text-white px-9 py-2 rounded">See All</button></div>
        </div>
    );
};

export default Donation;
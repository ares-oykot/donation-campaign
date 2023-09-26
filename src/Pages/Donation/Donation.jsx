import { useEffect, useState } from "react";
import { getStoredCardsId } from "../../Utility/LocalStorage";
import { Link, useLoaderData } from "react-router-dom";
import DetailsCard from "../../Components/DetailsCard/DetailsCard";

const Donation = () => {
    const [displayCards, setDisplayCards] = useState([]);
    const [display, setDisplay] = useState(4);
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
                </div> : <div className="">
                    <div className="flex justify-center mt-[30vh]">
                        <h1 className="text-5xl font-black text-lime-400">Donation information is not available.</h1>
                    </div>
                    <div className="flex justify-center mt-10">
                        <Link to="/"><button className="text-3xl bg-purple-400 px-3 py-2 text-white rounded-md hover:text-4xl hover:bg-purple-600 hover:text-rose-400 duration-500">Donate Us</button></Link>
                    </div>
                </div>
            }
            <div className={`flex justify-center ${displayCards.length <= 4 && 'hidden'} mt-4 ${display === displayCards.length && 'hidden'}`}><button onClick={handleSeeAll} className="bg-green-600 hover:bg-green-800 text-white px-9 py-2 rounded">See All</button></div>
        </div>
    );
};

export default Donation;
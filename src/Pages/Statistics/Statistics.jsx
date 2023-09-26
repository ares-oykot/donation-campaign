import { useEffect, useState } from "react";
import { getStoredCardsId } from "../../Utility/LocalStorage";

const Statistics = () => {
    const [donation, setDonation] = useState([]);
    useEffect(() => {
        setDonation(getStoredCardsId());
    }, [])
    return (
        <div>
            <h2>statistics : {donation.length}</h2>
        </div>
    );
};

export default Statistics;
const getStoredCardsId = () => {
    const storedCardId = localStorage.getItem('cardsId');
    if(storedCardId){
        return JSON.parse(storedCardId);
    }
    else{
        return [];
    }
};
const saveCardsId = (id) =>{
    const storedCardId = getStoredCardsId();
    const exists = storedCardId.find(cardId => cardId === id);
    if(!exists){
        storedCardId.push(id);
        localStorage.setItem('cardsId', JSON.stringify(storedCardId));
    }
};

export {getStoredCardsId, saveCardsId};
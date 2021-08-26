import axios from "axios";



export const setLoaded = (payload) => ({
    type: 'SET_LOADED',
    payload,
});

export const fetchCards = (filterValue, roomsArr, min, max, priceMin, priceMax) => (dispatch) => {
    dispatch({
        type: 'SET_LOADED',
        payload: false,
    });

    axios.get(`http://jsproject.webcademy.ru/items?${filterValue !== null ? `complex=${filterValue}` : ''}
        &${roomsArr !== null ? `rooms=${roomsArr}` : ''}
        &${min !== null ? `sqmin=${min}` : ''}
        &${max !== null ? `sqmax=${max}` : ''}
        &${priceMin !== null ? `pricemin=${priceMin}` : ''}
        &${priceMax !== null ? `pricemax=${priceMax}` : ''}`)
        .then(({data}) => {
            dispatch(setCards(data));
        }).catch(error => console.log(error));
};


export const setCards = (items) => ({
    type: 'SET_CARDS',
    payload: items,
});


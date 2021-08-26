import axios from "axios";


export const fetchCard = (id) => (dispatch) => {

    axios.get(`http://jsproject.webcademy.ru/items/${id}`)
        .then(({data}) => {
            dispatch(setCard(data));
        });
};

export const setCard = (item) => (
    {
        type: 'SET_CARD',
        payload: item,
    }
);

export const setIsOpen = (value) => (
    {
        type: 'SET_IS_OPEN',
        payload: value,
    }
);


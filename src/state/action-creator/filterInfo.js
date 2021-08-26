import axios from "axios";


export const setLoadedInfo = (payload) => ({
    type: 'SET_LOADED',
    payload,
});

export const fetchFilterInfo = () => (dispatch)  => {
    dispatch({
        type: 'SET_LOADED',
        payload: false
    })

    axios.get(`http://jsproject.webcademy.ru/itemsinfo`)
        .then(({data}) => {
            dispatch(setFilterInfo(data));
        }).catch(error => console.log(error));
};



export const setFilterInfo = (items) => ({
    type: 'SET_FILTER_INFO',
    payload: items,
});

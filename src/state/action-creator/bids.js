import axios from "axios";



export const setLoaded = (payload) => ({
  type: 'SET_LOADED',
  payload,
});

export const fetchBids = () => (dispatch) => {
  dispatch({
    type: 'SET_LOADED',
    payload: false,
  });

  axios.get(`http://jsproject.webcademy.ru/bids`)
      .then(({data}) => {
        dispatch(getBids(data));
      }).catch(error => console.log(error));
};


export const getBids = (items) =>  ({
  type: 'GET_BIDS',
  payload: items,
});

export const setBids = (item) =>(dispatch)=> {

  axios.post('http://jsproject.webcademy.ru/bidnew', item).then(({data}) => {
    if (data.message = 'Big created'){
      dispatch(setSuccess(true));
    }else{
      console.log(data)
    }
  }).catch(error => console.log(error));
}

export const setSuccess = (value) => ({
  type: 'SET_SUCCESS',
  payload: value,
});

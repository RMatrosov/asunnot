const initialState = {
  bids: [],
  isLoaded: false,
  success: false
};

const bids = (state = initialState, action) => {

  switch (action.type) {
    case 'GET_BIDS':
      return {
        ...state,
        bids: action.payload,
        isLoaded: true
      };

    case 'SET_LOADED':
      return {
        ...state,
        isLoaded: action.payload,
      };

    case 'SET_SUCCESS':
      return {
        ...state,
        success: action.payload,
      };

    default:
      return state;
  }
};

export default bids;
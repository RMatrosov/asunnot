

const initialState = {
    items: {},
    isLoaded: false,
};

const filterInfo = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_FILTER_INFO':
            return {
                ...state,
                items: action.payload,
                isLoaded: true
            };

        case 'SET_LOADED':
            return {
                ...state,
                isLoaded: action.payload,
            };

        default:
            return state;
    }
};

export default filterInfo;

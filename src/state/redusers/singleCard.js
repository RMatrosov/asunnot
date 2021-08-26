

const initialState = {
    item: {},
    isOpen: false,
};

const card = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_CARD':
            return {
                ...state,
                item: action.payload,
                isOpen: true
            };

        case 'SET_IS_OPEN':
            return {
                ...state,
                isOpen: action.payload

            };

        default:
            return state;
    }
};

export default card;

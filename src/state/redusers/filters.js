const initialState = {
    filterValueR: null,
    roomsArrR: null,
    minR: null,
    maxR: null,
    priseMinR: null,
    priceMaxR: null
};
const valueArr = []

const filters = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_FILTER_VALUE':
            return {
                ...state,
                filterValueR: action.payload,
            };

        case 'SET_ROOMS':

            const value = parseInt(action.payload.value)
            const checked = action.payload.checked
            if (checked) {
                valueArr.push(value)
            } else if (!checked) {
                let index = valueArr.indexOf(value);
                if (index > -1) {
                    valueArr.splice(index, 1);
                }
            }
            let valueString = valueArr.join(',')
            if (valueString === '') {
                valueString = null
            }

            return {
                ...state,
                roomsArrR: valueString,
            };
        case 'SET_MIN':
            return {
                ...state,
                minR: action.payload,
            };
        case 'SET_MAX':
            return {
                ...state,
                maxR: action.payload,
            };
        case 'SET_PRICE_MIN':
            return {
                ...state,
                priseMinR: action.payload,
            };
        case 'SET_PRICE_MAX':
            return {
                ...state,
                priceMaxR: action.payload,
            };

        default:
            return state;
    }

};

export default filters;
const initialState = {
    popupIsOpen: false,
    card: {},

}

const popup = (state = initialState, action) => {

    switch (action.type) {
        case "open":
            return {
                popupIsOpen: action.payload,
            }
        case "close":
            return {
                popupIsOpen: action.payload,
            }
        default:
            return state
    }
}

export default popup;
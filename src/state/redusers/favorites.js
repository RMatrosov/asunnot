const initialState = {
  favoriteCards: null,
  favoriteId: {}
}

const arr = []


const favorites = (state = initialState, action) => {

  switch (action.type) {
    case "SET_FAVORITES":
      let id = arr.some(el => el.id === action.payload.id)
      let newItems
      if (!id) {
        arr.push(action.payload)
        newItems = {
          ...state.favoriteId,
          [action.payload.id]: {
            items: action.payload.id,
          },
        };
      }
      return {
        ...state,
        favoriteCards: arr,
        favoriteId:newItems
      }

    default:
      return state
  }
}

export default favorites;
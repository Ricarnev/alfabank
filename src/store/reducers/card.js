import {
  LIKE,
  ONLY_LIKED,
  REMOVE_CARD,
  SET_CARDS,
} from "../actions/actionTypes";

function reducer(
  state = {
    characters: [],
    likedCharacters: [],
    showOnlyLiked: false,
    initialized: false,
  },
  action
) {
  switch (action.type) {
    case REMOVE_CARD:
      return {
        ...state,
        characters: state.characters.filter(
          (item) => item.id !== action.payload
        ),
        likedCharacters: state.likedCharacters.filter(
          (item) => item.id !== action.payload
        ),
      };

    case LIKE:
      return {
        ...state,
        characters: state.characters.map((item) => {
          if (item.id === action.payload) {
            return { ...item, like: !item.like };
          }
          return item;
        }),
        likedCharacters: state.likedCharacters.filter(
          (item) => item.id !== action.payload
        ),
      };

    case SET_CARDS:
      return { ...state, characters: action.payload, initialized: true };

    case ONLY_LIKED:
      return {
        ...state,
        likedCharacters: state.characters.filter((item) => item.like === true),
        showOnlyLiked: !state.showOnlyLiked,
      };

    default:
      return state;
  }
}

export default reducer;

import { LIKE, ONLY_LIKED, REMOVE_CARD, SET_CARDS } from "./actionTypes";

export function likeCard(id) {
  return {
    type: LIKE,
    payload: id,
  };
}

export function removeCard(id) {
  return {
    type: REMOVE_CARD,
    payload: id,
  };
}

export function setCards(value) {
  return {
    type: SET_CARDS,
    payload: value,
  };
}

export function showOnlyLiked() {
  return {
    type: ONLY_LIKED,
  };
}

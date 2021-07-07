import { REVIEWS_FETCH_SUCCEEDED } from "../types";

const initalState = {
    reviews: [],
    total: 0
}

export default function reviewReducer(state = initalState, action){
    let {type, payload} = action;
    switch(type){
        case REVIEWS_FETCH_SUCCEEDED: {
            return Object.assign({...state}, {reviews: payload.reviews, total: payload.total});
        }
        default: {
            return state;
        }
    }
}
import { LATEST_TRAILERS_FETCH_SUCCEEDED, POPULAR_MOVIES_FETCH_SUCCEEDED, TOPRATED_MOVIES_FETCH_SUCCEEDED } from "../types";

const initailState = {
    popularMovies: [],
    topRatedMovies: [],
    latestTrailers: []
}

export default function homeReducer(state = initailState, action){
    let {type, payload} = action;
    switch(type){
        case POPULAR_MOVIES_FETCH_SUCCEEDED: {
            return Object.assign({...state}, {popularMovies: payload});
        }
        case TOPRATED_MOVIES_FETCH_SUCCEEDED: {
            return Object.assign({...state}, {topRatedMovies: payload});
        }
        case LATEST_TRAILERS_FETCH_SUCCEEDED: {
            return Object.assign({...state}, {latestTrailers: payload});
        }
        default: {
            return state;
        }
    }
}
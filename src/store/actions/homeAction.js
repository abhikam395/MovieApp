import { 
    LATEST_TRAILERS_FETCH_SUCCEEDED, 
    POPULAR_MOVIES_FETCH_SUCCEEDED, 
    TOPRATED_MOVIES_FETCH_SUCCEEDED 
} from "../types"

export function popularMovies(movies){
    return {
        type: POPULAR_MOVIES_FETCH_SUCCEEDED,
        payload: movies
    }
}

export function topRatedMovies(movies){
    return {
        type: TOPRATED_MOVIES_FETCH_SUCCEEDED,
        payload: movies
    }
}

export function latestTrailers(movies){
    return {
        type: LATEST_TRAILERS_FETCH_SUCCEEDED,
        payload: movies
    }
}
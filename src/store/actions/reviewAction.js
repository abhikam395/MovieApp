import { REVIEWS_FETCH_SUCCEEDED } from "../types";

export function saveReviews({reviews, total}){
    return {
        type: REVIEWS_FETCH_SUCCEEDED,
        payload: {
            reviews: reviews,
            total: total
        }
    }
}

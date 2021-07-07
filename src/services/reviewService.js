import { API_KEY, BASE_API } from "../config/config";

export function fetchReviews(id){
    return fetch(`${BASE_API}/movie/${id}/reviews?api_key=${API_KEY}`).then(response => response.json());
}
import { API_KEY, BASE_API } from "../config/config";

export function fetchPopularMovies(){
    return fetch(`${BASE_API}/movie/popular?api_key=${API_KEY}`).then(response => response.json());
}

export function fetchTopRatedMovies(){
    return fetch(`${BASE_API}/movie/top_rated?api_key=${API_KEY}`).then(response => response.json());
}

export function fetchPopularTVShows(){
    return fetch(`${BASE_API}/tv/popular?api_key=${API_KEY}`).then(response => response.json());
}
import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { fetchTopRatedMovies, fetchPopularMovies, fetchPopularTVShows } from '../../services/homeService';
import { latestTrailers, popularMovies, topRatedMovies } from '../actions/homeAction';
import { 
    LATEST_TRAILERS_FETCH_FAILED, 
    LATEST_TRAILERS_FETCH_REQUEST, 
    POPULAR_MOVIES_FETCH_FAILED, 
    POPULAR_MOVIES_FETCH_REQUEST, 
    TOPRATED_MOVIES_FETCH_FAILED, 
    TOPRATED_MOVIES_FETCH_REQUEST 
} from '../types';

function* getPopularMovies(){
    try {
        const movies = yield call(fetchPopularMovies);
        yield put(popularMovies(movies.results));
    } catch (error) {
        yield put({type: POPULAR_MOVIES_FETCH_FAILED, message: e.message});
    }
}

function* getTopRatedMovies(){
    try {
        const movies = yield call(fetchTopRatedMovies);
        yield put(topRatedMovies(movies.results));
    } catch (error) {
        yield put({type: TOPRATED_MOVIES_FETCH_FAILED, message: e.message});
    }
}

function* getLatestTrailers(){
    try {
        const movies = yield call(fetchPopularTVShows);
        yield put(latestTrailers(movies.results));
    } catch (error) {
        yield put({type: LATEST_TRAILERS_FETCH_FAILED, message: e.message});
    }
}

function* homeSaga() {
    yield takeLatest(POPULAR_MOVIES_FETCH_REQUEST, getPopularMovies);
    yield takeLatest(TOPRATED_MOVIES_FETCH_REQUEST, getTopRatedMovies);
    yield takeLatest(LATEST_TRAILERS_FETCH_REQUEST, getLatestTrailers);
}

export default homeSaga;
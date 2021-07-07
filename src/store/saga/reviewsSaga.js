import { call, put, takeLatest } from 'redux-saga/effects';
import { fetchReviews } from '../../services/reviewService';
import {saveReviews} from './../actions/reviewAction'
import { 
    REVIEWS_FETCH_FAILED, 
    REVIEWS_FETCH_REQUEST, 
} from '../types';

function* getReviews(action){
    let {payload} = action;
    try {
        const response = yield call(fetchReviews, payload.id);
        yield put(saveReviews({reviews: response.results, total: response.total_results}));
    } catch (error) {
        // yield put({type: REVIEWS_FETCH_FAILED, message: e.message});
        console.log(error)
    }
}

function* reviewsSaga() {
    yield takeLatest(REVIEWS_FETCH_REQUEST, getReviews);
}

export default reviewsSaga;
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import reducers from './reducers';
import homeSaga from "./saga/homeSaga";
import reviewsSaga from './saga/reviewsSaga';

// create the saga middleware
const sagaMiddleware = createSagaMiddleware()

const store = createStore(
    reducers,
    applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(homeSaga);
sagaMiddleware.run(reviewsSaga);

export default store;

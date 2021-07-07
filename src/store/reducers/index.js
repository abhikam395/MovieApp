import { combineReducers } from "redux";
import homeReducer from "./homeReducer";
import reviewReducer from "./reviewReducer";

const rootReducer = combineReducers({
    home: homeReducer,
    review: reviewReducer
})
export default rootReducer;
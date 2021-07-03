import { combineReducers } from "redux";
import categoryReducer from "./categories/categoryReducer";

const rootReducer = combineReducers({
    category: categoryReducer,
});

export default rootReducer;
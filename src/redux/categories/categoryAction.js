import {CATEGORY, SHOW_LOADING} from '../actionTypes'
import { getCategories } from "../../service/api";


export const fetchCategories = () => {
    return async dispatch => {
        try {
            dispatch({type: SHOW_LOADING, payload: true});
            const categories = await getCategories();

            dispatch({ type: CATEGORY, payload: categories});
            dispatch({type: SHOW_LOADING, payload: false});
        }
        catch (e) {
            dispatch({type: SHOW_LOADING, payload: false});
            console.log(e);
        }
    }
}


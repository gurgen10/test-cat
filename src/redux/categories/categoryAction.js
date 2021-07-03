import {CATEGORY, SHOW_LOADING, CAT_ID, PAGE, CATEGORY_IMAGES} from '../actionTypes'
import { getCategories, getCategoryImages } from "../../service/api";


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


export const fetchCategoryImages = (page,id) => {
    return async dispatch => {
        try {
            dispatch({type: SHOW_LOADING, payload: true});
            const categoryImages = await getCategoryImages(page,id);

            dispatch({ type: CATEGORY_IMAGES, payload: categoryImages});
            dispatch({type: SHOW_LOADING, payload: false});
        }
        catch (e) {
            dispatch({type: SHOW_LOADING, payload: false});
            console.log(e);
        }
    }
}

export const setCatId = (id) => {
    return {
        type: CAT_ID,
        id
    }
}

export const setPage = (page) => {
    return {
        type: PAGE,
        page
    }
}


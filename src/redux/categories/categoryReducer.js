import { CATEGORY,SHOW_LOADING, CAT_ID, PAGE, CATEGORY_IMAGES } from '../actionTypes';

const initialState = {
    categories: [],
    selectedCatId: null,
    page: 1,
    categoryImages: [],
    loader: false
}

const categoryReducer = (state = initialState, action) => {

    switch(action.type) {
        case CATEGORY: {

            return {
                ...state,
                categories: [...action.payload],
            }
        }
        case CATEGORY_IMAGES: {
            console.log(action.payload);

            return {
                ...state,
                categoryImages: [...action.payload],
            }
        }
        case SHOW_LOADING: {
            return {
                ...state,
                loader: action.payload,
            }
        }
        case CAT_ID: {
            return {
                ...state,
                selectedCatId: action.id,
            }
        }
        case PAGE: {
            console.log(action.page, 'payload');
            return {
                ...state,
                page: action.page,
            }
        }
        default: return state
    }

}

export default categoryReducer;
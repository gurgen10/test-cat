import { CATEGORY,SHOW_LOADING } from '../actionTypes';

const initialState = {
    categories: [],
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
        case SHOW_LOADING: {
            console.log(action.payload)
            return {
                ...state,
                loader: action.payload,
            }
        }
        default: return state
    }

}

export default categoryReducer;
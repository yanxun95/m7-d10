import { ADD_CITY_TO_FAV, DEL_CITY_TO_FAV } from '../actions'
import { initialState } from '../store'


const favoriteReducer = (state = initialState.favorite, action) => {
    switch (action.type) {
        case ADD_CITY_TO_FAV: {
            return {
                ...state,
                citys: state.citys.concat(action.payload),
            }
        }
        case DEL_CITY_TO_FAV: {
            return {
                ...state,
                citys: state.citys.filter((city, i) => i !== action.payload),
            }
        }
        default:
            return state
    }
}

export default favoriteReducer
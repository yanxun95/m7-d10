import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { persistStore, persistReducer } from 'redux-persist'
import localStorage from 'redux-persist/lib/storage'
import { encryptTransform } from 'redux-persist-transform-encrypt'
import favoriteReducer from '../reducers/favorite'
import searchCityReducer from '../reducers/searchCity'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const initialState = {
    searchCity: {
        cityWeather: {},
        isError: false,
    },
    favorite: {
        citys: []
    }
}

const persistConfig = {
    key: 'root',
    storage: localStorage,
    transforms: [
        encryptTransform({
            secretKey: process.env.REACT_APP_SECRET_KEY,
            onError: (error) => {
                console.log(error)
            },
        }),
    ],
}

const bigReducer = combineReducers({
    searchCity: searchCityReducer,
    favorite: favoriteReducer,
});

const persistedReducer = persistReducer(persistConfig, bigReducer)
const configureStore = createStore(persistedReducer, initialState, composeEnhancers(applyMiddleware(thunk)))
const persistor = persistStore(configureStore)
export { configureStore, persistor }
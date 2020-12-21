import studiosReducer from './studiosReducer'
import userReducer from './userReducer'
import { combineReducers } from 'redux'

export const reducer = combineReducers({
    studios: studiosReducer,
    user: userReducer
})
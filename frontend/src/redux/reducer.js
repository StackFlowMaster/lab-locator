import studiosReducer from './studiosReducer'
import { combineReducers } from 'redux'

export const reducer = combineReducers({
    studios: studiosReducer
})
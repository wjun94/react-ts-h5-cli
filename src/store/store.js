import {
    createStore,
    combineReducers,
} from 'redux'
import homeReducer from './home/reducer'
import detailsReducer from './home/reducer'

export default createStore(
    combineReducers({
        ...homeReducer,
        ...detailsReducer
    }),
)
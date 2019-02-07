import filterReducer from './filters.reducer'
import placesReducer from './places.reducer'
import { combineReducers } from 'redux'
const rootReducer = combineReducers({
  filters: filterReducer,
  places: placesReducer
})

export default rootReducer;
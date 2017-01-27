import { combineReducers } from 'redux';
import youtubeReducer from './youtubeReducer';


// combines reducers for store

const rootReducer = combineReducers({
  youtube: youtubeReducer,

});

export default rootReducer;

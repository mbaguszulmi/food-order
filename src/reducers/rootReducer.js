import { combineReducers } from 'redux';
import foodReducer from './foodReducer';
import promoReducer from './promoReducer';

export default combineReducers({
    foods: foodReducer, 
    promo: promoReducer
});


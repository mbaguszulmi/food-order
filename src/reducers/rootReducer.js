import { combineReducers } from 'redux';
import foodReducer from './foodReducer';
import promoReducer from './promoReducer';
import checkoutReducer from './checkoutReducer'

export default combineReducers({
    foods: foodReducer, 
    promo: promoReducer,
    checkout: checkoutReducer
});


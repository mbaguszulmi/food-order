import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';

export default function configureStore(initialState = {foods: {}, promo: {}, checkout: { foodList: {} }}) {
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    return createStore(
        rootReducer,
        initialState,
        composeEnhancers(applyMiddleware(thunk))
    );
}

export default (state = {}, action) => {
    switch (action.type) {
        case 'ADD_CHECKOUT_FOOD':
            state = { ...state };
            state.foodList.push(action.data);

            return state;

        case 'ADD_CHECKOUT_PROMO':
            return {
                ...state,
                promoCode: action.data
            };

        case 'SET_DELIVERY_FEE':
            return {
                ...state,
                deliveryFee: action.data
            };
        default:
            return state
    }
}

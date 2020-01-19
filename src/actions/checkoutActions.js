export const addCheckoutFood = checkoutFoodData => dispatch => {
    dispatch({
        type: 'ADD_CHECKOUT_FOOD',
        data: checkoutFoodData
    })
}

export const addCheckoutPromo = checkoutPromoData => dispatch => {
    dispatch({
        type: 'ADD_CHECKOUT_PROMO',
        data: checkoutPromoData
    })
}

export const setDeliveryFee = deliferyFee => dispatch => {
    dispatch({
        type: 'SET_DELIVERY_FEE',
        data: deliferyFee
    })
}

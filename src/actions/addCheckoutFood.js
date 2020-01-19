export const addCheckoutFood = checkoutFoodData => dispatch => {
    dispatch({
        type: 'ADD_CHECKOUT_FOOD',
        data: checkoutFoodData
    })
}

export const addCheckoutPromo = checkoutPromoData => dispatch => {
    dispatch({
        type: 'ADD_CHECKOUT_PROMO',
        data: checkoutPromoData
    })
}

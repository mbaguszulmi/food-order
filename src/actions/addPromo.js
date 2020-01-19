export const addPromo = promoData => dispatch => {
    dispatch({
        type: 'ADD_PROMO',
        data: promoData
    })
}

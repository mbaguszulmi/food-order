export const setDeliveryFee = deliferyFee => dispatch => {
    dispatch({
        type: 'SET_DELIVERY_FEE',
        data: deliferyFee
    })
}

export const addFood = foodData => dispatch => {
    dispatch({
        type: 'ADD_FOOD',
        data: foodData
    })
}

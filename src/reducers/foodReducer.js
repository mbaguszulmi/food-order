export default (state = [], action) => {
    switch (action.type) {
        case 'ADD_FOOD':
            state = {...state}
            state[action.data.foodId] = {...action.data.foodData}

            return state;
        default:
            return state
    }
}

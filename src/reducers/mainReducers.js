export default (state = {}, action) => {
    switch (action.type) {
        case 'ADD_FOOD':
            return {
                ...state,
                food: state.food.push(action.data)
            }
            default:
                return state
    }
}

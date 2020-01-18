export default (state = [], action) => {
    switch (action.type) {
        case 'ADD_FOOD':
            state = state.slice();
            state.push(action.data);

            return state;
        default:
            return state
    }
}

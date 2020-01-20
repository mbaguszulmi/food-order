export default (state = [], action) => {
    switch (action.type) {
        case 'ADD_PROMO':
            state = {...state};
            state[action.data.promoCode] = {...action.data.promoData}

            return state;
        default:
            return state
    }
}

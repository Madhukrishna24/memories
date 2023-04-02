export default (state = [], action) => {
    switch (action.type) {
            case 'POST_PERSON':
                return {
                    ...state,
                    person: action.payload
                }
            default: return state
    }
}

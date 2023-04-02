export default (state = [], action) => {
    switch (action.type) {
            case 'POST_DELETE':
                return {
                    ...state,
                }
            default: return state
    }
            
}

export default (state = [], action) => {
    switch (action.type) {
        case 'POST_DATA':
            return {
                ...state,
                data : action.payload
            }
    
        default:
            return state
    }
}
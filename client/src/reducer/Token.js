export default (state=[],action) => {
    switch (action.type) {
        case "FETCH_TOKEN":
            return {
                ...state,
                token: action.payload
            }
    
        default:
            return state;
    }
}
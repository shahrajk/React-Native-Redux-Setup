const INITIAL_STATE = {
    UserData: []
}

const Data = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'SUMBITDATA':
            console.log('reducer data', action.payload)
            return {
                ...state,
                UserData: [...state.UserData, action.payload]
            }
        default:
            return state
    }
}
export default Data;
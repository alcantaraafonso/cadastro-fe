const INITIAL_STATE = {
    list: []
}

export default function(state = INITIAL_STATE, action) {
    switch(action.type) {
        case 'USER_LIST_FETCHED': {
            return {...state, list: action.payload }
        }
        default: {
            return state
        }
    }
}
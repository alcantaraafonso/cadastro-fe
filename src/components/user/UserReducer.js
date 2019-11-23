const INITIAL_STATE = {
    user: {name: '', email: ''},
    list: []
}

export default function(state = INITIAL_STATE, action) {
    switch(action.type) {
        case 'USER_LIST_FETCHED': {
            return {...state, list: action.payload.data }
        }
        default: {
            return state
        }
    }
}
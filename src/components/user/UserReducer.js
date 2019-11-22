const INITIAL_STATE = {
    name: '',
    email: '',
    list: []
}

export default function(state = INITIAL_STATE, action) {
    switch(action.type) {
        case 'USER_NAME_CHANGED': {
            return {...state, name: action.payload }
        }
        case 'USER_EMAIL_CHANGED': {
            // const user = {...state.user}
            // user.email = action.payload
            // return {...state, user: user }
            return {...state, email: action.payload }            
        }
        case 'USER_LIST_FETCHED': {
            return {...state, list: action.payload }
        }
        case 'CLEAR_FORM': {
            return { ...state, user: INITIAL_STATE.user}
        }
        default: {
            return state
        }
    }
}
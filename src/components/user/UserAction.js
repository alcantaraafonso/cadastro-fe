import axios from 'axios'

const BASE_URL = 'http://localhost:3003/api/user'

export function search() {

    return(dispatch, getState) => {
        const request = axios.get(BASE_URL)
            .then(response => dispatch({
                type: 'USER_LIST_FETCHED', payload: response.data 
            }))

    }
}

export function save(name, email) {
    const user = { name, email }
    // const method = user.id ? 'put' : 'post'
    // const url = user.id ? `${BASE_URL}/${user.id}` : BASE_URL
    return dispatch => {
        axios.post(BASE_URL, { user })
            .then(resp => dispatch(clearForm()) )
            .then(resp => dispatch(search()) )
    }
}


export function updateUserName(event) {
    return {
        type: 'USER_NAME_CHANGED',
        payload: event.target.value
    }
}

export function updateUserEmail(event) {
    return {
        type: 'USER_EMAIL_CHANGED',
        payload: event.target.value
    }
}

/**
 * usando o middleware multi para chamar mais de uma action
 */
export const clearForm = () => ([
    { type: 'CLEAR_FORM', payload: '' }, search()]
)
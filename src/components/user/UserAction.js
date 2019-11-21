import axios from 'axios'

const BASE_URL = 'http://localhost:3003/api/user'


export function getList() {

    return(dispatch, getState) => {
        const request = axios.get(BASE_URL)
            .then(response => dispatch({
                type: 'USER_LIST_FETCHED', payload: response.data 
            }))

    }
}

export function save(user) {
    const method = user.id ? 'put' : 'method'
    const url = user.id ? `${BASE_URL}/${user.id}` : BASE_URL

    return dispatch => {
        axios[method](url, user)
            .then(resp =>{ dispatch(getList())})
    }
}
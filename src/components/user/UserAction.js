import axios from 'axios'

import { toastr } from 'react-redux-toastr'

//ActionCreator do Redux-Form
import { initialize } from 'redux-form'

import { BASE_URL, INITIAL_VALUES_FORM, USER_FORM } from '../../utils/Consts'

export function search() {
    console.log(BASE_URL)
    const request = axios.get(BASE_URL)
    return{ type: 'USER_LIST_FETCHED', payload: request }
}

export function save(values, methodHttp = 'post') {
     //O redux thunk necessita que se retorne uma função

     return dispatch => {
        const id = values._id ? values._id : ''
        const url = id ? `${BASE_URL}/${id}` : BASE_URL

        axios[methodHttp](url, values)
            .then(response => {
                console.log(response)
                setInterval(response, 1000)
                toastr.success('Sucesso', 'Operação realizada com sucesso.')
                //originalmente o dispatch recebe uma action, mas como é usado o middleware multi,
                //é possível passar um array e chamar várias Actions
                dispatch(init())
               
            })
            .then(response => dispatch(
                console.log("respone ===>" + response)
            ))
            .catch(e => {
                console.log(e.response.data)
                e.response.data.errors.forEach(
                    error => toastr.error('Erro', error))
                //     // error => console.log(error)
                // )
            })

    }
}

/**
 * usando o middleware multi para chamar mais de uma action
 */
export function init() { 
    return [
        search(),
        initialize(USER_FORM, INITIAL_VALUES_FORM)
    ]
}
import axios from 'axios'

import { toastr } from 'react-redux-toastr'

//ActionCreator do Redux-Form
import { initialize } from 'redux-form'

import { BASE_URL, INITIAL_VALUES_FORM, USER_FORM } from '../../utils/Consts'

export function search() {
    const request = axios.get(BASE_URL)
    return{ type: 'USER_LIST_FETCHED', payload: request }
}

function submit(values, methodHttp) {
     //O redux thunk necessita que se retorne uma função

     return (dispatch) => {
        const id = values._id ? values._id : ''
        const url = id ? `${BASE_URL}/${id}` : BASE_URL

        axios[methodHttp](url, values)
            .then(response => {
                toastr.success('Sucesso', 'Operação realizada com sucesso.')
                //originalmente o dispatch recebe uma action, mas como é usado o middleware multi,
                //é possível passar um array e chamar várias Actions
                dispatch(init())
               
            })
            .catch(e => {
                e.response.data.errors.forEach(
                       error => toastr.error('Erro', error)
                )
                
            })

    }
}

/**
 * Action chamado via handleSubmit do Redux-form e foi mapeada na criação da instância do Form em UserForm.jsx
 * @param {*} values 
 */
export function create(values) {
    const methodHttp = values._id ? 'put' : 'post'
    return submit(values, methodHttp)
}


/**
 * Action chamado via handleSubmit do Redux-form e foi mapeada na criação da instância do Form em UserForm.jsx
 * @param {*} values 
 */
export function remove(values) {
    return submit(values, 'delete')
    
}

export function fillForm(user) {
    return [
        initialize(USER_FORM, user)
    ]
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
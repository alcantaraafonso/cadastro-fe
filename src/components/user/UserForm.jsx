import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { reduxForm, Field, formValueSelector } from 'redux-form'

import LabelAndInput from '../form/LabelAndInput'
import Button from '../elements/Button'
import { USER_FORM } from '../../utils/Consts'
import { init } from './UserAction'

class UserForm extends Component {

    render() {
        const { handleSubmit, init } = this.props
        return (
            <form onSubmit={handleSubmit}>
                <div className="form">
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <div className="form-group">
                                <Field name='name' component={LabelAndInput} 
                                    label='Nome' placeholder='Digite o nome...' />
                            </div>
                        </div>
                        <div className="col-12 col-md-6">
                            <div className="form-group">
                                <Field name='email' component={LabelAndInput} 
                                    label='Email' placeholder='Digite o Email...' />
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className="row">
                        <div className="col-12 d-flex justify-content-end">
                            <Button type='submit' buttonClass='primary' label='Salvar' />
          
                            <Button type='button' buttonClass='secondary ml-2' label='Cancelar' handleClick={init}/>
                        </div>
                    </div>
                </div>
            </form>
        )
    }
}

/**
 * Decorando com o Redux-Form
 */
UserForm = reduxForm({form: USER_FORM, destroyOnUnmount: false})(UserForm)

/**
 * O formValueSelector pega a propriedade values do form (que tá no state)
 */
const selector = formValueSelector(USER_FORM)

//Tem que ser usado individualmente por conta do Redux Form
const mapStateToProps = state => ({
    name: selector(state, 'name'),
    email: selector(state, 'email'),
})

const mapDispatchToProps = dispatch => bindActionCreators({
    init
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(UserForm)
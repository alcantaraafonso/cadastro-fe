import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { reduxForm, Field, formValueSelector } from 'redux-form'


import Main from '../template/Main'
import LabelAndInput from '../form/LabelAndInput'
import Button from '../elements/Button'
import { USER_FORM } from '../../utils/Consts'
import { save, init } from './UserAction'

const headerProps = {
    icon: 'users',
    title: 'Usuários',
    subtitle: 'CRUD de usuário'
}

class User extends Component {

    componentDidMount() {
        //Deve-se iniciar o formulário de de usá-lo.
        //Esta action chama o método initialize do Redux-Form
        this.props.init()
    }

    renderForm() {
        const { save, init } = this.props
        return (
            <form role='form' onSubmit={save}>
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
    
    render() {
        return (
            <Main {...headerProps}>
                {this.renderForm()}
            </Main>
        )

    }
}

/**
 * Decorando com o Redux-Form
 */
User = reduxForm({form: USER_FORM, destroyOnUnmount: false})(User)

/**
 * O formValueSelector pega a propriedade values do form (que tá no state)
 */
const selector = formValueSelector(USER_FORM)

const mapStateToProps = state => ({
    user: selector(state, 'user')
})

const mapDispatchToProps = dispatch => bindActionCreators({
    init,
    save
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(User)
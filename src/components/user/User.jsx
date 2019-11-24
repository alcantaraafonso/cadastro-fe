import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Main from '../template/Main'
import Form from './UserForm'
import List from './UserList'
import { create, init } from './UserAction'

const headerProps = {
    icon: 'users',
    title: 'Usuários',
    subtitle: 'CRUD de usuário'
}

class User extends Component {

    componentWillMount() {
        //Deve-se iniciar o formulário de de usá-lo.
        //Esta action chama o método initialize do Redux-Form
        this.props.init()
    }

    render() {
        return (
            <Main {...headerProps}>
                <Form onSubmit={this.props.create} />

                <List />
            </Main>
        )

    }
}

const mapDispatchToProps = dispatch => bindActionCreators({
    init,
    create
}, dispatch)


export default connect(null, mapDispatchToProps)(User)
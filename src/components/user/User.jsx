import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Main from '../template/Main'

const headerProps = {
    icon: 'users',
    title: 'Usuários',
    subtitle: 'CRUD de usuário'
}

export default class User extends Component {
    
    render() {
        return (
            <Main {...headerProps}>
                Cadastro de usuários via Main
            </Main>
        )

    }
}
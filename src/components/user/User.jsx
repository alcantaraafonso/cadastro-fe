import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'


import Main from '../template/Main'
import { getList } from './UserAction'

const headerProps = {
    icon: 'users',
    title: 'Usuários',
    subtitle: 'CRUD de usuário'
}

class User extends Component {

    componentWillMount() {
        this.props.getList()
    }
    
    render() {
        return (
            <Main {...headerProps}>
                Cadastro de usuários via Main
            </Main>
        )

    }
}

const mapStateToProps = state => ({
    user: state.user,
    list: state.list
})

const mapDispatchToProps = dispatch => bindActionCreators({
    getList
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(User)
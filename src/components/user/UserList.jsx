import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { fillForm, remove } from './UserAction'
import IconButton from '../elements/IconButton'

class UserList extends Component {

    renderRows() {
        const list = this.props.list || []
        return list.map(user => (
            <tr key={user._id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                <IconButton buttonClass='warning' iconClass='pencil' 
                    handleClick={() => this.props.fillForm(user)} />
                <IconButton buttonClass='danger ml-2' iconClass='trash-o'  
                    handleClick={() => this.props.remove(user)}/>

                </td>
            </tr>
        ))
    }

    render() {
        return (
            <table className="table mt-4">
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>E-mail</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {this.renderRows()}
                </tbody>
            </table>
        )
    }
}

const mapStateToProps = state => ({
    list: state.users.list
})

const mapDispatchToProps = dispatch => bindActionCreators({
    fillForm,
    remove
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(UserList)
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'


import Main from '../template/Main'
import { search, save, updateUserName, updateUserEmail,clearForm } from './UserAction'

const headerProps = {
    icon: 'users',
    title: 'Usuários',
    subtitle: 'CRUD de usuário'
}

class User extends Component {

    componentWillMount() {
        this.props.search()
    }

    renderForm() {
        const { name, email, save, updateUserName, updateUserEmail, clearForm } = this.props
        return (
            <div className="form">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>Nome</label>
                            <input text="text" className="form-control" name="name"
                                value={name}
                                onChange={e => updateUserName(e) } 
                                placeholder="Digite o nome"/>
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>Email</label>
                            <input text="text" className="form-control" name="email"
                                value={email}
                                onChange={e => updateUserEmail(e) } 
                                placeholder="Digite o email"/>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="row">
                    <div className="col-12 d-flex justify-content-end">
                        <button className="btn btn-primary" onClick={() => save(name, email)}>
                            Salvar
                        </button>
                        <button className="btn btn-secondary ml-2" onClick={() => clearForm()}>
                            Cancelar
                        </button>
                    </div>
                </div>
            </div>
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

const mapStateToProps = state => ({
    name: state.name,
    email: state.email,
    list: state.list
})

const mapDispatchToProps = dispatch => bindActionCreators({
    search,
    save,
    updateUserName,
    updateUserEmail,
    clearForm
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(User)
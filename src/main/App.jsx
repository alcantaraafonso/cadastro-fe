import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'

import './App.css'

import Logo from '../components/template/Logo'
import Nav from '../components/template/Nav'
import Footer from '../components/template/Footer'
import Routes from './Routes'

import React from 'react'
import {HashRouter} from 'react-router-dom'

export default props => (
    <HashRouter>
        <div className="app">
            <Logo />
            <Nav />

            <Routes />

            {/* <Main icon="home" title="Início" subtitle="Segundo teste react">
                <div className="display-4">
                    Bem vindo
                </div>
            </Main>
            */}
            <Footer />
        </div>
    </HashRouter>
)
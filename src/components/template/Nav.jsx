import './Nav.css'

import React from 'react'
import NavItem from './NavItem'

export default props => (
    <aside className="menu-area">
        <nav className="menu">
            <NavItem path="/" icon="home" label="Início" />
            <NavItem path="/users-crud" icon="users" label="Usuários" />
        </nav>
    </aside>
)
import './Main.css'
import Header from './Header'

import React, { Fragment } from 'react'

export default props => (
    <Fragment>
        <Header />
        <main className="content">
            Conteúdo
        </main>
    </Fragment>
)

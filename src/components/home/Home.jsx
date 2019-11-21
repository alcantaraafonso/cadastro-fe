import React from 'react'

import Main from '../template/Main'

export default props => (
    <Main icon="home" title="Início" subtitle="Segundo teste react">
        <div className='display-4'>
            Bem vindo
            <hr />
            <p className="mb-0">
                Sistema de exemplo
            </p>
        </div>
    </Main>
)
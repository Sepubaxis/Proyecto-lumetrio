import React from 'react'
import {Link} from 'react-router-dom'

export default class Inicio extends React.Component {
    render() {
        return(
            <div className='row bg-dark'>
                <h1 className='mx-3'>Proyecto</h1>
                <Link to="/Inicio"className='mx-3 py-3 text-warning'>Inicio</Link>
                <Link to="/Info" className='mx-3 py-3 text-warning'>Info</Link>
                <Link to="/Form" className='mx-3 py-3 text-warning'>Formulario</Link>
                <Link to="/Contacto" className='mx-3 py-3 text-warning'>Contacto</Link>
            </div>
        )
    }
}

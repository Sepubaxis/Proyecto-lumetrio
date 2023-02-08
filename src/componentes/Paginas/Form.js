import React from 'react'

export default class Form extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            nombre: '',
            mensaje: ''
        }
        this.submitted = this.submitted.bind(this)
        this.changed = this.changed.bind(this)
        }

        submitted(event) {
            alert("Se envio el formulario de "+ this.state.nombre);
            event.preventDefault();
        }

        changed(event) {
            this.setState({
                nombre: event.target.value
            })
        }


    render() {
        return(
            <>
                <h2 className='text-warning mx-2'>Si te gustó el proyecto dejame un mensaje!</h2>
                
                <form onSubmit={this.submitted}>
                    <div className='mx-2'>
                        <label className='text-warning py-3'>Nombre</label>
                        <input type="text" className='form-control' onChange={this.changed}/>
                    </div>
                    <div className='form-group mx-2'>
                        <label className='text-warning'>Mensaje</label>
                        <textarea className='form-control'></textarea>
                    </div>
                    <button type="submit" className='btn btn-warning my-2 mx-2 px-4 py-2'>Enviar</button>

                </form>
                
            </>
        )
    }
}

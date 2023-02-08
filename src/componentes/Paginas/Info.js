import React from 'react'

export default class Info extends React.Component {

    render() {
        return(
            <>
                <div className='container'>
                    <h1 className='mx-4 py-4 lead display-4'><strong>Informacion del proyecto:</strong></h1>
                </div>
                <div className='text-center text-warning'>
                    <h3 className=''></h3>
                    <ul className="list-unstyled">
                        <li>Proyecto para lumetrio React Js</li>
                        <li>Al menos un componente que tenga Porps y State</li>
                        <li>Cuatro páginas o más</li>
                        <li>Un formulario en donde captures los datos</li>
                        <li>Conectarte con una API rest</li>
                    </ul>
                    <h3>Informacion de la API usada</h3>
                    <a href='https://www.omdbapi.com/' target="blank">OMDb API</a>
                    <p>La API OMDb simplemente reune informacion sobre peliculas. Titulos, portadas y fechas</p>
                </div>
            </>
        )
    }
}

import React, { Component } from 'react'

export default class Formulario extends Component {

    nombreGastoRef = React.createRef()
    cantidadGastoRef = React.createRef()

    agregarGasto = (e) => {
        e.preventDefault()

        const gasto = {
            nombreGasto: this.nombreGastoRef.current.value,
            cantidadGasto: this.cantidadGastoRef.current.value
        }

        this.props.agregarGasto(gasto)


        e.currentTarget.reset()
    }

    render() {

        return (
            <form onSubmit={this.agregarGasto}>
                <h2>Agrega tus gastos aquí</h2>

                <div className="campo">
                    <label>Nombre Gasto</label>
                    <input 
                        className="u-full-width" 
                        type="text"
                        ref={this.nombreGastoRef}
                        placeholder="Ej. Transporte" 
                    />
                </div>
                <div className="campo">
                    <label>Cantidad</label>
                    <input 
                        className="u-full-width"
                        type="text"
                        placeholder="Ej. 300"
                        ref={this.cantidadGastoRef}
                    />
                </div>
                <input className="button-primary u-full-width" type="submit" value="Agregar" />
            </form>
        )
    }
}

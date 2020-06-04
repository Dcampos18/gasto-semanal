import React, { Component, Fragment } from 'react'
import Presupuesto from './Presupuesto'
import Restante from './Restante'

export default class ControlPresupuesto extends Component {
    render() {
        return (
            <Fragment>
                <Presupuesto 
                    presupuesto = {this.props.presupuesto}
                />
                <Restante 
                    presupuesto = {this.props.presupuesto}
                    restante = {this.props.restante}
                />
            </Fragment> 
        )
    }
}

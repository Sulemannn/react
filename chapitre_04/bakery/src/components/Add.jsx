import React, { Component } from 'react'

class Add extends Component {

    constructor() {
        super();
        this.state = {
            productName: "",
            price: 1
        }
        this.updateProductName = this.updateProductName.bind(this)
        this.updatePrice = this.updatePrice.bind(this)
    }

    updateProductName(event) {
        this.setState({
            productName: event.target.value
        })
    }

    updatePrice(event) {
        this.setState({
            price: event.target.value
        })
    }

    click = () => {
        // Dépendant de comment a été déclarer la fonction passé en props
        // On va lui remonter un ou plusieurs arguments

        // this.props.addItem({ name: this.state.productName, price: this.state.price})
        this.props.addItem(this.state.productName, this.state.price)
    }

    render() {
        return (
            <div className="d-flex flex-column align-items-center">

                <div className="mb-3" style={{ width: '90%' }}>
                    <div className="row">
                        <input type="text" placeholder="Item" className="col-10" onChange={this.updateProductName}></input>
                        <button type="button" className="btn btn-primary col-2" onClick={this.click}>Add</button>
                    </div>

                    <span>{this.state.price} €</span>
                </div>

                <input style={{ width: "95%" }} type="range" value={this.state.price} onChange={this.updatePrice} min="1" max="10"></input>
            </div>
        )
    }
}
export default Add;
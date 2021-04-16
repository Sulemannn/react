import React from 'react'

class Add extends React.Component {

    constructor() {
        super()

        this.state = {
            productName: "",
            price: 1

        }
    }



    render() {

        return (

            <div className="d-flex flex-column align-items-center">

                <div className="mb-3" style={{ width: '90%' }}>
                    <div className="row">
                        <input type="text" placeholder="Item" class="form-control" onChange={this.UpdateProductName}></input>
                        <button className="btn btn-primary" type="submit" onClick>Add</button>
                    </div>

                    <span>1 €</span>
                </div>

                <input style={{ width: '100%' }} type="range" min={1} max={10} onChaange={this.updatePrice}></input>
            </div>
        )
    }

}


export default Add;
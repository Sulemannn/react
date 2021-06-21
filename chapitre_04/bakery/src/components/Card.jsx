import React, { Component } from 'react';

class Card extends Component {

    constructor() {
        super()

        this.state = {
            image: './images/item.png'
        }
    }

    render() {

        return (


            <button onCLick={() => this.props.onClick(this.props.productName, this.props.price)}>
                <img style={{width: "30px"}} src={this.state.image} alt="photo png" />
            </button>

        )

    }
}


export default Card;
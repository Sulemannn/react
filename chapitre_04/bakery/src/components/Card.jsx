import React, { Component } from 'react';

class Card extends Component {

    constructor() {
        super()

        this.state = {
            image: '../../public/images/item.png'
        }
    }

    render() {
        return (

            <div>
                <button className='buttonImg'
                    style={{ backgroundImage: `url(${this.state.image})` }}
                    onClick={() => this.props.onClick(this.props.itemName, this.props.price)}></button>
            </div>
        );
    }
}

export default Card;
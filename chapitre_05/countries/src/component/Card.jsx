import React from 'react'

class Card extends React.Component {

    render() {

        return (

            <div>
                {this.props.name}
                {this.props.capital}
                {this.props.flag}
                {this.props.population}
                {this.props.region}
            </div>

        )
    }
}

export default Card;
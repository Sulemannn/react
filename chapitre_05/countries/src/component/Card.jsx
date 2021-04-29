import React from 'react'

class Card extends React.Component {

    render() {

        return (

            <div class="fw-bold" style={{ textAlign: 'center' }}>
                <img src={this.props.flag}
                    alt="countries flag"
                    style={{ width: "150px" }} />
                <br></br>
                <p>Country: <br /> {this.props.name}</p>
                <p>Capital: {this.props.capital}</p>
                <p>Region: <br /> {this.props.region}</p>
                <p>Population: <br /> {this.props.population}</p>
            </div>

        )
    }
}

export default Card;
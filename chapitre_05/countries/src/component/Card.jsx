import React from 'react'

class Card extends React.Component {

    render() {

        return (

            <div className="border rounded">
                <div style={{ textAlign: "center"}}>
                    <img class="mx-auto d-block" style={{
                        width: "180px",
                        borderTopLeftRadius: 4,
                        borderTopRightRadius: 4
                    }}
                        src={this.props.flag}
                        alt="countries flag" />
                    <br />
                    <p style={{ fontWeight: 650, fontSize: 20 }}>Country: <br /> {this.props.name}</p>
                    <p style={{ fontWeight: 600, fontSize: 19 }}>Capital: {this.props.capital}</p>
                    <p style={{ fontWeight: 500, fontSize: 18 }}>Region: <br /> {this.props.region}</p>
                    <p style={{ fontWeight: 500, fontSize: 18 }}>Population: <br /> {this.props.population}</p>
                </div>
            </div>

        )
    }
}

export default Card;
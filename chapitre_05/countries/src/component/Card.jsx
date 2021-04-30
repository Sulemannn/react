import React from 'react'

class Card extends React.Component {

    render() {

        return (
            <div class="border mx-2 px-6" >
                <div style={{ textAlign: 'center' }}>
                    <img style={{
                        width: 180,
                        borderTopLeftRadius: 4,
                        borderTopRightRadius: 4 }} 
                        src={this.props.flag} 
                        alt="countries flag" />
                    {/* On saute 2 lignes avec les </br> pour l'alignement */}
                    <br />
                    <br />
                    <p style={{ fontWeight: 600, fontSize: 19 }}>Country: <br /> {this.props.name}</p>
                    <p style={{ fontWeight: 500, fontSize: 17 }}>Capital: {this.props.capital}</p>
                    <p style={{ fontWeight: 450, fontSize: 17 }}>Region: <br /> {this.props.region}</p>
                    <p class="bi bi-people-fill" style={{ fontWeight: 450, fontSize: 17 }}>Population: <br /> {this.props.population}</p>
                </div>
            </div>

        )
    }
}

export default Card;
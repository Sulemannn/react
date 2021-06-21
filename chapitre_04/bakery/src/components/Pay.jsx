import React, { Component } from 'react'
import Card from './Card'

class Pay extends Component {
    render() {
        return (
            <div>
                <h2>Pay</h2>
                <Card productName="croissant"/>
            </div>
        )
    }
}

export default Pay;
import React, { Component } from 'react'

class List extends Component {
    render() {

        if (this.props.listItems.length === 0) {
            return <h2>No items are available</h2>

        } else {

            return (
                
                <ul>
                    {this.props.listItems.map(curr => {
                        return (<li>{curr.name} : {curr.price} €</li>)
                    })}
                </ul>
            )
        }
    }
}
export default List;
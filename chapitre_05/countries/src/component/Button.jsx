import React from 'react'

class Button extends React.Component {

    render() {

        // console.log("button", this.props);

        const country = this.props.children

        return (
            <button className="btn btn-primary m-4" onClick={() => this.props.onClick(country)}>{country}</button>

        )
    }
}

export default Button;
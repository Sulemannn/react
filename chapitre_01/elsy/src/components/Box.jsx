import React from "react";
import '../styles/global.css'

class Box extends React.Component {

  render() {
    return (

      <div className="box col-sm-3 col-6">

        <span class="material-icons" style={{fontSize:"100", color: this.props.color }}>{this.props.icon}</span>
        <p>{this.props.value} {this.props.unit}</p>

      </div>

      if (this.props.icon == this.props.local_drink)




    );
  }
}

export default Box;
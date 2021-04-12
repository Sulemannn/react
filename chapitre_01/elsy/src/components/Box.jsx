import React from "react";
import '../styles/global.css'

class Box extends React.Component {

  render() {
    return (

      <div className="box col-sm-3 col-6">

        <span class="material-icons" style={{fontSize:"100", color: this.props.color }}>{this.props.icon}</span>
        <p>{this.props.value} {this.props.unit}</p>


        if (this.props.unit !== "L") {
         (<input type="range" min={this.props.stepsMin} max={this.props.stepsMax} value={this.props.value} oninput></input>)
      }

      </div>


    );
  }
}

export default Box;
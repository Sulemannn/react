import React from "react";
import './styles/global.css'

import Box from './components/Box.jsx'


const tempMin = -20;
const tempMax = 40;
const heartMin = 80;
const heartMax = 180;
const stepsMin = 0;
const stepsMax = 3000;


class App extends React.Component {

  constructor() {
    super();

    this.state = {
      water: 0,
      heart: 120,
      temperature: -10,
      steps: 3000


    };

    this.onStepsChange = this.onStepsChange.bind(this)
    this.onHeartChange = this.onHeartChange.bind(this)
    this.onTemperatureChange = this.onTemperatureChange.bind(this)

  }

    onStepsChange(e) {

      this.setState({steps: e.target.value}) 

      // console.log(e.target);
    }

    
    onHeartChange(e) {

      this.setState({heart: e.target.value}) 

      // console.log(e.target);
    }

    
    onTemperatureChange(e) {

      this.setState({temperature: e.target.value}) 

      // console.log(e.target);
    }


    calculateWater(e) {

      this.setState({calculateWater: e.target.value}) 

      // console.log(e.target);

    }
    


  render() {
    return (
      <div className="container-fluid">
        <div className="row">

          {/* Water */}
          <Box icon="local_drink" color="#3A85FF" value={1.5} unit="L"></Box >

          {/* Steps */}
          <Box icon="directions_walk" color="black" value={this.state.steps} unit="steps"
          min={stepsMin} max={stepsMax} onChange={this.onStepsChange}></Box >

          {/* Heart */}
          <Box icon="favorite" color="red" value={this.state.heart} unit="bpm"
            min={heartMin} max={heartMax} onChange={this.onHeartChange} ></Box >

          {/* Temperature */}
          <Box icon="wb_sunny" color="yellow" value={this.state.temperature} unit="°C"
          min={tempMin} max={tempMax} onChange={this.onTemperatureChange} ></Box >



        </div>


      </div>
    );
  }
}

export default App;
import React from "react";
import './App.css';

const tempMin = -20;
const tempMiax = 40;
const heartMin = 80;
const heartMax = 180;
const stepsMin = 0;
const stepsMax = 50000;


class App extends React.Component {
  render() {
    return (
      <div>
        <h1 className="text-primary">Hello !</h1>
      </div>
    );
  }
}

export default App;
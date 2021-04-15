import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Add from './components/Add'
import List from './components/List'
import Pay from './components/Pay'
import Button from './components/Button'


class App extends React.Component {

  constructor() {
    super()

    this.state = {
      activeTab: "add",
      items: []
    }
  }



  render() {
    return (

      <div className="container d-flex justify-content-center">
        <div className="d-flex flex-column" style={{ width: 600 }}>


          <h1 className="h1" style={{ textAlign: "center" }}>Bakery</h1>
          <div className="d-flex flex-row justify-content-start">

            <Button isSelected={this.state.activeTab}>Add</Button>
            <Button isSelected={this.state.activeTab}>List</Button>
            <Button isSelected={this.state.activeTab}>Pay</Button>

            <Add></Add>
            <List></List>
            <Pay></Pay>

          </div>


        </div>
      </div>


    );
  }
}

export default App
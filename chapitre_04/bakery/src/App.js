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

    this.selectAdd = this.selectAdd.bind(this)
    this.selectList = this.selectList.bind(this)
    this.selectPay = this.selectPay.bind(this)
  }

  selectAdd() {

    this.setState({ activeTab: 'add' 
  
  })
  }

  selectList() {

    this.setState({ activeTab: 'list' })
  }

  selectPay() {


    this.setState({ activeTab: 'pay' })
  }


  render() {
    return (

      <div className="container d-flex justify-content-center ">
        <div className="d-flex flex-column" style={{ width: 600 }}>


          <h1 className="h1" style={{ textAlign: "center" }}>Bakery</h1>
          <div className="d-flex flex-row justify-content-start">

            <Button isSelected={this.state.activeTab === "add" ? "btn btn-primary" : "btn btn-light"} onClick={this.selectAdd} >Add</Button>
            <Button isSelected={this.state.activeTab === "list" ? "btn btn-primary" : "btn btn-light"} onClick={this.selectList} >List</Button>
            <Button isSelected={this.state.activeTab === "pay" ? "btn btn-primary" : "btn btn-light"} onClick={this.selectPay} >Pay</Button>

            <div className="row">
              <div className="col">

                <Add>eeeee</Add>
                <List>list</List>
                <Pay>pay</Pay>

              </div>
            </div>

          </div>


        </div>
      </div>


    );
  }
}

export default App
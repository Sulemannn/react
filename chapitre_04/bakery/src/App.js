import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import Add from './components/Add.jsx'
import List from './components/List.jsx'
import Pay from './components/Pay.jsx'
import Button from './components/Button.jsx'

class App extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      // activeTab: add,
      // items: []
    }
  }

  render() {
    return (

      <div className="container-fluid">
        <div className="row">

          <Add />
          <List />
          <Pay />
          <Button />

        </div>
      </div>


    );
  }
}

export default App
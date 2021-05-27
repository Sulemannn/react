import React, { Component } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import StudentsList from './views/studentsList'


class App extends Component {
  render() {
    return (

      <BrowserRouter>

        <StudentsList></StudentsList>

        <Switch>
          <Route exact path="/" />
          <Route exact path="/students/add" />
        </Switch>
      </BrowserRouter>

    )
  }
}
export default App
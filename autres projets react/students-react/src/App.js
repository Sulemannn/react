import React, { Component } from 'react'
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

import StudentsList from './views/StudentsList'
import StudentsAdd from './views/StudentsAdd'


export default class App extends Component {
  render() {

    return (

      <BrowserRouter>
        <div>
          <nav>

            <ul>

              <h2>Simple form</h2>
            </ul>

          </nav>

          <Switch>
            <Route path="/" exact>
              <StudentsList />

            </Route>

            <Route path="students/add" exact>
              <StudentsAdd />
            </Route>

          </Switch>
        </div>
      </BrowserRouter>

    )
  }
}

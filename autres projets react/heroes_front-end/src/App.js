import React, { Component } from 'react'
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

import HeroesAdd from './views/HeroesAdd'
import HeroesLists from './views/HeroesLists'


export default class App extends Component {
  render() {

    return (

      <BrowserRouter>
        <div>
          <nav>

            <ul>

              <h1>Heroes Front End</h1>

            </ul>

          </nav>

          <div>
              <input></input>
              <h3>Heroes photos : </h3>
          </div>

          <Switch>
            <Route path="/" exact>
              <HeroesLists />

            </Route>

            <Route path="/heroes" exact>
              <HeroesAdd />
            </Route>

          </Switch>
        </div>
      </BrowserRouter>

    )
  }
}

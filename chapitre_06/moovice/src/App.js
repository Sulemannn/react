import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './views/Home'
import Weekly from './views/Weekly'
import WeeklyBattle from './views/WeeklyBattle'
import Popular from './views/Popular'
import PopularBattle from './views/PopularBattle'
import Favorites from './views/Favorites'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import PageNotFound from './PageNotFound'

export default class App extends Component {
  render() {

    return (
      <BrowserRouter>

        <div>
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/weekly">Weekly</Link></li>
              <li><Link to="/weekly-battle">WeeklyBattle</Link></li>
              <li><Link to="/popular">Popular</Link></li>
              <li><Link to="/popular-battle">Popular Battle</Link></li>
              <li><Link to="/favorites">Favorites</Link></li>

            </ul>
          </nav>
        </div>

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/weekly" exact component={Weekly} />
          <Route path="/weekly-battle" exact component={WeeklyBattle} />
          <Route path="/popular" exact component={Popular} />
          <Route path="/popular-battle" exact component={PopularBattle} />
          <Route path="/favorites" exact component={Favorites} />

        </Switch>

      </BrowserRouter>

    )
  }
}


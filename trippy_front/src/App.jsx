import React from 'react'
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import Hotel from './views/Hotel'
// import Restaurant from './views/Restaurant'

function App() {

  return (
    <BrowserRouter>
      <div className="container">
        <nav>
          <ul>
            <li><Link to="/Hotel">Hotel</Link></li>
            <li><Link to="/Restaurant">Restaurant</Link></li>

          </ul>
        </nav>

        <Switch>
          <Route path="/Hotel" component={Hotel} />
          {/* <Route path="/Restaurant" component={Restaurant} /> */}
        </Switch>

      </div>

    </BrowserRouter>
  );
}

export default App;

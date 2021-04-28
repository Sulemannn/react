import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {

  constructor() {
    super()

    this.state = {
      name: "",
      capital: "",
      flag: "",
      population: "",
      region: ""
    };

  }

  componentDidMount() {
    fetch("https://restcountries.eu/rest/v2/name/france")
      .then(response => response.json())
      .then(result => {
        console.log(result)

        this.setState({
          name: result[0].name,
          capital: result[0].capital,
          flag: result[0].flag,
          population: result[0].population,
          region: result[0].region
        });
      })
      .catch(err => console.error("There is an error !", err));
  }

  render() {
    return (

      <div className="d-flex flex-column">

        <span>name : {this.state.name}</span>
        <span>capital : {this.state.capital}</span>
        <span>flag : {this.state.flag}</span>
        <span>population : {this.state.population}</span>
        <span>region : {this.state.region}</span>

      </div>

    )
  }
}

export default App;
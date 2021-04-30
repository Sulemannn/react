import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from "./component/Button.jsx";
import Card from "./component/Card.jsx";

class App extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      name: "",
      capital: "",
      flag: "",
      population: "",
      region: ""
    }

    this.getCountry = this.getCountry.bind(this)
  }

  getCountry(country) {
    fetch("https://restcountries.eu/rest/v2/name/" + country)
      .then(res => res.json())
      .then(countryResult => {
        // console.log("countryResult test", countryResult)

        this.setState({
          name: countryResult[0].name,
          capital: countryResult[0].capital,
          flag: countryResult[0].flag,
          population: countryResult[0].population,
          region: countryResult[0].region
        })
      })
  }

  componentDidMount() {
    fetch("https://restcountries.eu/rest/v2/name/france")
      .then(res => res.json())
      .then(result => {
        // console.log("résultat test", result)

        this.setState({
          name: result[0].name,
          capital: result[0].capital,
          flag: result[0].flag,
          population: result[0].population,
          region: result[0].region
        })
      }
      )
  }

  renderButton() {

    return (
      
      <div style={{ textAlign: 'center' }}>

        <Button onClick={this.getCountry}>France</Button>
        <Button onClick={this.getCountry}>Brazil</Button>
        <Button onClick={this.getCountry}>Croatia</Button>
      </div>
    )
  }

  render() {

    return (

      <div>

        <h1 style={{ textAlign: 'center' }}>Country selector</h1>
        {this.renderButton()}

        <Card 

          flag={this.state.flag}
          name={this.state.name}
          capital={this.state.capital}
          region={this.state.region}
          population={this.state.population}
        />

      </div>

    )
  }
}

export default App;
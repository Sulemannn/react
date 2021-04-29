import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from "./component/Button";

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

  // renderButton() {

  //   return (
  //     <div>
  //       <Button onClick={this.getCountry}>France</Button>
  //       <Button onClick={this.getCountry}>Brazil</Button>
  //       <Button onClick={this.getCountry}>Croatia</Button>
  //     </div>
  //   )
  // }

  render() {

    return (

      <div>

        <h1>Country Selector</h1>

        <Button onClick={this.getCountry}>France</Button>
        <Button onClick={this.getCountry}>Brazil</Button>
        <Button onClick={this.getCountry}>Croatia</Button><br />

        <p>Name: {this.state.name}</p>
        <p>Capital: {this.state.capital}</p>
        <p>Flag : <img className="img" src={this.state.flag} style={{ width: "50px" }} alt="countries flag"></img></p>
        <p>Population: {this.state.population}</p>
        <p>Region: {this.state.region}</p>

        {/* {this.renderButton()} */}

      </div>

    )
  }
}

export default App;
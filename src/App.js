import React from "react";

import Cards from "./components/cards/Cards";
import Chart from "./components/chart/Chart";
import CountryPicker from "./components/countryPicker/CountryPicker";
import styles from "./App.module.css";
import covidDataApi from "./api";
import Img from "./assets/covid19.png";

class App extends React.Component {
  state = { data: {}, country: "" };

  handleCountryChange = async (country = "") => {
    let data = {};
    if (!country) data = await covidDataApi.fetchGlobalData();
    else data = await covidDataApi.fetchCountryData(country);
    this.setState({ data, country });
  };

  async componentDidMount() {
    const data = await covidDataApi.fetchGlobalData();
    this.setState({ data });
  }

  render() {
    return (
      <div className={styles.container}>
        <img src={Img} className={styles.logo} alt="Covid-19 App Logo" />
        <Cards data={this.state.data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={this.state.data} country={this.state.country} />
      </div>
    );
  }
}

export default App;

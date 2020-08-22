import React, { useState, useEffect } from "react";
import { NativeSelect, FormControl } from "@material-ui/core";

import covidDataApi from "../../api";
import styles from "./CountryPicker.module.css";

const CountryPicker = ({ handleCountryChange }) => {
  const [countries, setCountries] = useState([]);

  const getCountriesNames = async () => {
    setCountries(await covidDataApi.fetchCountriesNames());
  };

  useEffect(() => {
    getCountriesNames();
  }, []);

  if (!countries) {
    return <p>...Loading</p>;
  }

  return (
    <div className={styles.container}>
      <FormControl className={styles.container}>
        <NativeSelect
          defaultValue=""
          onChange={(e) => handleCountryChange(e.target.value)}
        >
          <option value="">Global</option>
          {countries.map((country) => (
            <option key={country} value={country}>
              {country}
            </option>
          ))}
        </NativeSelect>
      </FormControl>
    </div>
  );
};

export default CountryPicker;

import axios from "axios";

const url = "https://covid19.mathdro.id/api";

const fetchGlobalData = async () => {
  try {
    const {
      data: { confirmed, recovered, deaths, lastUpdate },
    } = await axios.get(url);
    return { confirmed, recovered, deaths, lastUpdate };
  } catch (error) {
    console.log(error);
  }
};

const fetchDailyData = async () => {
  try {
    const { data } = await axios.get(`${url}/daily`);
    const modifiedData = data.map((item) => ({
      confirmed: item.confirmed.total,
      deaths: item.deaths.total,
      date: item.reportDate,
    }));
    return modifiedData;
  } catch (error) {
    console.log(error);
  }
};

const fetchCountriesNames = async () => {
  try {
    const {
      data: { countries },
    } = await axios.get(`${url}/countries`);
    const modifiedData = countries.map((item) => item.name);
    return modifiedData;
  } catch (error) {
    console.log(error);
  }
};

const fetchCountryData = async (country) => {
  try {
    const {
      data: { confirmed, recovered, deaths, lastUpdate },
    } = await axios.get(`${url}/countries/${country}`);
    return { confirmed, recovered, deaths, lastUpdate };
  } catch (error) {
    console.log(error);
  }
};

export default {
  fetchGlobalData,
  fetchDailyData,
  fetchCountriesNames,
  fetchCountryData,
};

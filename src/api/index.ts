import { useState } from 'react';
import axios from 'axios';

const apikey = process.env.REACT_APP_AV_API_KEY;

export const searchStocks = async (query: String) => {
  const { data } = await axios.get(`https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${query}&apikey=${apikey}`);
  return data;
};

export const companyOverview = async (symbol: String) => {
  const { data } = await axios
    .get(`https://www.alphavantage.co/query?function=OVERVIEW&symbol=${symbol}&apikey=${apikey}`)
    .then(data => data)
    .catch(e => e);
  const overview = {
    fullName: data['Name'],
    description: data['Description'],
    exchange: data['Exchange'],
    sector: data['Sector'],
    industry: data['Industry'],
    address: data['Address'],
    employees: data['FullTimeEmployees'],
    marketCap: data['MarketCapitalization'],
    high: data['52WeekHigh'],
    low: data['52WeekLow'],
  };

  return overview;
};

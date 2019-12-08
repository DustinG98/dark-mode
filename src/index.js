import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import axios from "axios";

import Charts from "./components/Charts";
import Navbar from "./components/Navbar";





import "./styles.scss";

const App = () => {
  const [coinData, setCoinData] = useState({});
  const [coinsData, setCoinsData] = useState([]);
  const [currentCoin, setCurrentCoin] = useState("bitcoin")
  useEffect(() => {
    

    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true"
      )
      .then(res => {
        setCoinsData(res.data)
      })
      .catch(err => console.log(err));
  }, [])

  useEffect(() => {
    axios.get(`https://api.coingecko.com/api/v3/coins/${currentCoin}`)
      .then(res => {
        setCoinData(res.data);
      })
  }, [currentCoin]);

  const handleChanges = (e) => {
    e.preventDefault();
    setCurrentCoin(e.target.value)
  }
  return (
    <div className="App">
      <Navbar />
      <form>
        <select name="coin" value={currentCoin} onChange={e => handleChanges(e)}>
          {coinsData.map((coin) => {
            return <option key={coin.id} value={coin.id}>{`${coin.name}`}</option>
          })}
        </select>
      </form>
      <Charts coin={coinData} coinsData={coinsData} />
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

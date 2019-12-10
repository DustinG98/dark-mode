import React from "react";
import Chart from "./Chart";

const Charts = ({ coin, coinsData }) => {
  let sparkline = coinsData.filter(currentCoin => {
    return currentCoin.id === coin.id
  })
  return (
    <div className="charts">
        <div className="chart__container" key={coin.name}>
          <h2 className="coin__title">{coin.name}</h2>
          <h4 className="coin__symbol">{coin.symbol}</h4>
          <div className="coin__logo">
            <img src={(coin.image) ? coin.image.small : null} height="40" alt={coin.name} />
          </div>
        </div>
        <div className="chart-container">
          {(sparkline[0] !== undefined) ? <Chart sparklineData={sparkline[0].sparkline_in_7d.price} className="chart"  /> : null}
        </div>
    </div>
  );
};
export default Charts;

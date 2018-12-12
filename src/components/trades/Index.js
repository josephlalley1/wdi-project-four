import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class TradeIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    axios.all([
      axios.get('/api/trades'),
      axios.get('https://chasing-coins.com/api/v1/top-coins/20')
    ])
      .then(axios.spread((localTrades, externalCoinData) => {
        this.setState({ trades: localTrades.data });

        const lastPrices = {};
        console.log(externalCoinData);
        const cryptoArray = Object.values(externalCoinData.data);
        cryptoArray.forEach(function(element) {
          Object.assign(lastPrices, {[element.symbol]: element.price});
        });

        console.log(cryptoArray);
        console.log(lastPrices);
      }));

  }

  render() {
    return (
      <div className="index-container">
        <h1>Portfolio</h1>
        <div className="portfolio-container">
          <div className="portfolio-header">
          </div>
          {this.state.trades && this.state.trades.map(
            (trade, i) =>
              <Link to={`/trades/${trade._id}`}  key={i}>
                <div>
                  <p >{trade.coinName}</p>
                  <p>{trade.transactionTotal}</p>
                </div>
              </Link>
          )}
        </div>
      </div>
    );
  }
}
export default TradeIndex;

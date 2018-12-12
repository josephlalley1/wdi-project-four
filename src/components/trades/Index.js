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
      axios.get('/api/trades')
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
          <div className="pa4">
            <div className="overflow-auto">
              <table className="f6 w-100 mw8 center" cellspacing="0">
                <thead>
                  <tr>
                    <th className="fw6 bb b--black-20 tl pb3 pr3 bg-white">Coin</th>
                    <th className="fw6 bb b--black-20 tl pb3 pr3 bg-white">Coin Name</th>
                    <th className="fw6 bb b--black-20 tl pb3 pr3 bg-white">Amount</th>
                    <th className="fw6 bb b--black-20 tl pb3 pr3 bg-white">Value</th>
                    <th className="fw6 bb b--black-20 tl pb3 pr3 bg-white">ID</th>
                    <th className="fw6 bb b--black-20 tl pb3 pr3 bg-white"></th>
                  </tr>
                </thead>
                <tbody className="lh-copy">
                  {this.state.trades && this.state.trades.map(
                    (trade, i) =>
                    <tr>
                      <td className="pv3 pr3 bb b--black-20">{trade.symbol}</td>
                      <td className="pv3 pr3 bb b--black-20">{trade.coinName}</td>
                      <td className="pv3 pr3 bb b--black-20">{trade.transactionTotal}</td>
                      <td className="pv3 pr3 bb b--black-20"></td>
                      <td className="pv3 pr3 bb b--black-20">{trade._id}</td>
                      <td className="pv3 pr3 bb b--black-20"><Link to={`/trades/${trade._id}`}  key={i}>View Trade</Link></td>

                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>

      </div>
    );
  }
}
export default TradeIndex;

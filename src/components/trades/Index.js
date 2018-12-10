import React from 'react';
import axios from 'axios';

class TradeIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  
  componentDidMount() {
    axios.get('/api/trades')
      .then(result => this.setState({ trades: result.data }));
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
              <div key={i}>
                <p >{trade.coinName}</p>
                <p>{trade.transactionTotal}</p>
              </div>
          )}
        </div>
      </div>
    );
  }
}
export default TradeIndex;

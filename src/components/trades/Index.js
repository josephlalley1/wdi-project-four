import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

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

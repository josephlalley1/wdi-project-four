import React from 'react';
import axios from 'axios';

class TradeIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log('Submitted form!', this.state);
    axios.post('/api/trades', this.state )
      .then(() => this.props.history.push('/trades'));
  }

  handleChange({ target: { name, value }}) {
    console.log('event.target.name is', event.target.name, this.state);
    this.setState({ [name]: value });
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
          <form onSubmit={this.handleSubmit}>
            <label>Coin Name</label>
            <input onChange={this.handleChange}
              value={this.state.coinName || ''}
              name="coinName"
            />
            <button>Add a trade</button>
          </form>
          {this.state.trades && this.state.trades.map(
            (trade, i) => <p key={i}>{trade.coinName}</p>
          )}
        </div>
      </div>
    );
  }
}
export default TradeIndex;

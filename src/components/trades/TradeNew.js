import React from 'react';
import axios from 'axios';
import { handleChange } from '../../lib/common';

export default class TradeNew extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleChange = handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log('Submit handled', this.state);
    axios.post('/api/trades', this.state)
      .then(() => this.props.history.push('/trades'));
  }

  render() {
    return(
      <section>
        <h2 className="title is-2">Add a Trade</h2>
        <form onSubmit={this.handleSubmit}>
          <label>Coin Name</label>
          <select onChange={this.handleChange}
            value={this.state.coinName || ''}
            name="coinName">
            <option>Bitcoin</option>
            <option>Ethereum</option>
          </select>
          <label>Amount in Holdings</label>
          <input onChange={this.handleChange}
            value={this.state.transactionTotal || ''}
            name="transactionTotal"></input>
          <button>Submit</button>
        </form>
      </section>
    );
  }
}

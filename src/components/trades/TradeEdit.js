import React from 'react';
import axios from 'axios';
import { handleChange } from '../../lib/common';

class TradeEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleChange = handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount(){
    axios.get(`/api/trades/${this.props.match.params.id}`)
      .then(result => {
        this.setState({
          trade: result.data
        });
        console.log('this is this.state', this.state);
      });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log('Submit handled', this.state);
    axios.put(`/api/trades/${this.props.match.params.id}`, this.state)
      .then(() => this.props.history.push(`/trades/${this.props.match.params.id}`));
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

export default TradeEdit;

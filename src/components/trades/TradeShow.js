import React from 'react';
import axios from 'axios';

class TradeShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleDelete = this.handleDelete.bind(this);
  }

  // This is part of the component Lifecycle
  // It must be named exactly like this:
  componentDidMount() {
    axios.get(`/api/trades/${this.props.match.params.id}`)
      .then(result => {
        this.setState({ trade: result.data });
        console.log('We have this trade', this.state.trade);
      });
  }

  handleDelete(event){
    event.preventDefault();
    console.log(this.state);
    axios.delete(`/api/trades/${this.state.trade._id}`)
      .then( () => this.props.history.push('/trades/'));
  }

  render() {
    const trade = this.state.trade;
    return (
      <main>
        {trade
          ?
          <main>
            <div className="columns">
              <div className="column is-12">
                <h2>{trade.coinName}</h2>
                <h2>{trade.symbol}</h2>
                <h2>{trade.transactionTotal}</h2>
                <button onClick={this.handleDelete}>DELETE</button>
              </div>
            </div>
          </main>
          :
          <p>🏛🏛🏛 Waiting for trade 🏛🏛🏛</p>
        }
      </main>
    );
  }
}

export default TradeShow;

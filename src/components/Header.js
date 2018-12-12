import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { isAuthenticated, deleteToken } from '../lib/auth';
import { decodeToken } from '../lib/auth';

class Header extends React.Component {
  constructor(props){
    super(props);
    this.state = {};
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout() {
    deleteToken();
    this.props.history.push('/');
  }


  render() {
    const username = decodeToken().username;
    return (
      <div className="columns">
        <Link to="/" className="column is-1">Home</Link>
        <Link to="/trades" className="column is-1">Trades</Link>
        {isAuthenticated() && <Link to="/trades/new">Add a trade</Link>}
        {!isAuthenticated() && <Link className="column is-1" to='/register'>Register</Link>}
        {!isAuthenticated() && <Link className="column is-1" to='/login'>Log in</Link>}
        {isAuthenticated() && <h1>Welcome back, {username}</h1>}
        {isAuthenticated() && <a className="navbar-item" onClick={this.handleLogout}>Log out { username }</a>}
      </div>
    );
  }
}

export default withRouter(Header);

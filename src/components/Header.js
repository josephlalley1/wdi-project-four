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
      <nav>
        <Link to="/">Home</Link>
        <Link to="/trades">Trades</Link>
        {isAuthenticated() && <Link to="/trades/new">Add a trade</Link>}
        {!isAuthenticated() && <Link className="navbar-item" to='/login'>Log in</Link>}
        {!isAuthenticated() && <Link className="navbar-item" to='/register'>Register</Link>}
        {isAuthenticated() && <h1>Welcome back, {username}</h1>}
        {isAuthenticated() && <a className="navbar-item" onClick={this.handleLogout}>Log out { username }</a>}
      </nav>

    );
  }
}

export default withRouter(Header);

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './components/Home';
import TradeIndex from './components/trades/Index';
import TradeNew from './components/trades/TradeNew';
import TradeShow from './components/trades/TradeShow';
import Login from './components/auth/Login';
import Register from './components/auth/Register';

import './scss/style.scss';
import 'bulma';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <main>
            <Switch>
              <Route exact path='/' component={Home}/>
              <Route exact path='/trades' component={TradeIndex}/>
              <Route exact path="/login" component={Login} />
              <Route exact path="/register" component={Register} />
              <Route exact path='/trades/new' component={TradeNew}/>
              <Route path="/trades/:id" component={TradeShow} />
            </Switch>
          </main>
        </div>
      </BrowserRouter>
    );
  }
}

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

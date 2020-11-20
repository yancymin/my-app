import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import '../src/style/reset.css';
import '../src/style/global.scss';
import Team from "./pages/Team";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


const routing = (
  <Router>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/team" component={Team} />
    </Switch>
  </Router>
);

ReactDOM.render(
  routing,
  document.getElementById('root')
);

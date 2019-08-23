import React, { Component } from 'react';
import axios from 'axios';
import { HashRouter as Router, Route} from 'react-router-dom'
import { connect } from 'react-redux'
import Comments from '../Comments/Comments';
import Feeling from '../Feeling/Feeling';
import Review from '../Review/Review';
import Supported from '../Supported/Supported';
import Understanding from '../Understanding/Understanding'
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4><i>Don't forget it!</i></h4>
        </header>
        <br/>
          <Route path='/' exact component={Feeling} />
          <Route path='/understanding' exact component={Understanding} />
          <Route path='/supported' exact component={Supported} />
          <Route path='/comments' exact component={Comments} />
          <Route path='/review' exact component={Review} />
      </div>
      </Router>
    );
  }
}

const mapStateToProps = store => {
  return {
    store
  };
};

export default connect(mapStateToProps)(App);

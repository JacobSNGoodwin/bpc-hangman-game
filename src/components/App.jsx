import React, { Component } from 'react';
import {
  HashRouter as Router,
  Route
} from 'react-router-dom';
import MainPage         from './MainPage';
import GamePage         from './GamePage';
import ScorePage        from './ScorePage';
import Bob              from './Bob';
import TwoPlayer        from './TwoPlayerPage';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
        <Route exact path='/'           component={MainPage} />
        <Route path='/GamePage'         component={GamePage} />
        <Route path='/ScorePage'        component={ScorePage} />
        <Route path='/Bob' component={Bob} />
        <Route path='/TwoPlayer'        component={TwoPlayer} />
        </div>
    </Router>
    );
  }
}
export default App;

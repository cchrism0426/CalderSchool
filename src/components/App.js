import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import MyNavbar from './MyNavbar';
import HomePage from './HomePage';
import Piano from './Piano';
import Voice from './Voice';
import MusicTheory from './MusicTheory';
import MusicComp from './MusicComp';
import Events from './Events';
import '../css/App.css';

function App() {
  return (
    <div>
      <MyNavbar />
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/piano" component={Piano} />
          <Route path="/voice" component={Voice} />
          <Route path="/musictheory" component={MusicTheory} />
          <Route path="/musiccomp" component={MusicComp} />
          <Route path="/events" component={Events} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

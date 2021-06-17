// Author:Sreeevidya

import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Start  from "./Components/Start.js";
import Quiz  from "./Components/Quiz.js";

function App() {

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Start />
          </Route>
          <Route path="/quiz">
            <Quiz />
          </Route> 
        </Switch>   
      </Router>
    </div>
  );
}

export default App;

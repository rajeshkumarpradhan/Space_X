import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// Importing components
import Header from "./shared/header";
import ErrorBoundary from "./shared/errorHandler";
import LaunchContainer from "./containers/launchContainer";

function App() {
  return (
    <div className="App">
      <ErrorBoundary>
        <Router>
          <Header/>
          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
            <Switch>
              <Route path="/" component={LaunchContainer}>
              </Route>
            </Switch>
        </Router>
        </ErrorBoundary>
    </div>
  );
}

export default App;

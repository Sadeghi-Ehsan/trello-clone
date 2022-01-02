import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import {ROUTES} from "./constants/constants"
import './App.css';
import {BoardsPage} from "./routes/BoardsPage";

function App() {
  return (
      <Router>
          <div className='h-full'>
              <Switch>
                  <Redirect exact from='/' to='/boards' />
                  <Route exact path={ROUTES.BOARDS} component={BoardsPage} />
              </Switch>
          </div>
      </Router>
  );
}

export default App;

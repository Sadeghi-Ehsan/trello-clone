import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import {ROUTES} from "./constants/constants"
import './App.css';
import {BoardsPage} from "./routes/BoardsPage";
import {BoardPage} from "./routes/BoardPage";

function App() {
  return (
      <Router>
          <div className='h-full'>
              <Switch>
                  <Redirect exact from='/' to='/boards' />
                  <Route exact path={ROUTES.BOARDS} component={BoardsPage} />
                  <Route exact path={ROUTES.BOARD} component={BoardPage} />
              </Switch>
          </div>
      </Router>
  );
}

export default App;

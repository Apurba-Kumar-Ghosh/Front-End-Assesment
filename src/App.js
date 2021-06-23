import React from 'react'
import {Switch,Route} from 'react-router-dom'
import { PageOne } from './pages/Page1';
import { PageTwo } from "./pages/PageTwo";
import {PageThree} from './pages/PageThree'


function App() {
  return (
    <Switch>
      <Route exact path="/">
        <PageOne />
      </Route>
      <Route path = "/two">
        <PageTwo />
      </Route>
      <Route path="/three">
        <PageThree />
      </Route>
    </Switch>
  );
}

export default App;

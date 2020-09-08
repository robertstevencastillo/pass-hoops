import React from "react";
import Home from './pages/home/Home'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PassModal from './components/PassModal/PassModal'
import Layout from './components/Layout/Layout'

function App() {
  return (
    <Router>
      <Switch>
        <Layout>
          <Route exact path="/">
            <PassModal />
          </Route>
          <Route exact path='/home'>
            <Home />
          </Route>
        </Layout>
      </Switch>
    </Router>
  );
}

export default App;

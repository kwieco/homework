import React from 'react';
import NavBar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages';
import About from './pages/About';
import Stoper from './pages/Stoper';
import Counter from './pages/Counter';
import Characters from './pages/Characters';
import Registry from './pages/Registry';
import Loguj from './pages/Loguj';
import CardDetails from './components/Characters/CardDetails';


 
function KamilProject() {
  return (
    <>
    <Router>
    <NavBar />
      <Switch>
        
        <Route path='/' exact component={Home} />
        <Route path='/about' component={About} />
        <Route path='/stoper' component={Stoper} />
        <Route path='/counter' component={Counter} />
        <Route path='/characters' component={Characters} />
        <Route path='/login' component={Loguj} />
        <Route path='/signin' component={Registry} /> 
        <Route path='/:id' component={CardDetails} />


      </Switch>
    </Router>

  </>
  );
}

export default KamilProject;

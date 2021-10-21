import React from "react";
import Pokedex2 from "./Pages/Pokedex2";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Arena from "./Pages/Arena";
import Favourites from "./Pages/Favourites";
import Appbar from "./components3/Appbar";
import PokeDetails from "./components3/Card/PokeDetails";

function App3() {
  return (
    <>
      <Router>
        <Appbar />
        <Switch>
          <Route path="/" exact component={Pokedex2} />
          <Route path="/arena" component={Arena} />
          <Route path="/favourite" component={Favourites} />
          <Route path='/:name' component={PokeDetails} />
        </Switch>
      </Router>
    </>
 );
}

export default App3;

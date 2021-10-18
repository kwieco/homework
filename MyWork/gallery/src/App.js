import React from "react";
import NavBar from "./components/Navigation/NavBar";
import Pokemons from "./Pages/Pokemons";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Arena from "./Pages/Arena";
import Favourites from "./Pages/Favourites";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Switch>
          <Route path="/" exact component={Pokemons} />
          <Route path="/arena" component={Arena} />
          <Route path="/favourite" component={Favourites} />
        </Switch>
      </Router>
    </>
  );
}

export default App;

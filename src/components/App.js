import React from "react";
import NavBar from "./NavBar";
import { Route, Switch } from "react-router-dom";
import DogList from "./DogList";
import DogForm from "./DogForm";
import Home from "./Home";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path='/doglist'>
          <DogList />
        </Route>
        <Route exact path="/dogform">
          <DogForm />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
      
    </div>
  );
}

export default App;

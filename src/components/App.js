import React, { useEffect, useState} from "react";
import NavBar from "./NavBar";
import { Route, Switch } from "react-router-dom";
import DogList from "./DogList";
import Home from "./Home";
import NewDog from "./NewDog";
import DogForm from "./DogForm";


function App() {
  const [dogs, setDogs] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/dogs")
        .then((r) => r.json())
        .then((data) => setDogs(data))
    }, [])


  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path='/doglist'>
          <DogList dogs={dogs}/>
        </Route>
        <Route exact path="/dogform">
          <NewDog  dogs={dogs} setDogs={setDogs}/>
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
      
    </div>
  );
}

export default App;

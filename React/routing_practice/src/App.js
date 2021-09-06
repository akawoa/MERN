import React, { useState } from "react";
import { useParams } from "react-router";
import {
  BrowserRouter,
  Link,
  Switch,
  Route
} from "react-router-dom";
    
const Home = (props) => {
  return (
    <h1>Welcome to the home page!</h1>
  );
}

const Input = (props) => {
  const { input } = useParams();
  let number = null;
  let word = "";

  if(isNaN( input ) == false) {
    number = <h1>The number is: { input }!</h1>;
  } else {
    word = <h1>The word is: { input }!</h1>;
  }
  return (
    <div>
      {number}
      {word}
    </div>
    
  );
}

    
function App() {
  return (
    <BrowserRouter>
      <p>
        <Link to="/home">Home</Link>
      </p>
      <Switch>
      <Route path="/home">
          <Home />
        </Route>
        <Route path="/:input">
          <Input />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
    
export default App;
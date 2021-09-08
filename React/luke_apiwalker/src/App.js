import React, { useState } from 'react';
import './App.css';
import { useParams } from "react-router";
import {
  BrowserRouter,
  Link,
  Switch,
  Route,
  Redirect,
  useHistory
} from "react-router-dom";

import SearchBar from './components/SearchBar'
import People from './components/People';
import Planets from './components/Planets';
import SingleObject from './components/SingleObject';

function App() {

    const [category, setCategory] = useState("");
    const [redirectUrl, setRedirectUrl] = useState("");
    const history = useHistory();

    const updateCategoryHandler = (e) => {
        e.preventDefault();
        setCategory(e.target.value);
    };

    const [categoryId, setCategoryId] = useState("");
    const updateCategoryIdHandler = (e) => {
        e.preventDefault();
        setCategoryId(e.target.value);
    };

    const [shouldRedirect, setShouldRedirect] = useState(false);
    const updateSearchParams = () => {
        if (shouldRedirect === true) {
          var newRedirectUrl = "/" + category + "/" + categoryId;
          console.log(newRedirectUrl);
          // history.push("/planets");
            return <Redirect to={newRedirectUrl} />;
        }
    };

    const fetchSwapi = (e) => {
      e.preventDefault();
      setShouldRedirect(true);     
    };

  return (
<div>
<BrowserRouter>
    <div>
    <h1>Search the Star Wars Galaxies</h1>
    <form onSubmit={fetchSwapi}>
        <label htmlFor="category">Search for:</label>
        <select name="category" onChange={updateCategoryHandler}>
            <option value="">Please select a category</option>
            <option value="people">People</option>
            <option value="planets">Planets</option>
        </select>
        <label htmlFor="id">ID:</label>
        <input type="text" name="categoryId" onChange={updateCategoryIdHandler} placeholder="ID to search"></input>
    <input type="submit" value="Search"  />
    </form>
    <p>
    {updateSearchParams()}
    </p>
    <p>
    <Link to="/">Home</Link>
                &nbsp;|&nbsp;
                <Link to="/planets">Planets</Link>
                &nbsp;|&nbsp;
                <Link to="/people">People</Link>
    </p>
    <div>

    </div>
</div>
    

      <Switch>
        <Route path="/people">
          <People />
        </Route>
        <Route path="/planets">
          <Planets />
        </Route>
      </Switch>
      <Route path="/:category/:id">
        <SingleObject category={category} id={categoryId} />
      </Route>
      <Route exact path="/">
        <SearchBar />
      </Route>
    </BrowserRouter>
    </div>
  );
}

export default App;

import React from 'react';
import {
  BrowserRouter,
  Link,
  Switch,
  Route
} from "react-router-dom";


import AuthorForm from './views/AuthorForm';
import EditForm from './views/EditForm';
import ShowPage from './views/ShowPage';
import IndexPage from './views/IndexPage';

function App() {
  return (
    <BrowserRouter>
      <header>
        <Link to={"/"}>
          Home
        </Link>
        |
        <Link to={"/authors/new"}>
          New
        </Link>
      </header>

      <Switch>
        <Route exact path="/authors/new">
          <AuthorForm />
        </Route>
        <Route exact path="/authors/:id/edit">
          <EditForm />
        </Route>
        <Route exact path="/authors/:id">
          <ShowPage />
        </Route>
        <Route exact path="/">
          <IndexPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
export default App;
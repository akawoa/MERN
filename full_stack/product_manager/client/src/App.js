import React from 'react';
import {
  BrowserRouter,
  Link,
  Switch,
  Route
} from "react-router-dom";


import ProductForm from './components/views/ProductForm';
import EditForm from './components/views/EditForm';
import ShowPage from './components/views/ShowPage';
import IndexPage from './components/views/IndexPage';

function App() {
  return (
    <BrowserRouter>
      <header>
        <Link to={"/"}>
          Home
        </Link>
        |
        <Link to={"/product/new"}>
          New
        </Link>
      </header>

      <Switch>
        <Route exact path="/product/new">
          <ProductForm />
        </Route>
        <Route exact path="/product/:id/edit">
          <EditForm />
        </Route>
        <Route exact path="/product/:id">
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
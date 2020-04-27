import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import BooksPage from "./pages/BooksPage";
import AuthorsPage from "./pages/AuthorsPage";
import AddBookPage from "./pages/AddBookPage";
import EditBookPage from "./pages/EditBookPage";
import { Header } from "./components";

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/" component={BooksPage} exact />
        <Route path="/authors" component={AuthorsPage} exact />
        <Route path="/add/book" component={AddBookPage} exact />
        <Route path="/edit/book/:bookId" component={EditBookPage} exact />
      </Switch>
    </>
  );
}

export default App;

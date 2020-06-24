import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Cart from "./components//Cart";
import { Provider } from "react-redux";
import store from "./store.js";

function App() {
  return (
    <Provider store={store}>
      <div className="container">
        <BrowserRouter>
          <Navbar />
          <main className="main">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/cart" component={Cart} />
            </Switch>
          </main>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;

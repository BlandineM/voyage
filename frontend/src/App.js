import React from "react";
import Homepage from "./components/Homepage";
import Footer from "./components/Footer";
import Type from "./components/Type";
import Month from "./components/Month";
import { Switch, Route } from "react-router-dom";
import Header from "./components/Header";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/:type/:month" component={Month} />
        <Route path="/:type" component={Type} />
      </Switch>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;

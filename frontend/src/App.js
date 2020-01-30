import React from "react";
import Homepage from "./components/Homepage";
import Footer from "./components/Footer";
import Plage from "./components/Plage";
import Randonnee from "./components/Randonnee";
import Month from "./components/Month";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/plage" component={Plage} />
        <Route path="/01" component={Month} />
        <Route path="/randonnee" component={Randonnee} />
      </Switch>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;

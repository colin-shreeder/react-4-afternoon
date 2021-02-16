import React, { Component } from "react";
import { HashRouter, Link } from "react-router-dom";
import routes from "./routes";
import utahstate from "../src/utahstate.png";


export default class App extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <nav className="nav">
            <div><img src={utahstate} alt="Logo" /></div>
            <div className="link-wrap">
              <Link to="/" className="links">
                Home
            </Link>
              <Link to="/about" className="links">
                About
            </Link>
            </div>
          </nav>
          {routes}
        </div>
      </HashRouter>
    );
  }
}
import React, { Component } from "react";
import Navigation from "./components/Navigation";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import Theme from "./Theme";
import { HashRouter } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={Theme}>
        <HashRouter>
            <Navigation />
        </HashRouter>
      </MuiThemeProvider>
    );
  }
}
export default App;
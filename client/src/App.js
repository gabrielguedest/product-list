import React, { Component } from "react";
import store from "./store";
import { Provider } from "react-redux";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import AppContainer from "./components/AppContainer";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route path="/:page" component={AppContainer} />
            <Route path="/" component={AppContainer} />
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;

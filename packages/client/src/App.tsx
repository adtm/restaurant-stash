import * as React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./pages/Home";

export const App: React.SFC<any> = () => (
  <BrowserRouter>
    <Switch>
      <Route exact={true} path="/" component={Home} />
    </Switch>
  </BrowserRouter>
);

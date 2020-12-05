import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { Employees } from "./components/Employees/Employees";

export const Routes = () => {
  return (
    <Switch>
      <Route exact path={"/hb-employees"} component={Employees} />
      <Route>
        <Redirect to={"/hb-employees"} />
      </Route>
    </Switch>
  );
};

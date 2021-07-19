import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./views/login/Login";
import Cadastro from "./views/cadastro/Cadastro";

const Router = (props) => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/cadastro" exact component={Cadastro} />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default Router;

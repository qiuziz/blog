/*
 * @Author: qiuz
 * @Github: <https://github.com/qiuziz>
 * @Date: 2019-11-07 16:03:31
 * @Last Modified by: qiuz
 * @Last Modified time: 2021-01-29 10:52:32
 */

import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import { Home, Article } from 'pages';

export const routes = [
  {
    path: '/',
    Component: Home,
    exact: true,
    title: '首页',
    noNav: true
  },
  {
    path: '/article',
    Component: Article,
    exact: true,
    title: '',
    noNav: true
  }
];

const App = () => {
  return (
    <Switch>
      {routes.map(({ path, Component, exact }: any, index) => {
        return (
          <Route
            key={index}
            path={path}
            exact={exact}
            render={(props) => <Component {...props} History={History} />}
          />
        );
      })}
      <Redirect to={''} />
    </Switch>
  );
};

export default class RouteConfig extends React.Component {
  render() {
    return (
      <Router>
        <App />
      </Router>
    );
  }
}

/*
 * @Author: qiuz
 * @Github: <https://github.com/qiuziz>
 * @Date: 2019-11-07 16:03:31
 * @Last Modified by: qiuz
 * @Last Modified time: 2021-01-29 12:02:49
 */

import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { Home, Article } from 'pages';
import { getGlobalData } from 'utils';
import { ViewportProvider } from 'hooks';

export const routes = [
  {
    path: '/blog/',
    Component: Home,
    exact: true,
    title: '首页',
    noNav: true
  },
  {
    path: '/blog/article/',
    Component: Article,
    exact: true,
    title: '',
    noNav: true
  }
];

const App = () => {
  const prefix = getGlobalData('PREFIX');
  return (
    <Switch>
      {routes.map(({ path, Component, exact }: any, index) => {
        return (
          <Route
            key={index}
            path={`${prefix}${path}`}
            exact={exact}
            render={(props) => <Component {...props} History={History} />}
          />
        );
      })}
      <Redirect to={`${prefix}/blog`} />
    </Switch>
  );
};

export default class RouteConfig extends React.Component<any, any> {
  render() {
    return (
      <ViewportProvider>
        <Router>
          <App />
        </Router>
      </ViewportProvider>
    );
  }
}

import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Contact from '../components/pages/Contact';
import Experiments from '../components/pages/Experiments';
import Home from '../components/pages/Home';

interface IRoute {
  exact?: boolean;
  path: string;
  component: () => JSX.Element;
  navItemLabel: string;
}

interface INavItemData {
  to: string;
  navItemLabel: string;
}

const routes: IRoute[] = [
  {
    exact: true,
    path: '/',
    component: Home,
    navItemLabel: 'Home',
  },
  {
    path: '/experiments',
    component: Experiments,
    navItemLabel: 'Experiments',
  },
  {
    path: '/contact',
    component: Contact,
    navItemLabel: 'Contact',
  },
];

export function getDataForNavItems(): INavItemData[] {
  return routes.map(({ path, navItemLabel }) => ({ navItemLabel, to: path }));
}

export function createRoutes() {
  return (
    <Switch>
      {routes.map(({ exact = false, path, component }) => (
        <Route key={path} exact={exact} path={path} component={component} />
      ))}
    </Switch>
  );
}

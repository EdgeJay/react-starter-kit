import React from 'react';
import { match, Route, Switch } from 'react-router-dom';
import Contact from '../components/pages/Contact';
import Experiments, { Books } from '../components/pages/Experiments';
import Home from '../components/pages/Home';
import NotFound from '../components/pages/NotFound';

interface IRoute {
  key: string;
  exact?: boolean;
  path: string;
  component: () => JSX.Element;
  navItemLabel: string;
  routes?: IRoute[];
}

interface ICreateSubRoutesParams {
  routeKey: string;
}

interface INavItemData {
  key: string;
  to: string;
  navItemLabel: string;
}

const routes: IRoute[] = [
  {
    key: 'home',
    exact: true,
    path: '/',
    component: Home,
    navItemLabel: 'Home',
  },
  {
    key: 'experiments',
    path: '/experiments',
    component: Experiments,
    navItemLabel: 'Experiments',
    routes: [
      {
        key: 'experiments-books',
        path: '/books',
        component: Books,
        navItemLabel: 'Fetch Books',
      },
    ],
  },
  {
    key: 'contact',
    path: '/contact',
    component: Contact,
    navItemLabel: 'Contact',
  },
];

export function getDataForNavItems(): INavItemData[] {
  return routes.map(({ key, path, navItemLabel }) => ({ key, navItemLabel, to: path }));
}

export function getDataForSubNavItems({ routeKey }: ICreateSubRoutesParams): INavItemData[] {
  const routesForNav = routes.find(route => route.key === routeKey);
  if (routesForNav && routesForNav.routes.length > 0) {
    return routesForNav.routes.map(({ key, path, navItemLabel }) => ({
      key,
      navItemLabel,
      to: `${routesForNav.path}${path}`,
    }));
  }
  return null;
}

export function getSubNavItemsForLocation(pathname: string): INavItemData[] {
  const routesForNav = routes.find(route => route.path === pathname);
  if (routesForNav && routesForNav.routes && routesForNav.routes.length > 0) {
    return routesForNav.routes.map(({ key, path, navItemLabel }) => ({
      key,
      navItemLabel,
      to: `${routesForNav.path}${path}`,
    }));
  }
  return null;
}

export function createRoutes(): JSX.Element | JSX.Element[] {
  const renderRoutes = routes.map(({ key, exact = false, path, component }) => (
    <Route key={key} exact={exact} path={path} component={component} />
  ));

  return (
    <Switch>
      {renderRoutes}
      <Route key="/page-not-found" component={NotFound} />
    </Switch>
  );
}

export function createSubRoutes({ routeKey }: ICreateSubRoutesParams): JSX.Element[] {
  const routesToRender = routes.find(route => route.key === routeKey);
  if (routesToRender && routesToRender.routes) {
    return routesToRender.routes.map(({ key, exact = false, path, component }) => (
      <Route key={key} exact={exact} path={`${routesToRender.path}${path}`} component={component} />
    ));
  }
  return null;
}

import { Switch, Route } from 'wouter';

import { Home } from '@/pages';

/**
 * The router is imported in app.jsx
 *
 * Our site just has two routes in it–Home and About
 * Each one is defined as a component in /pages
 * We use Switch to only render one route at a time https://github.com/molefrog/wouter#switch-
 */

export const PageRouter = () => (
  <Switch>
    <Route path='/' component={Home} />
    <Route>404, Not Found!</Route>
  </Switch>
);

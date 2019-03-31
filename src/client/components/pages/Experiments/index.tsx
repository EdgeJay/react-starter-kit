import React from 'react';
import { NavLink } from 'react-router-dom';
import { createSubRoutes, getDataForSubNavItems } from '../../../utils/routeUtil';
import Books from './Books';

export { Books };

const Experiments = () => (
  <React.Fragment>
    <p>Experiments</p>
    {getDataForSubNavItems({ routeKey: 'experiments' }).map(({ key, to, navItemLabel }) => (
      <NavLink key={key} to={to}>
        {navItemLabel}
      </NavLink>
    ))}
    {createSubRoutes({ routeKey: 'experiments' })}
  </React.Fragment>
);

export default Experiments;

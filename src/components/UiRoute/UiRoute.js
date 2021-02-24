import React from 'react';
import { NavLink } from 'dva/router';

import styles from './UiRoute.scss';

const Route = () => {
  return (
    <h1 className={styles.title}>
      <NavLink exact to="/">Home</NavLink> | <NavLink to="/about">About</NavLink> | <NavLink to="/counter">Counter</NavLink>
    </h1>
  );
};

Route.propTypes = {
};

export default Route;

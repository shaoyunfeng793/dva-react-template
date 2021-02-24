import React from 'react';
import { connect } from 'dva';

import styles from './Home.css';

import UiRoute from '../../components/UiRoute/UiRoute';

function Home() {
  return (
    <div className={styles.normal}>
      <UiRoute />
      <div className={styles.welcome} />
      <ul className={styles.list}>
        <li>To get started, edit <code>src/index.js</code> and save to reload.</li>
        <li><a href="https://github.com/dvajs/dva-docs/blob/master/v1/en-us/getting-started.md">Getting Started</a></li>
      </ul>
    </div>
  );
}

Home.propTypes = {
};

export default connect()(Home);

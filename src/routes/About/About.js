import React from 'react';
import { connect } from 'dva';

import styles from './About.css';

import UiRoute from '../../components/UiRoute/UiRoute';

function About() {
  return (
    <div className={styles.normal}>
      <UiRoute />
      <p>
      	<span>dva</span> 首先是一个基于 <span>redux</span> 和 <span>redux-saga</span> 的数据流方案，然后为了简化开发体验，<span>dva</span> 还额外内置了 <span>react-router</span> 和 <span>fetch</span>，所以也可以理解为一个轻量级的应用框架。
      </p>
      <p className={styles.link}><a href="">Study Dva</a></p>
    </div>
  );
}

About.propTypes = {
};

export default connect()(About);

import React from 'react';
import { connect } from 'dva';

import styles from './Counter.css';

import UiRoute from '@/components/UiRoute/UiRoute';

function Counter(props) {

  const { counterState:{ count }, dispatch } = props;

  const handleIncrease = () => dispatch({ type: 'counter/increase' });

  const handleDecrease = () => dispatch({ type: 'counter/decrease' });

  const handleIncreaseAsync = () => dispatch({ type: 'counter/increaseAsync' });

  const handleDecreaseAsync = () => dispatch({ type: 'counter/decreaseAsync' });

  return (
    <div className={styles.normal}>
      <UiRoute />
      <div>
        <h3>当前计数：{count}</h3>
        <p>
          <button onClick={handleIncrease}>+1</button>
          <button onClick={handleDecrease}>-1</button>
          <button onClick={handleIncreaseAsync}>+1 异步</button>
          <button onClick={handleDecreaseAsync}>-1 异步</button>
        </p>
      </div>
    </div>
  );
}

Counter.propTypes = {
  
};

const mapStateToProps = state => {
  return {
    counterState: state.counter
  }
}

export default connect(mapStateToProps)(Counter);

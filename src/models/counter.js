import { delay } from 'dva/saga';

export default {

  namespace: 'counter',

  state: {
    count: 0
  },

  effects: { //异步action
    *increaseAsync({ payload }, { call, put }) {  // eslint-disable-line
      yield delay(1000);
      yield put({ type: 'increase' });
    },
    *decreaseAsync({ payload }, { call, put }) {  // eslint-disable-line
      yield delay(1000);
      yield put({ type: 'decrease' });
    },
  },

  reducers: {
    increase(state, { payload }){
      return { ...state, count: state.count+1 }
    },
    decrease(state, { payload }){
      return { ...state, count: state.count-1 }
    }
  },

};

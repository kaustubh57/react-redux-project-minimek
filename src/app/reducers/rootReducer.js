import { combineReducers } from 'redux';
import testReducer from './testReducer';
import tabsReducer from '../../features/tabs/tabsReducer';

const rootReducer = combineReducers({
  test: testReducer,
  tabs: tabsReducer
});

export default rootReducer;
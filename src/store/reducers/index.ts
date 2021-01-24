import { combineReducers } from 'redux';
import { counter } from './count';

const rootReducer = combineReducers({
  counter
});

export type ApplicationState = ReturnType<typeof rootReducer>;

export { rootReducer };
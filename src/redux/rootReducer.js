import { combineReducers } from 'redux';

import loansReducer from './reducers/loans.reducer';

const rootReducer = combineReducers({
    loans: loansReducer,
});

export default rootReducer;
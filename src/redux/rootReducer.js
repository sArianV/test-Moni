import { combineReducers } from 'redux';

import prestamosReducer from './reducers/prestamos.reducer';

const rootReducer = combineReducers({

    prestamos: prestamosReducer,

});

export default rootReducer;
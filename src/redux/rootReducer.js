import { combineReducers } from 'redux';

import prestamosReducer from './Prestamos/prestamos.reducer';

const rootReducer = combineReducers({

    prestamos: prestamosReducer,

});

export default rootReducer;
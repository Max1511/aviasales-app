import { combineReducers } from 'redux';

import tickets from './tickets.js';
import transfers from './transfers.js';
import sorts from './sorts.js';

export default combineReducers({
    tickets,
    transfers,
    sorts
});
import { SortType } from '../actions';

const sorts = (state = SortType.CHEAPEST, action) => {
    switch (action.type) {
    case 'SET_SORT':
        return action.sortType;
    default:
        return state;
    }
};

export default sorts;
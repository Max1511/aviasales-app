const transfers = (state = {
    isFilteringAll: true,
    isFiltering: [true, true, true, true]
}, action) => {
    switch (action.type) {
    case 'SET_TRANSFER_FILTER_ALL':
        return {
            isFilteringAll: !state.isFilteringAll,
            isFiltering: state.isFiltering.map(element => !element),
        };
    case 'SET_TRANSFER_FILTER':
        return {
            isFilteringAll: state.isFiltering.every((element, index) => index === action.count ? !element : element),
            isFiltering: state.isFiltering.map((element, index) => index === action.count ? !element : element),
        };
    default:
        return state;
    }
};

export default transfers;
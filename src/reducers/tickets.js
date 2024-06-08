const initialState = {
    tickets: [],
    count: 5,
    stop: false,
    isLoading: true,
    isError: false
};

const tickets = (state = initialState, action) => {
    switch (action.type) {
    case 'SHOW_MORE_TICKETS':
        return {
            ...state,
            count: state.count + action.count
        };
    case 'RECEIVE_TICKETS':
        return {
            ...state,
            tickets: state.tickets.concat(action.json.tickets),
            stop: action.json.stop,
            isLoading: false
        };
    case 'SET_ERROR':
        return {
            ...state,
            isLoading: false,
            isError: true
        };
    default:
        return state;
    }
};

export default tickets;
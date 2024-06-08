import fetch from 'cross-fetch';

export const SortType = {
    CHEAPEST: 'CHEAPEST',
    TIME: 'TIME'
};

export const setTransferFilterAll = () => ({
    type: 'SET_TRANSFER_FILTER_ALL'
});

export const setTransferFilter = (count) => ({
    type: 'SET_TRANSFER_FILTER',
    count
});

export const setSort = sortType => ({
    type: 'SET_SORT',
    sortType
});

export const showMoreTickets = count => ({
    type: 'SHOW_MORE_TICKETS',
    count
});

export function fetchSearch() {
    return function (dispatch) {
        return fetch('https://aviasales-test-api.kata.academy/search')
            .then(response => response.json())
            .then(json => {
                dispatch(receiveSearchId(json.searchId));
                return dispatch(fetchTickets(json.searchId));
            })
            .catch(() => dispatch(setError()));
    };
}

export function fetchTickets(searchId) {
    return dispatch => {
        return fetch(`https://aviasales-test-api.kata.academy/tickets?searchId=${searchId}`)
            .then(response => response.json())
            .then(json => dispatch(receiveTickets(json)))
            .catch(() => dispatch(setError()));
    };
}

const receiveSearchId = (searchId) => ({
    type: 'RECEIVE_SEARCH_ID',
    searchId
});

const receiveTickets = (json) => ({
    type: 'RECEIVE_TICKETS',
    json
});

const setError = () => ({
    type: 'SET_ERROR'
});
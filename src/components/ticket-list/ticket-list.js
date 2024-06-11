import React from 'react';
import { connect } from 'react-redux';
import { Spin } from 'antd';

import Ticket from '../ticket';
import { showMoreTickets, SortType } from '../../actions';
import './ticket-list.scss';

const TicketList = ({ tickets, count, isLoading, isError, isFilteringTransfer, sortType, showMoreTickets }) => {

    const displayingTickets = tickets
        .filter(ticket => isFilteringTransfer[ticket.segments[0].stops.length] && isFilteringTransfer[ticket.segments[1].stops.length])
        .sort((ticket1, ticket2) => {
            if (sortType === SortType.CHEAPEST)
                return ticket1.price - ticket2.price;
            if (sortType === SortType.TIME)
                return ticket1.segments.reduce((accumulator, segment) => accumulator + segment.duration, 0) - ticket2.segments.reduce((accumulator, segment) => accumulator + segment.duration, 0);
        });
    
    const renderTickets = () => {
        return displayingTickets
            .slice(0, count)
            .map(ticket =>
                <li key={ticket.id}>
                    <Ticket data={ticket}/>
                </li>
            );
    };

    const hasData = !isLoading && !isError;
    const content = hasData ?
        <ul className='ticket-list'>
            {renderTickets()}
        </ul> : null;
    const button = hasData && (count < displayingTickets.length) && !isFilteringTransfer.every(status => !status) ?
        <button className='show-more-button'
            onClick={() => showMoreTickets(5)}>
            Показать ещё пять билетов!
        </button> : null;
    const loader = isLoading ? <Spin className='spin' size='large'/> : null;
    const error = isError ? <span className='error-message'>Something is wrong!</span> : null;

    return (
        <>
            {content}
            {button}
            {loader}
            {error}
        </>
    );
};

const mapStateToProps = ({ tickets, sorts, transfers }) => ({
    tickets: tickets.tickets,
    count: tickets.count,
    isLoading: tickets.isLoading,
    isError: tickets.isError,
    sortType: sorts,
    isFilteringTransfer: transfers.isFiltering
});

const mapDispatchToProps = dispatch => ({
    showMoreTickets: count => dispatch(showMoreTickets(count))
});

export default connect(mapStateToProps, mapDispatchToProps)(TicketList);
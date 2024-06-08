import React from 'react';
import { format } from 'date-fns';

import './ticket.scss';

const Ticket = ({ data }) => {

    const { price, carrier, segments } = data;
    const imageSource = `http://pics.avs.io/99/36/${carrier}.png`;

    const renderWay = ({ origin, destination, date, duration }) => {
        let arrivalTime = new Date(date);
        arrivalTime.setMinutes(arrivalTime.getMinutes() + duration);
        return (
            <div className='way'>
                <p className='top-text'>{origin} - {destination}</p>
                <p className='bottom-text'>{format(new Date(date), 'HH:mm')} - {format(arrivalTime, 'HH:mm')}</p>
            </div>
        );
    };

    const renderTime = ({ duration }) => {
        return (
            <div className='way'>
                <p className='top-text'>В пути</p>
                <p className='bottom-text'>{`${Math.floor(duration / 60)}ч ${duration % 60}м`}</p>
            </div>
        );
    };

    const renderTransfers = ({ stops }) => {
        const count = stops.length;
        const transferText = count == 0 ? 'Без пересадок' : count == 1 ? '1 пересадка' : `${count} пересадки`;
        return (
            <div className='way'>
                <p className='top-text'>{transferText}</p>
                <p className='bottom-text'>{stops.join(', ')}</p>
            </div>
        );
    };

    return (
        <div className='ticket'>
            <div className='top'>
                <span className='price'>{price} Р</span>
                <img src={imageSource} alt={carrier}/>
            </div>
            <div className='race'>
                {renderWay(segments[0])}
                {renderTime(segments[0])}
                {renderTransfers(segments[0])}
                {renderWay(segments[1])}
                {renderTime(segments[1])}
                {renderTransfers(segments[1])}
            </div>
        </div>
    );
};

export default Ticket;
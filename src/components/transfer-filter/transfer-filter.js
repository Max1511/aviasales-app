import React from 'react';
import { connect } from 'react-redux';

import { setTransferFilterAll, setTransferFilter } from '../../actions';
import './transfer-filter.scss';

const TransferFilter = ({ isFilteringAll, isFiltering, setTransferFilterAll, setTransferFilter }) => {
    const renderCheckbox = (text, checked, action) => {
        return (
            <li>
                <input
                    id={text}
                    name='transfer-input'
                    type='checkbox'
                    checked={checked}
                    onClick={action}
                    readOnly/>
                <label htmlFor={text}>{text}</label>
            </li>
        );
    };
    
    return (
        <div className='block'>
            <span className='title'>
                Количество пересадок
            </span>
            <ul className='transfer-list'>
                {renderCheckbox('Все', isFilteringAll, setTransferFilterAll)}
                {renderCheckbox('Без пересадок', isFiltering[0], () => setTransferFilter(0))}
                {renderCheckbox('1 пересадка', isFiltering[1], () => setTransferFilter(1))}
                {renderCheckbox('2 пересадки', isFiltering[2], () => setTransferFilter(2))}
                {renderCheckbox('3 пересадки', isFiltering[3], () => setTransferFilter(3))}
            </ul>
        </div>
    );
};

const mapStateToProps = ({ transfers }) => ({
    isFilteringAll: transfers.isFilteringAll,
    isFiltering: transfers.isFiltering,
});

const mapDispatchToProps = dispatch => ({
    setTransferFilterAll: () => dispatch(setTransferFilterAll()),
    setTransferFilter: count => dispatch(setTransferFilter(count)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TransferFilter);
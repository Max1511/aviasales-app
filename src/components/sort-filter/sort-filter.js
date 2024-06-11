import React from 'react';
import { connect } from 'react-redux';

import { setSort, SortType } from '../../actions';
import './sort-filter.scss';

const SortFilter = ({ currentType, setSort }) => {
    const renderButton = (text, type) => {
        return (
            <div className='sort-button'>
                <input
                    id={type}
                    name='sort-button'
                    type='radio'
                    checked={type === currentType}
                    onClick={() => setSort(type)}/>
                <label htmlFor={type}>
                    {text}
                </label>
            </div>
        );
    };

    return (
        <section>
            {renderButton('Самый дешевый', SortType.CHEAPEST)}
            {renderButton('Самый быстрый', SortType.TIME)}
        </section>
    );
};

const mapStateToProps = ({ sorts }) => ({
    currentType: sorts
});

const mapDispatchToProps = dispatch => ({
    setSort: sortType => dispatch(setSort(sortType))
});

export default connect(mapStateToProps, mapDispatchToProps)(SortFilter);
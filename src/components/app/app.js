import React from 'react';

import TransferFilter from '../transfer-filter';
import SortFilter from '../sort-filter';
import TicketList from '../ticket-list';
import './app.scss';
import logo from '../../images/logo.svg';

const App = () => {
    return (
        <>
            <header>
                <img className='logo' src={logo} alt='Logo'/>
            </header>
            <main>
                <aside>
                    <TransferFilter/>
                </aside>
                <div>
                    <SortFilter/>
                    <TicketList/>
                </div>
            </main>
        </>
    );
};

export default App;
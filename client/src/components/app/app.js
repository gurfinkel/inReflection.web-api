import React from 'react';

import Header from '../header';
import ItemList from '../item-list';

import './app.css';

const App = () => {
    return (
        <div>
            <Header />
    
            <div className="row mb2">
                <div className="col-md-6">
                    <ItemList />
                </div>
            </div>
        </div>
    );
};

export default App;

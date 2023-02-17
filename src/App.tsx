import { useState } from 'react';
// import Modal from 'react-modal';

import Table from './components/Table';

// Modal.setAppElement('#root');

function App() {
    return (
        <div className="App" id="app">
            <h1 className="mt-0 mb-2 text-center text-5xl font-bold leading-tight text-gray-800">
                Task planner
            </h1>
            <div className="flex flex-col justify-center px-40">
                <Table />
            </div>
        </div>
    );
}

export default App;

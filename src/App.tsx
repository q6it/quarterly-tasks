import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
// import Table from './Test';
import Table from './components/Table';

function App() {
    return (
        <div className="App">
            <h1 className="mt-0 mb-2 text-center text-5xl font-bold leading-tight text-gray-800">
                Task planner
            </h1>
            <Table />
        </div>
    );
}

export default App;

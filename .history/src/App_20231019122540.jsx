import React from 'react'
import ReactDOM from 'react-dom/client'
import Routes from './routes/Routes';
import { ChurchFrontApp } from './ChurchFrontApp';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot( document.getElementById('root')).render(
    // <React.StrictMode>
    <BrowserRouter>
        <Routes/>
    </BrowserRouter>
    // </React.StrictMode>
);
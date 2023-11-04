import React from 'react'
import ReactDOM from 'react-dom/client'
import Routes from './routes/Routes';
import { ChurchFrontApp } from './ChurchFrontApp';
import { BrowserRouter, Router } from 'react-router-dom';

ReactDOM.createRoot( document.getElementById('root')).render(

    <Router>
        <Routes/>
    </Router>
    
);
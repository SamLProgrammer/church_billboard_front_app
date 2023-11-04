import React from 'react'
import ReactDOM from 'react-dom/client'
import Routes from './routes/Routes';
import { ChurchFrontApp } from './ChurchFrontApp';

ReactDOM.createRoot( document.getElementById('root')).render(
    <React.StrictMode>
        {/* <ChurchFrontApp/> */}
        <Routes/>
    </React.StrictMode>
);
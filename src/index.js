import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import State from './states/state';
import { creatingResult } from './states/state';
import { clearResult } from './states/state';
import { linkResultTest } from './states/state';
import { CheckWindowStart } from './states/state';
import { ScrollTop } from './states/state';

const root = ReactDOM.createRoot(document.getElementById('root'));
CheckWindowStart();
root.render(
    <React.StrictMode>
        <App
            ScrollTop={ScrollTop}
            state={State}
            creatingResult={creatingResult}
            clearResult={clearResult}
            linkResultTest={linkResultTest}
        />
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

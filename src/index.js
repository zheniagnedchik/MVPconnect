import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import State from './states/state';
import Prices from './states/Prices';
import Comments from './states/Comments';
import { creatingResult } from './states/state';
import { clearResult } from './states/state';
import { linkResultTest } from './states/state';
import { CheckWindowStart } from './states/state';
import { ScrollTop } from './states/state';
import { CheckNumberSplider } from './states/state';

const root = ReactDOM.createRoot(document.getElementById('root'));
CheckWindowStart();

root.render(
    <React.StrictMode>
        <App
            CheckNumberSplider={CheckNumberSplider}
            ScrollTop={ScrollTop}
            Prices={Prices}
            state={State}
            creatingResult={creatingResult}
            clearResult={clearResult}
            linkResultTest={linkResultTest}
            Comments={Comments.comments}
            Stars={Comments.stars}
            Videos={Comments.videos}
        />
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

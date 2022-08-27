import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { CheckWindowSize } from './states/state';
import MainComponent from './components/mainComponent/MainComponent';

function App(props) {
    CheckWindowSize();

    return (
        <BrowserRouter>
            <div>
                <MainComponent
                    state={props.state}
                    creatingResult={props.creatingResult}
                    clearResult={props.clearResult}
                    linkResultTest={props.linkResultTest}
                />
            </div>
            <div></div>
        </BrowserRouter>
    );
}

export default App;

import { BrowserRouter } from 'react-router-dom';
import './App.css';
import MainComponent from './components/mainComponent/MainComponent';

function App(props) {
    return (
        <BrowserRouter>
            <div className="App">
                <MainComponent
                    state={props.state}
                    creatingResult={props.creatingResult}
                    clearResult={props.clearResult}
                    linkResultTest={props.linkResultTest}
                />
            </div>
        </BrowserRouter>
    );
}

export default App;

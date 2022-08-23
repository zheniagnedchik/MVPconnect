import { BrowserRouter } from 'react-router-dom';
import './App.css';
import MainComponent from './components/mainComponent/MainComponent';
import { useEffect, useState } from 'react';

function App(props) {
    const [windowSize, setWindowSize] = useState(getWindowSize());

    useEffect(() => {
        function handleWindowResize() {
            setWindowSize(getWindowSize());
        }

        window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, []);

    function getWindowSize() {
        const { innerWidth, innerHeight } = window;
        return { innerWidth, innerHeight };
    }
    return (
        <BrowserRouter>
            <div className={`${window.innerWidth > 700 ? 'App' : ''}`}>
                <MainComponent
                    state={props.state}
                    creatingResult={props.creatingResult}
                    clearResult={props.clearResult}
                    linkResultTest={props.linkResultTest}
                />
            </div>
            <div className={`${window.innerWidth > 800 ? 'check' : ''}`}></div>
        </BrowserRouter>
    );
}

export default App;

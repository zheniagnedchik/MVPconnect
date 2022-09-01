import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { CheckWindowSize } from './states/state';
import MainComponent from './components/mainComponent/MainComponent';
import Courses from './components/courses/Courses';
import Frontend from './components/courses/frontend/Frontend';
import Designer from './components/courses/designer/Designer';
import Python from './components/courses/python/Python';

function App(props) {
    CheckWindowSize();

    return (
        <BrowserRouter>
            <div>
                <Routes>
                    <Route
                        path="/"
                        element={
                            <MainComponent
                                state={props.state}
                                creatingResult={props.creatingResult}
                                clearResult={props.clearResult}
                                linkResultTest={props.linkResultTest}
                            />
                        }
                    />
                    <Route
                        path="/Courses"
                        element={<Courses state={props.state} />}
                    />
                    <Route
                        path="/Frontend"
                        element={<Frontend state={props.state} />}
                    />
                    <Route
                        path="/Designer"
                        element={<Designer state={props.state} />}
                    />
                    <Route
                        path="/Python"
                        element={<Python state={props.state} />}
                    />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;

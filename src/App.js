import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { CheckWindowSize } from './states/state';
import MainComponent from './components/mainComponent/MainComponent';
import Courses from './components/courses/Courses';
import Frontend from './components/courses/frontend/Frontend';
import Designer from './components/courses/designer/Designer';
import Python from './components/courses/python/Python';
import TestIT from './components/mainComponent/testIT/TestIT';
import TestITStart from './components/mainComponent/testIT/testITQuestions/TestITStart';
import TestITQuestion1 from './components/mainComponent/testIT/testITQuestions/questions/TestITQuestion1';
import TestITQuestion2 from './components/mainComponent/testIT/testITQuestions/questions/TestITQuestion2';
import TestITQuestion3 from './components/mainComponent/testIT/testITQuestions/questions/TestITQuestion3';
import TestITQuestion4 from './components/mainComponent/testIT/testITQuestions/questions/TestITQuestion4';
import TestITQuestion5 from './components/mainComponent/testIT/testITQuestions/questions/TestITQuestion5';
import TestITQuestion6 from './components/mainComponent/testIT/testITQuestions/questions/TestITQuestion6';
import TestITQuestion7 from './components/mainComponent/testIT/testITQuestions/questions/TestITQuestion7';
import TestITQuestion8 from './components/mainComponent/testIT/testITQuestions/questions/TestITQuestion8';
import TestITQuestion9 from './components/mainComponent/testIT/testITQuestions/questions/TestITQuestion9';
import TestITQuestion10 from './components/mainComponent/testIT/testITQuestions/questions/TestITQuestion10';
import TestDesigner from './components/mainComponent/testIT/testITQuestions/testResults/TestDesigner';
import TestHR from './components/mainComponent/testIT/testITQuestions/testResults/TestHR';
import TestPrdM from './components/mainComponent/testIT/testITQuestions/testResults/TestPrdM';
import TestQA from './components/mainComponent/testIT/testITQuestions/testResults/TestQA';
import './components/mainComponent/splide.css';
import TestITDesktop from './components/mainComponent/testIT/testITDesktop/TestITDesktop';
import Practice from './components/practice/Practice';
import PracticeForm from './components/forms/PracticeForm';
import CourseForm from './components/forms/CoursesForm';

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
                    >
                        <Route
                            path="/"
                            element={
                                props.state.displaySize.isDesktop ? (
                                    <TestITDesktop />
                                ) : (
                                    <TestIT />
                                )
                            }
                        />
                        <Route
                            path="/TestITQuestions"
                            element={
                                <TestITStart clearResult={props.clearResult} />
                            } // Outlet for these Route in <TestItStart>
                        >
                            <Route
                                path="Question1"
                                element={
                                    <TestITQuestion1
                                        creatingResult={props.creatingResult}
                                    />
                                }
                            />
                            <Route
                                path="Question2"
                                element={
                                    <TestITQuestion2
                                        creatingResult={props.creatingResult}
                                    />
                                }
                            />
                            <Route
                                path="Question3"
                                element={
                                    <TestITQuestion3
                                        creatingResult={props.creatingResult}
                                    />
                                }
                            />
                            <Route
                                path="Question4"
                                element={
                                    <TestITQuestion4
                                        creatingResult={props.creatingResult}
                                    />
                                }
                            />
                            <Route
                                path="Question5"
                                element={
                                    <TestITQuestion5
                                        creatingResult={props.creatingResult}
                                    />
                                }
                            />
                            <Route
                                path="Question6"
                                element={
                                    <TestITQuestion6
                                        creatingResult={props.creatingResult}
                                    />
                                }
                            />
                            <Route
                                path="Question7"
                                element={
                                    <TestITQuestion7
                                        creatingResult={props.creatingResult}
                                    />
                                }
                            />
                            <Route
                                path="Question8"
                                element={
                                    <TestITQuestion8
                                        creatingResult={props.creatingResult}
                                    />
                                }
                            />
                            <Route
                                path="Question9"
                                element={
                                    <TestITQuestion9
                                        creatingResult={props.creatingResult}
                                    />
                                }
                            />
                            <Route
                                path="Question10"
                                element={
                                    <TestITQuestion10
                                        creatingResult={props.creatingResult}
                                        linkResultTest={props.linkResultTest}
                                        state={props.state}
                                    />
                                }
                            />
                        </Route>
                        <Route
                            path="/UX"
                            element={
                                <TestDesigner clearResult={props.clearResult} />
                            }
                        />
                        <Route
                            path="/HR"
                            element={<TestHR clearResult={props.clearResult} />}
                        />
                        <Route
                            path="/PrdM"
                            element={
                                <TestPrdM clearResult={props.clearResult} />
                            }
                        />
                        <Route
                            path="/QA"
                            element={<TestQA clearResult={props.clearResult} />}
                        />
                    </Route>
                    <Route
                        path="/Courses"
                        element={
                            <Courses
                                ScrollTop={props.ScrollTop}
                                state={props.state}
                            />
                        }
                    />
                    <Route
                        path="/Frontend"
                        element={
                            <Frontend
                                CheckNumberSplider={props.CheckNumberSplider}
                                ScrollTop={props.ScrollTop}
                                state={props.state}
                            />
                        }
                    />
                    <Route
                        path="/Designer"
                        element={
                            <Designer
                                CheckNumberSplider={props.CheckNumberSplider}
                                ScrollTop={props.ScrollTop}
                                state={props.state}
                            />
                        }
                    />
                    <Route
                        path="/Python"
                        element={
                            <Python
                                CheckNumberSplider={props.CheckNumberSplider}
                                ScrollTop={props.ScrollTop}
                                state={props.state}
                            />
                        }
                    />
                    <Route
                        path="/Practice"
                        element={
                            <Practice
                                ScrollTop={props.ScrollTop}
                                state={props.state}
                            />
                        }
                    />
                    <Route
                        path="/PracticeForm"
                        element={
                            <PracticeForm
                                ScrollTop={props.ScrollTop}
                                state={props.state}
                            />
                        }
                    />
                    <Route
                        path="/CourseForm"
                        element={
                            <CourseForm
                                ScrollTop={props.ScrollTop}
                                state={props.state}
                            />
                        }
                    />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;

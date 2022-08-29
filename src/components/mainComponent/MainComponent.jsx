import MainComponentCss from './MainComponent.module.css';
import MainPage from './mainPage/MainPage';
import MvpConnect from './mvpConnect/MvpConnect';
import OurPartners from './ourPartners/OurPartners';
import Practice from './Practice/Practice';
import StudentChoice from './studentChoice/StudentChoice';
import StudentChoiceDesktop from './studentChoice/studentChoiceDesktop/StudentChoiceDesktop';
import SuccessTrajectory from './successTrajectory/SuccessTrajectory';
import TestIT from './testIT/TestIT';
import TheoryCourse from './theoryCourse/TheoryCourse';
import TheoryCourseDesktop from './theoryCourse/theoryCourseDesktop/theoryCourseDesktop';
import FeebackGraduates from './feebackGraduates/FeebackGraduates';
import HistorySuccess from './historySuccess/HistorySuccess';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import TestITStart from './testIT/testITQuestions/TestITStart';
import TestITQuestion1 from './testIT/testITQuestions/questions/TestITQuestion1';
import TestITQuestion2 from './testIT/testITQuestions/questions/TestITQuestion2';
import TestITQuestion3 from './testIT/testITQuestions/questions/TestITQuestion3';
import TestITQuestion4 from './testIT/testITQuestions/questions/TestITQuestion4';
import TestITQuestion5 from './testIT/testITQuestions/questions/TestITQuestion5';
import TestITQuestion6 from './testIT/testITQuestions/questions/TestITQuestion6';
import TestITQuestion7 from './testIT/testITQuestions/questions/TestITQuestion7';
import TestITQuestion8 from './testIT/testITQuestions/questions/TestITQuestion8';
import TestITQuestion9 from './testIT/testITQuestions/questions/TestITQuestion9';
import TestITQuestion10 from './testIT/testITQuestions/questions/TestITQuestion10';
import TestDesigner from './testIT/testITQuestions/testResults/TestDesigner';
import TestHR from './testIT/testITQuestions/testResults/TestHR';
import TestPrdM from './testIT/testITQuestions/testResults/TestPrdM';
import TestQA from './testIT/testITQuestions/testResults/TestQA';
import './splide.css';
import TestITDesktop from './testIT/testITDesktop/TestITDesktop';
import PracticeDesktop from './Practice/PracticeDesktop/PracticeDesktop';
import FeebackGraduatesDesktop from './feebackGraduates/feebackGraduatesDesktop/FeebackGraduatesDesktop';
import HistorySuccessDesktop from './historySuccess/historySuccessDesktop/HistorySuccessDesktop';
import SuccessTrajectoryDesktop from './successTrajectory/successTrajectoryDesktop/SuccessTrajectoryDesktop';
import OurPartnersDesktop from './ourPartners/ourPartnersDesktop/OurPartnersDesktop';
import MvpConnectDesktop from './mvpConnect/mvpConnectDesktop/MvpConnectDesktop';

const MainComponent = (props) => {
    return (
        <div className={MainComponentCss.mainComponent}>
            <MainPage displaySize={props.state.displaySize} />
            <div className={MainComponentCss.wrapper}>
                {props.state.displaySize.isDesktop ? (
                    <StudentChoiceDesktop />
                ) : (
                    <StudentChoice />
                )}
                {props.state.displaySize.isDesktop ? (
                    <TheoryCourseDesktop />
                ) : (
                    <TheoryCourse />
                )}

                <Routes>
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
                        path="/testITQuestions"
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
                        path="/Designer"
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
                        element={<TestPrdM clearResult={props.clearResult} />}
                    />
                    <Route
                        path="/QA"
                        element={<TestQA clearResult={props.clearResult} />}
                    />
                </Routes>
                {props.state.displaySize.isDesktop ? (
                    <PracticeDesktop />
                ) : (
                    <Practice />
                )}
                {props.state.displaySize.isDesktop ? (
                    <FeebackGraduatesDesktop />
                ) : (
                    <FeebackGraduates />
                )}
                {props.state.displaySize.isDesktop ? (
                    <HistorySuccessDesktop />
                ) : (
                    <HistorySuccess />
                )}
                {props.state.displaySize.isDesktop ? (
                    <SuccessTrajectoryDesktop />
                ) : (
                    <SuccessTrajectory />
                )}
                {props.state.displaySize.isDesktop ? (
                    <OurPartnersDesktop />
                ) : (
                    <OurPartners />
                )}
            </div>
            {props.state.displaySize.isDesktop ? (
                <MvpConnectDesktop />
            ) : (
                <MvpConnect />
            )}
        </div>
    );
};

export default MainComponent;

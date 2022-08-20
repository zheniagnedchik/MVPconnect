import MainComponentCss from './MainComponent.module.css';
import MainPage from './mainPage/MainPage';
import MvpConnect from './mvpConnect/MvpConnect';
import OurPartners from './ourPartners/OurPartners';
import Practice from './Practice/Practice';
import StudentChoice from './studentChoice/StudentChoice';
import SuccessTrajectory from './successTrajectory/SuccessTrajectory';
import TestIT from './testIT/TestIT';
import TheoryCourse from './theoryCourse/TheoryCourse';
import FeebackGraduates from './feebackGraduates/FeebackGraduates';
import HistorySuccess from './historySuccess/historySuccess';
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

const MainComponent = () => {
    return (
        <div className={MainComponentCss.mainComponent}>
            <MainPage />
            <StudentChoice />
            <TheoryCourse />
            <Routes>
                <Route path="/" element={<TestIT />} />
                <Route path="/testITQuestions" element={<TestITStart />}>
                    <Route path="Question1" element={<TestITQuestion1 />} />
                    <Route path="Question2" element={<TestITQuestion2 />} />
                    <Route path="Question3" element={<TestITQuestion3 />} />
                    <Route path="Question4" element={<TestITQuestion4 />} />
                    <Route path="Question5" element={<TestITQuestion5 />} />
                    <Route path="Question6" element={<TestITQuestion6 />} />
                    <Route path="Question7" element={<TestITQuestion7 />} />
                    <Route path="Question8" element={<TestITQuestion8 />} />
                    <Route path="Question9" element={<TestITQuestion9 />} />
                    <Route path="Question10" element={<TestITQuestion10 />} />
                </Route>
                <Route path="/Designer" element={<TestDesigner />} />
            </Routes>
            <Practice />
            <FeebackGraduates />
            <HistorySuccess />
            <SuccessTrajectory />
            <OurPartners />
            <MvpConnect />
        </div>
    );
};

export default MainComponent;

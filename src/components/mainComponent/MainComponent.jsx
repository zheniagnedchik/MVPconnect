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

const MainComponent = () => {
    return (
        <div className={MainComponentCss.mainComponent}>
            <MainPage />
            <StudentChoice />
            <TheoryCourse />
            <TestIT />
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

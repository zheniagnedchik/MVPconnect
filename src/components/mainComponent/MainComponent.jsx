import MainComponentCss from './MainComponent.module.css';
import MainPage from './mainPage/MainPage';
import MvpConnect from './mvpConnect/MvpConnect';
import OurPartners from './ourPartners/OurPartners';
import Practice from './Practice/Practice';
import StudentChoice from './studentChoice/StudentChoice';
import StudentChoiceDesktop from './studentChoice/studentChoiceDesktop/StudentChoiceDesktop';
import SuccessTrajectory from './successTrajectory/SuccessTrajectory';

import TheoryCourse from './theoryCourse/TheoryCourse';
import TheoryCourseDesktop from './theoryCourse/theoryCourseDesktop/theoryCourseDesktop';
import FeebackGraduates from './feebackGraduates/FeebackGraduates';
import HistorySuccess from './historySuccess/historySuccess';
import { Outlet } from 'react-router-dom';

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

                <Outlet />
                {props.state.displaySize.isDesktop ? (
                    <PracticeDesktop />
                ) : (
                    <Practice />
                )}
                {props.state.displaySize.isDesktop ? (
                    <FeebackGraduatesDesktop
                        Comments={props.Comments}
                        Stars={props.Stars}
                    />
                ) : (
                    <FeebackGraduates Comments={props.Comments} />
                )}
                {props.state.displaySize.isDesktop ? (
                    <HistorySuccessDesktop Videos={props.Videos} />
                ) : (
                    <HistorySuccess Videos={props.Videos} />
                )}
                {props.state.displaySize.isDesktop ? (
                    <SuccessTrajectoryDesktop Prices={props.Prices} />
                ) : (
                    <SuccessTrajectory Prices={props.Prices} />
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

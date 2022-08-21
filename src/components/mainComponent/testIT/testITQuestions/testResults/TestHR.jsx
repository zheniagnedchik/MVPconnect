import TestResultsCss from './TestResults.module.css';

import Slide4 from './img/slide4.svg';
import { NavLink } from 'react-router-dom';

const TestHR = (props) => {
    return (
        <div className={TestResultsCss.TestResults}>
            <div className={TestResultsCss.resultImg}>
                <img src={Slide4} alt="" />
            </div>
            <div className={TestResultsCss.titleWrapper}>
                <div className={TestResultsCss.titleOverhead}>
                    ваш результат
                </div>
                <div className={TestResultsCss.title}>You are HR</div>
                <div className={TestResultsCss.subTitle}>Подзаголовок</div>
            </div>

            <NavLink to="/">
                <div
                    onClick={props.clearResult}
                    className={TestResultsCss.resultBtn}
                >
                    На главную
                </div>
            </NavLink>
        </div>
    );
};

export default TestHR;
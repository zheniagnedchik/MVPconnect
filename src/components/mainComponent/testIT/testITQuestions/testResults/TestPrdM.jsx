import TestResultsCss from './TestResults.module.css';

import Slide2 from './img/slide2.svg';

import { NavLink } from 'react-router-dom';

const TestPrdM = (props) => {
    return (
        <div className={TestResultsCss.TestResults}>
            <div className={TestResultsCss.resultImg}>
                <img src={Slide2} alt="" />
            </div>
            <div className={TestResultsCss.titleWrapper}>
                <div className={TestResultsCss.titleOverhead}>
                    ваш результат
                </div>
                <div className={TestResultsCss.title}>
                    You are Product Manager
                </div>
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

export default TestPrdM;
import TestResultsCss from './TestResults.module.css';

import Slide1 from './img/slide1.svg';

import { NavLink } from 'react-router-dom';

const TestDesigner = (props) => {
    return (
        <div className={TestResultsCss.TestResults}>
            <div className={TestResultsCss.resultImg}>
                <img src={Slide1} alt="" />
            </div>
            <div className={TestResultsCss.titleWrapper}>
                <div className={TestResultsCss.titleOverhead}>
                    ваш результат
                </div>
                <div className={TestResultsCss.title}>You are designer</div>
                <div className={TestResultsCss.subTitle}>
                    {' '}
                    <NavLink to="/PracticeForm">
                        <div
                            onClick={props.clearResult}
                            className={TestResultsCss.resultBtn}
                        >
                            Записаться
                        </div>
                    </NavLink>
                </div>
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

export default TestDesigner;

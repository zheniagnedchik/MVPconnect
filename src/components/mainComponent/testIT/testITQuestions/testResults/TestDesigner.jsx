import TestResultsCss from './TestResults.module.css';

import Slide1 from './img/slide1.svg';
import Slide2 from './img/slide2.svg';
import Slide3 from './img/slide3.svg';
import Slide4 from './img/slide4.svg';
import { NavLink } from 'react-router-dom';

const TestDesigner = () => {
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
                <div className={TestResultsCss.subTitle}>Подзаголовок</div>
            </div>

            <NavLink to="/">
                <div className={TestResultsCss.resultBtn}>На главную</div>
            </NavLink>
        </div>
    );
};

export default TestDesigner;

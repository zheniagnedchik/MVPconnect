import TestITStartCss from './TestITStart.module.css';
import btnBack from './img/ArrowBack.svg';
import { NavLink, Outlet } from 'react-router-dom';
import TestITQuestion1 from './questions/TestITQuestion1';
import TestITQuestion2 from './questions/TestITQuestion2';

const TestITStart = () => {
    return (
        <div className={TestITStartCss.TestITStartCss}>
            <div className={TestITStartCss.btnBackWrapper}>
                <NavLink to="/">
                    {' '}
                    <div className={TestITStartCss.btnBack}>
                        <img src={btnBack} alt="" /> <p>Главная</p>
                    </div>
                </NavLink>
            </div>

            <div className={TestITStartCss.titleWrapper}>
                <div className={TestITStartCss.title}>Тест</div>
                <div className={TestITStartCss.subTitle}>
                    Этот тест поможет определиться с направлением, в котором
                    следует развиваться!
                </div>
            </div>
            <Outlet />
        </div>
    );
};

export default TestITStart;

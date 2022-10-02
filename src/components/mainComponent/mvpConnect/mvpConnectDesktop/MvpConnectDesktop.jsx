import MvpConnectDesktopCss from './MvpConnectDesktop.module.css';

import MvpConnectImg from './img/MvpConnect.svg';

import { NavLink } from 'react-router-dom';

const MvpConnectDesktop = () => {
    return (
        <div className={MvpConnectDesktopCss.MvpConnectDesktop}>
            <div className={MvpConnectDesktopCss.MvpConnectDesktopWrapper}>
                <div className={MvpConnectDesktopCss.socialNetwork}>
                    <div className={MvpConnectDesktopCss.mvpImg}>
                        {' '}
                        <img src={MvpConnectImg} alt="" />
                    </div>
                </div>
                <div className={MvpConnectDesktopCss.infoWrapper}>
                    <div className={MvpConnectDesktopCss.buttonWrapper}>
                        <div className={MvpConnectDesktopCss.itemButton}>
                            <NavLink to="/Courses">
                                {' '}
                                <div
                                    className={
                                        MvpConnectDesktopCss.buttonCourse
                                    }
                                >
                                    <p> Курсы</p>
                                </div>
                            </NavLink>
                            <div className={MvpConnectDesktopCss.job}>
                                {' '}
                                <a href="https://itcoty.ru/" target="_blank">
                                    {' '}
                                    <p>Найти работу</p>
                                </a>
                            </div>
                        </div>
                        <div className={MvpConnectDesktopCss.itemButton}>
                            <NavLink to="/Practice">
                                {' '}
                                <div
                                    className={
                                        MvpConnectDesktopCss.buttonPractise
                                    }
                                >
                                    {' '}
                                    <p> Практика</p>
                                </div>
                            </NavLink>
                            <div className={MvpConnectDesktopCss.participant}>
                                <a href="#">
                                    {' '}
                                    <p>Участники проекта</p>{' '}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <a href="tel:+375447801236">
                    {' '}
                    <div className={MvpConnectDesktopCss.number}>
                        +375 44 780 12 36
                    </div>
                </a>
            </div>
            <div className={MvpConnectDesktopCss.info}>
                ООО “ЭмВиПи коннект” УНП: 193620230, ОКПО: 505945425000 BY06
            </div>
        </div>
    );
};

export default MvpConnectDesktop;

import BurgerMenuCss from './BurgerMenuDesktop.module.css';
import MvpIcon from './img/MvpConnectIcon.svg';
import React from 'react';
import { NavLink } from 'react-router-dom';

class BurgerMenuDesktop extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={BurgerMenuCss.burgerMenu}>
                {' '}
                <div className={BurgerMenuCss.mvpIcon}>
                    <NavLink to="/">
                        {' '}
                        <img
                            className={BurgerMenuCss.mvpIconImg}
                            src={MvpIcon}
                            alt=""
                        />
                    </NavLink>
                </div>
                <div className={BurgerMenuCss.empty}></div>
                <div className={BurgerMenuCss.home}>
                    {' '}
                    <NavLink to="/">Главная</NavLink>{' '}
                </div>
                <NavLink to="/Courses">
                    {' '}
                    <div className={BurgerMenuCss.itCourse}>IT Курсы</div>
                </NavLink>
                <NavLink to="/Practice">
                    {' '}
                    <div className={BurgerMenuCss.itPractise}>IT Практика</div>
                </NavLink>
                <div className={BurgerMenuCss.cooperation}>Сотрудничество</div>
                <div className={BurgerMenuCss.account}>
                    Кабинет пользователя
                </div>
            </div>
        );
    }
}
export default BurgerMenuDesktop;

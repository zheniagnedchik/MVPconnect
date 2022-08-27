import BurgerMenuCss from './BurgerMenuDesktop.module.css';
import MvpIcon from './img/MvpConnectIcon.svg';
import React from 'react';

class BurgerMenuDesktop extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={BurgerMenuCss.burgerMenu}>
                {' '}
                <div className={BurgerMenuCss.mvpIcon}>
                    <img
                        className={BurgerMenuCss.mvpIconImg}
                        src={MvpIcon}
                        alt=""
                    />
                </div>
                <div className={BurgerMenuCss.empty}></div>
                <div className={BurgerMenuCss.home}>Главная</div>
                <div className={BurgerMenuCss.itCourse}>IT Курсы</div>
                <div className={BurgerMenuCss.itPractise}>IT Практика</div>
                <div className={BurgerMenuCss.cooperation}>Сотрудничество</div>
                <div className={BurgerMenuCss.account}>
                    Кабинет пользователя
                </div>
            </div>
        );
    }
}
export default BurgerMenuDesktop;

import BurgerMenu from './burgerMenu/BurgerMenu';
import BurgerMenuDesktop from './burgerMenuDesktop/BurgerMenuDesktop';
import MainPageCss from './MainPage.module.css';
import Vector from './img/Vector.svg';
import { HashLink as Link } from 'react-router-hash-link';
import { NavLink } from 'react-router-dom';
import PracticeForm from '../../forms/PracticeForm';

const MainPage = (props) => {
    return (
        <div className={MainPageCss.mainWrapper}>
            <PracticeForm
                changePracticeCourses={props.changePracticeCourses}
                formPracticeActive={props.formPracticeActive}
            />
            <div className={MainPageCss.mainPage}>
                {props.displaySize.isDesktop ? (
                    <BurgerMenuDesktop />
                ) : (
                    <BurgerMenu />
                )}

                <div className={MainPageCss.title}>MVP connect</div>
                <div className={MainPageCss.subtitle}>
                    {props.displaySize.isDesktop
                        ? '  IT- курсы и практика на коммерческих проектах и стартапах'
                        : 'IT курсы и практический опыт на реальных проектах'}
                </div>
                <NavLink to="/Courses">
                    <div className={MainPageCss.course}>
                        <p>
                            {props.displaySize.isDesktop
                                ? 'Выбрать курс'
                                : 'Курсы'}
                        </p>
                    </div>
                </NavLink>
                <NavLink to="/Practice">
                    {' '}
                    <div className={MainPageCss.practice}>
                        <p>
                            {props.displaySize.isDesktop
                                ? 'Перейти к практике'
                                : 'Практика'}
                        </p>
                    </div>
                </NavLink>
                <Link
                    className={MainPageCss.link}
                    to="#studentChoice"
                    smooth
                    style={{ textDecoration: 'none' }}
                >
                    {' '}
                    <div className={MainPageCss.down}>
                        Вниз
                        <div className={MainPageCss.arrow}>
                            <img src={Vector} alt="" />
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    );
};
export default MainPage;

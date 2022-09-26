import BurgerMenu from '../mainComponent/mainPage/burgerMenu/BurgerMenu';
import CoursesCss from './Courses.module.css';
import front from './img/front.webp';
import ux from './img/UXUI.webp';
import Py from './img/Python.jpg';
import mvp from './img/MvpConnect.svg';
import Vk from './img/socialNetwork/vk.svg';
import Facebook from './img/socialNetwork/f.svg';
import Inst from './img/socialNetwork/inst.svg';
import In from './img/socialNetwork/in.svg';
import Tel from './img/socialNetwork/teleg.svg';
import BurgerMenuDesktop from '../mainComponent/mainPage/burgerMenuDesktop/BurgerMenuDesktop';
import { NavLink } from 'react-router-dom';
import MvpConnect from '../mainComponent/mvpConnect/MvpConnect';
import MvpConnectDesktop from '../mainComponent/mvpConnect/mvpConnectDesktop/MvpConnectDesktop';

const Courses = (props) => {
    props.ScrollTop();
    return (
        <div>
            {props.state.displaySize.isDesktop ? (
                <BurgerMenuDesktop />
            ) : (
                <BurgerMenu />
            )}
            <div className={CoursesCss.Courses}>
                <div className={CoursesCss.wrapperTitle}>
                    <div className={CoursesCss.title}>Выбери свой курс</div>
                    <div className={CoursesCss.subTitle}>
                        Мы готовим IT специалистов различных направлений. Что
                        ближе тебе?
                    </div>
                    <div className={CoursesCss.itemWrapper}>
                        <div className={CoursesCss.item}>
                            <NavLink to="/Frontend">
                                {' '}
                                <div className={CoursesCss.img}>
                                    <img src={front} alt="" />
                                </div>{' '}
                            </NavLink>
                            <div className={CoursesCss.itemTitle}>
                                Front-end разработчик
                            </div>
                            <NavLink to="/Frontend">
                                {' '}
                                <div className={CoursesCss.btn}>
                                    <p> Подробнее</p>
                                </div>
                            </NavLink>
                        </div>
                        <div className={CoursesCss.item}>
                            <NavLink to="/Designer">
                                {' '}
                                <div className={CoursesCss.img}>
                                    <img src={ux} alt="" />
                                </div>
                            </NavLink>
                            <div className={CoursesCss.itemTitle}>
                                UX/UI designer
                            </div>
                            <NavLink to="/Designer">
                                {' '}
                                <div className={CoursesCss.btn}>
                                    <p> Подробнее</p>
                                </div>
                            </NavLink>
                        </div>

                        <div className={CoursesCss.item}>
                            <NavLink to="/Python">
                                {' '}
                                <div className={CoursesCss.imgPy}>
                                    <img src={Py} alt="" />
                                </div>{' '}
                            </NavLink>
                            <div className={CoursesCss.itemTitle}>Python</div>
                            <NavLink to="/Python">
                                {' '}
                                <div className={CoursesCss.btn}>
                                    <p> Подробнее</p>
                                </div>
                            </NavLink>
                        </div>
                    </div>
                </div>
                {props.state.displaySize.isDesktop ? (
                    <MvpConnectDesktop />
                ) : (
                    <MvpConnect />
                )}
            </div>
        </div>
    );
};

export default Courses;

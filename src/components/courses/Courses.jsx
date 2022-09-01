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

const Courses = (props) => {
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
                            <div className={CoursesCss.img}>
                                <img src={front} alt="" />
                            </div>
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
                            <div className={CoursesCss.img}>
                                <img src={ux} alt="" />
                            </div>
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
                            <div className={CoursesCss.imgPy}>
                                <img src={Py} alt="" />
                            </div>
                            <div className={CoursesCss.itemTitle}>Python</div>
                            <NavLink to="/Python">
                                {' '}
                                <div className={CoursesCss.btn}>
                                    <p> Подробнее</p>
                                </div>
                            </NavLink>
                        </div>
                    </div>
                    <footer className={CoursesCss.footer}>
                        <div className={CoursesCss.imgWrapper}>
                            {' '}
                            <img src={mvp} alt="" />
                        </div>

                        <div className={CoursesCss.info}>
                            <div className={CoursesCss.number}>
                                {' '}
                                +375 44 780 12 36
                            </div>
                            <div className={CoursesCss.mail}>info@mvp.by</div>
                        </div>
                        <div className={CoursesCss.descr}>
                            {' '}
                            ООО “ЭмВиПи коннект”
                            <br /> 220051, г. Минск, ул. Сергея Есенина, 130,
                            кабинет 3
                            <br />
                            УНП: 193620230, ОКПО: 505945425000 BY06 <br />
                            ALFA 3012 2B99 8900 1027 0000, БИК: ALFABY2X <br />{' '}
                            в ЗАО "Альфа-Банк", 220013 г.Минск, ул.Сурганова,
                            43-47.
                        </div>
                        <div className={CoursesCss.socialNetworkIcons}>
                            <img src={Vk} alt="" />
                            <img src={Facebook} alt="" />
                            <img src={Inst} alt="" />
                            <img src={In} alt="" />
                            <img src={Tel} alt="" />
                        </div>
                    </footer>
                </div>
            </div>
        </div>
    );
};

export default Courses;

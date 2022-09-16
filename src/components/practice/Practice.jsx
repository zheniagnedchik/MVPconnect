import BurgerMenu from '../mainComponent/mainPage/burgerMenu/BurgerMenu';
import BurgerMenuDesktop from '../mainComponent/mainPage/burgerMenuDesktop/BurgerMenuDesktop';
import PracticeCss from './Practice.module.css';
import mentor from './img/mentor.jpg';
import mvp from './img/MvpConnect.svg';
import Facebook from './img/socialNetwork/f.svg';
import Inst from './img/socialNetwork/inst.svg';
import In from './img/socialNetwork/in.svg';
import Tel from './img/socialNetwork/teleg.svg';
import result1 from './img/result1.webp';
import result2 from './img/result2.webp';
import result3 from './img/result3.png';
import result4 from './img/result4.png';
import result5 from './img/result5.png';
import result6 from './img/result6.png';
import result7 from './img/result7.webp';
import icon from './img/icon.svg';
import star from './img/star.webp';

import result8 from './img/result8.png';
import { NavLink } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';

const Practice = (props) => {
    props.ScrollTop();
    return (
        <div className={PracticeCss.Practice}>
            {props.state.displaySize.isDesktop ? (
                <BurgerMenuDesktop />
            ) : (
                <BurgerMenu />
            )}
            <div className={PracticeCss.titleBack}>
                <div className={PracticeCss.titleWrapper}>
                    <div className={PracticeCss.title}>MVP connect</div>
                    <div className={PracticeCss.subTitle}>
                        IT курсы и практический опыт <br /> на реальных проектах
                    </div>
                    <div className={PracticeCss.titleBtns}>
                        {' '}
                        <NavLink to="/Courses">
                            {' '}
                            <div className={PracticeCss.titleBtn}>
                                <p>IT курсы</p>
                            </div>
                        </NavLink>
                        <Link to="#Practice" smooth>
                            {' '}
                            <div className={PracticeCss.titleBtn2}>
                                <p>Практика в IT</p>
                            </div>
                        </Link>{' '}
                    </div>
                </div>

                <div className={PracticeCss.blackBack}>
                    <div className={PracticeCss.titleWrapperMVP}>
                        <div className={PracticeCss.titleMVP}>MVP connect</div>
                        <div className={PracticeCss.subTitleMVP}>
                            Это IT теоретические и практические курсы
                            (аналогичные стажировке в IT компании) для
                            начинающих специалистов на реальных проектах -
                            стартапах. Наша подготовка, совместно с карьерным
                            центром, повышает шансы на трудоустройство в
                            IT-сфере. 70% стажеров трудоустраиваются в течении
                            3-х месяцев с начала занятий.
                        </div>
                    </div>
                    <div className={PracticeCss.resultsWrapper} id="Practice">
                        <div className={PracticeCss.titleMVP}>
                            Результаты обучения в MVP connect
                        </div>
                        <div className={PracticeCss.allResults}>
                            <div className={PracticeCss.resultItem}>
                                <div className={PracticeCss.resultWrapper}>
                                    <div className={PracticeCss.resultImg}>
                                        <img src={result1} alt="" />
                                    </div>

                                    <div className={PracticeCss.result1}>
                                        {' '}
                                        <p>Коммерческий проект в портфолио</p>
                                    </div>
                                </div>
                                <div className={PracticeCss.resultWrapper}>
                                    <div className={PracticeCss.resultImg}>
                                        <img src={result2} alt="" />
                                    </div>

                                    <div className={PracticeCss.result1}>
                                        {' '}
                                        <p>Опыт работы в IT-компании</p>
                                    </div>
                                </div>
                                <div className={PracticeCss.resultWrapper}>
                                    <div className={PracticeCss.resultImg}>
                                        <img src={result3} alt="" />
                                    </div>

                                    <div className={PracticeCss.result2}>
                                        {' '}
                                        <p>
                                            Трудоустройство к партнерам MVP
                                            connect
                                        </p>
                                    </div>
                                </div>
                                <div className={PracticeCss.resultWrapper}>
                                    <div className={PracticeCss.resultImg}>
                                        <img src={result4} alt="" />
                                    </div>

                                    <div className={PracticeCss.result2}>
                                        {' '}
                                        <p>Трудоустройство в стартапы</p>
                                    </div>
                                </div>
                            </div>
                            <div className={PracticeCss.resultItem}>
                                <div className={PracticeCss.resultWrapper}>
                                    <div className={PracticeCss.resultImg}>
                                        <img src={result5} alt="" />
                                    </div>

                                    <div className={PracticeCss.result1}>
                                        {' '}
                                        <p>Сертификат</p>
                                    </div>
                                </div>
                                <div className={PracticeCss.resultWrapper}>
                                    <div className={PracticeCss.resultImg}>
                                        <img src={result6} alt="" />
                                    </div>

                                    <div className={PracticeCss.result1}>
                                        {' '}
                                        <p>
                                            Рекомендательное письмо от ментора
                                        </p>
                                    </div>
                                </div>
                                <div className={PracticeCss.resultWrapper}>
                                    <div className={PracticeCss.resultImg}>
                                        <img src={result7} alt="" />
                                    </div>

                                    <div className={PracticeCss.result2}>
                                        {' '}
                                        <p>
                                            Трудоустройство в сторонние компании
                                        </p>
                                    </div>
                                </div>
                                <div className={PracticeCss.resultWrapper}>
                                    <div className={PracticeCss.resultImg}>
                                        <img src={result8} alt="" />
                                    </div>

                                    <div className={PracticeCss.result2}>
                                        {' '}
                                        <p>Карта скилов</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <NavLink to="/PracticeForm">
                        <div className={PracticeCss.resultBtn}>
                            <p>Прокачаться</p>
                        </div>
                    </NavLink>

                    <div className={PracticeCss.resultsWrapper}>
                        <div className={PracticeCss.titleMVP}>
                            Преимущества обучения в MVP connect
                        </div>
                        <div className={PracticeCss.allResults}>
                            <div className={PracticeCss.resultItem}>
                                <div className={PracticeCss.resultWrapper}>
                                    <div className={PracticeCss.resultImgAdv}>
                                        <img src={icon} alt="" />
                                    </div>

                                    <div className={PracticeCss.resultAdv}>
                                        {' '}
                                        <p className={PracticeCss.resultTitle}>
                                            Коммерческие проекты
                                        </p>
                                        <p
                                            className={
                                                PracticeCss.resultSubTitle
                                            }
                                        >
                                            Нет скучным и никому не нужным
                                            заданиям. Только необходимая теория,
                                            без “зубрежки”, с закреплением
                                            навыков на практике.
                                        </p>
                                    </div>
                                </div>
                                <div className={PracticeCss.resultWrapper}>
                                    <div className={PracticeCss.resultImgAdv}>
                                        <img src={icon} alt="" />
                                    </div>

                                    <div className={PracticeCss.resultAdv}>
                                        {' '}
                                        <p className={PracticeCss.resultTitle}>
                                            Полноценные команды (BA, Dev, UX/UI,
                                            QA…)
                                        </p>
                                        <p
                                            className={
                                                PracticeCss.resultSubTitle
                                            }
                                        >
                                            Научишься планировать время, искать
                                            информацию, “прокачаешь”
                                            ответственность, поймешь роли в
                                            команде.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className={PracticeCss.resultItem}>
                                <div className={PracticeCss.resultWrapper}>
                                    <div className={PracticeCss.resultImgAdv}>
                                        <img src={icon} alt="" />
                                    </div>

                                    <div className={PracticeCss.resultAdv}>
                                        {' '}
                                        <p className={PracticeCss.resultTitle}>
                                            Ментор для каждой профессии
                                        </p>
                                        <p
                                            className={
                                                PracticeCss.resultSubTitle
                                            }
                                        >
                                            Развивайся правильно и на максимуме.
                                            Эксперты помогут с решением вопросов
                                            и проблем.
                                        </p>
                                    </div>
                                </div>
                                <div className={PracticeCss.resultWrapper}>
                                    <div className={PracticeCss.resultImgAdv}>
                                        <img src={icon} alt="" />
                                    </div>

                                    <div className={PracticeCss.resultAdv}>
                                        {' '}
                                        <p className={PracticeCss.resultTitle}>
                                            Совмещай работу и учебу
                                        </p>
                                        <p
                                            className={
                                                PracticeCss.resultSubTitle
                                            }
                                        >
                                            Работа по гибкому графику - по
                                            вечерам и выходным. Продолжи
                                            подготовку к переходу в IT, не
                                            покидая текущую деятельность.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <NavLink to="/PracticeForm">
                        <div className={PracticeCss.resulAdvtBtn}>
                            <p>Использовать все преимущества</p>
                        </div>
                    </NavLink>
                    <div className={PracticeCss.costWrapper}>
                        <div className={PracticeCss.titleMVP}>
                            Стоимость практики (аналог стажировки)
                        </div>

                        <div className={PracticeCss.costItemWrapper}>
                            <div className={PracticeCss.costItem}>
                                <div className={PracticeCss.cost}>
                                    400 BYN в месяц
                                </div>

                                <div className={PracticeCss.costProfWrapper}>
                                    <div className={PracticeCss.costProvItem}>
                                        <div className={PracticeCss.costImg}>
                                            <img src={star} alt="" />
                                        </div>

                                        <div className={PracticeCss.costProf}>
                                            Frontend
                                        </div>
                                    </div>
                                    <div className={PracticeCss.costProvItem}>
                                        <div className={PracticeCss.costImg}>
                                            <img src={star} alt="" />
                                        </div>

                                        <div className={PracticeCss.costProf}>
                                            Backend
                                        </div>
                                    </div>
                                    <div className={PracticeCss.costProvItem}>
                                        <div className={PracticeCss.costImg}>
                                            <img src={star} alt="" />
                                        </div>

                                        <div className={PracticeCss.costProf}>
                                            UX/UI
                                        </div>
                                    </div>
                                    <div className={PracticeCss.costProvItem}>
                                        <div className={PracticeCss.costImg}>
                                            <img src={star} alt="" />
                                        </div>

                                        <div className={PracticeCss.costProf}>
                                            QA
                                        </div>
                                    </div>
                                </div>

                                <div className={PracticeCss.costProg}>
                                    <p>
                                        Продолжительность <b> 2 месяца </b>
                                    </p>
                                    <p>
                                        Стоимость программы - <b> 800 BYN </b>
                                    </p>
                                </div>

                                <NavLink to="/PracticeForm">
                                    <div className={PracticeCss.costBtn}>
                                        Зарегистрироваться
                                    </div>
                                </NavLink>
                            </div>
                            <div className={PracticeCss.costItem}>
                                <div className={PracticeCss.cost}>
                                    500 BYN в месяц
                                </div>

                                <div className={PracticeCss.costProfWrapper}>
                                    <div className={PracticeCss.costProvItem}>
                                        <div className={PracticeCss.costImg}>
                                            <img src={star} alt="" />
                                        </div>

                                        <div className={PracticeCss.costProf}>
                                            BA
                                        </div>
                                    </div>
                                    <div className={PracticeCss.costProvItem}>
                                        <div className={PracticeCss.costImg}>
                                            <img src={star} alt="" />
                                        </div>

                                        <div className={PracticeCss.costProf}>
                                            PM
                                        </div>
                                    </div>
                                    <div className={PracticeCss.costProvItem}>
                                        <div className={PracticeCss.costImg}>
                                            <img src={star} alt="" />
                                        </div>

                                        <div className={PracticeCss.costProf}>
                                            PrdM
                                        </div>
                                    </div>
                                </div>

                                <div className={PracticeCss.costProg}>
                                    <p>
                                        Продолжительность <b> 2,5 месяца</b>
                                    </p>
                                    <p>
                                        Стоимость программы - <b> 1000 BYN</b>
                                    </p>
                                </div>

                                <NavLink to="/PracticeForm">
                                    <div className={PracticeCss.costBtn}>
                                        <p>Зарегистрироваться</p>
                                    </div>
                                </NavLink>
                            </div>
                        </div>

                        <div className={PracticeCss.costInfo}>
                            Возможна оплата частями, без увеличения стоимости и{' '}
                            <br />
                            рассрочка на 2 месяца по карте "Халва"
                        </div>
                    </div>
                    <div className={PracticeCss.resultsWrapper}>
                        <div className={PracticeCss.titleMVP}>
                            Как это работает
                        </div>
                        <div className={PracticeCss.allResults}>
                            <div className={PracticeCss.resultItem}>
                                <div className={PracticeCss.resultWrapper}>
                                    <div className={PracticeCss.resultImgAdv}>
                                        <img src={icon} alt="" />
                                    </div>

                                    <div className={PracticeCss.resultAdv}>
                                        {' '}
                                        <p className={PracticeCss.resultTitle}>
                                            Гибкий график
                                        </p>
                                        <p
                                            className={
                                                PracticeCss.resultSubTitle
                                            }
                                        >
                                            Желательно не менее 20 часов в
                                            неделю уделять проекту. Работа в
                                            свободное время и по выходным.
                                        </p>
                                    </div>
                                </div>
                                <div className={PracticeCss.resultWrapper}>
                                    <div className={PracticeCss.resultImgAdv}>
                                        <img src={icon} alt="" />
                                    </div>

                                    <div className={PracticeCss.resultAdv}>
                                        {' '}
                                        <p className={PracticeCss.resultTitle}>
                                            Свой коммерческий проект
                                        </p>
                                        <p
                                            className={
                                                PracticeCss.resultSubTitle
                                            }
                                        >
                                            За каждой командой закрепляется
                                            отдельный проект, и Product Owner.
                                        </p>
                                    </div>
                                </div>
                                <div className={PracticeCss.resultWrapper}>
                                    <div className={PracticeCss.resultImgAdv}>
                                        <img src={icon} alt="" />
                                    </div>

                                    <div className={PracticeCss.resultAdv}>
                                        {' '}
                                        <p className={PracticeCss.resultTitle}>
                                            До 3 месяцев с ментором
                                        </p>
                                        <p
                                            className={
                                                PracticeCss.resultSubTitle
                                            }
                                        >
                                            На 2-3 месяца, для каждой
                                            специальности, выделяется отдельный
                                            ментор.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className={PracticeCss.resultItem}>
                                <div className={PracticeCss.resultWrapper}>
                                    <div className={PracticeCss.resultImgAdv}>
                                        <img src={icon} alt="" />
                                    </div>

                                    <div className={PracticeCss.resultAdv}>
                                        {' '}
                                        <p className={PracticeCss.resultTitle}>
                                            Online
                                        </p>
                                        <p
                                            className={
                                                PracticeCss.resultSubTitle
                                            }
                                        >
                                            Встречайтесь с командой и с
                                            менторами в Zoom. Освойте работу с
                                            сотрудниками на "удаленке"
                                        </p>
                                    </div>
                                </div>
                                <div className={PracticeCss.resultWrapper}>
                                    <div className={PracticeCss.resultImgAdv}>
                                        <img src={icon} alt="" />
                                    </div>

                                    <div className={PracticeCss.resultAdv}>
                                        {' '}
                                        <p className={PracticeCss.resultTitle}>
                                            Agile
                                        </p>
                                        <p
                                            className={
                                                PracticeCss.resultSubTitle
                                            }
                                        >
                                            Работа по Agile методологии
                                            (Scrumban) - разработка продукта, а
                                            не на создание тонн документации
                                        </p>
                                    </div>
                                </div>
                                <div className={PracticeCss.resultWrapper}>
                                    <div className={PracticeCss.resultImgAdv}>
                                        <img src={icon} alt="" />
                                    </div>

                                    <div className={PracticeCss.resultAdv}>
                                        {' '}
                                        <p className={PracticeCss.resultTitle}>
                                            Команды до 15 человек
                                        </p>
                                        <p
                                            className={
                                                PracticeCss.resultSubTitle
                                            }
                                        >
                                            Одновременно на проекте будут BA,
                                            PM, PrdM, разработчики, QA, UX/UI и
                                            т.д.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <NavLink to="/PracticeForm">
                        <div className={PracticeCss.resulAdvtBtn}>
                            <p>Использовать преимущества</p>
                        </div>
                    </NavLink>

                    <footer className={PracticeCss.footer}>
                        <div className={PracticeCss.footerWrapper}>
                            <div className={PracticeCss.footerImg}>
                                <NavLink to="/">
                                    {' '}
                                    <img src={mvp} alt="" />
                                </NavLink>
                            </div>

                            <div className={PracticeCss.footerInfo}>
                                <a href="tel:+375447801236">
                                    {' '}
                                    <div className={PracticeCss.footerNumber}>
                                        +375 44 780 12 36
                                    </div>{' '}
                                </a>
                                <a href="mailto:info@mvp.by">
                                    {' '}
                                    <div className={PracticeCss.footerMail}>
                                        info@mvp.by
                                    </div>{' '}
                                </a>
                                <div className={PracticeCss.footerDescr}>
                                    {' '}
                                    ООО “ЭмВиПи коннект”
                                    <br /> 220051, г. Минск, ул. Сергея Есенина,
                                    130, кабинет 3
                                    <br />
                                    УНП: 193620230, ОКПО: 505945425000 BY06{' '}
                                    <br />
                                    ALFA 3012 2B99 8900 1027 0000, БИК: ALFABY2X{' '}
                                    <br /> в ЗАО "Альфа-Банк", 220013 г.Минск,
                                    ул.Сурганова, 43-47.
                                </div>
                            </div>
                            <div className={PracticeCss.socialNetworkIcons}>
                                {/* <a href="https://vk.com/">
                                    {' '}
                                    <img src={Vk} alt="" />{' '}
                                </a> */}
                                <a
                                    href="https://www.facebook.com/people/Mvp-connect/100083144028399/"
                                    target="_blank"
                                >
                                    {' '}
                                    <img src={Facebook} alt="" />
                                </a>
                                <a
                                    href="https://www.instagram.com/mvp.connect/"
                                    target="_blank"
                                >
                                    {' '}
                                    <img src={Inst} alt="" />
                                </a>
                                <a
                                    href="https://www.linkedin.com/company/mvp-connect/"
                                    target="_blank"
                                >
                                    {' '}
                                    <img src={In} alt="" />{' '}
                                </a>
                                <a
                                    href="https://t.me/alexander_balodis"
                                    target="_blank"
                                >
                                    {' '}
                                    <img src={Tel} alt="" />{' '}
                                </a>
                            </div>
                        </div>
                    </footer>
                </div>
            </div>
        </div>
    );
};

export default Practice;

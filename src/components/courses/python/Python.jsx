import BurgerMenu from '../../mainComponent/mainPage/burgerMenu/BurgerMenu';
import BurgerMenuDesktop from '../../mainComponent/mainPage/burgerMenuDesktop/BurgerMenuDesktop';
import PythonCss from './Python.module.css';
import mentor from './img/mentor.jpg';
import mvp from './img/MvpConnect.svg';
import Vk from './img/socialNetwork/vk.svg';
import Facebook from './img/socialNetwork/f.svg';
import Inst from './img/socialNetwork/inst.svg';
import In from './img/socialNetwork/in.svg';
import Tel from './img/socialNetwork/teleg.svg';
import { NavLink } from 'react-router-dom';
import Accordion1 from './accordions/Accordion1';
import Accordion2 from './accordions/Accordion2';
import Accordion3 from './accordions/Accordion3';
import MaxCard from './cards/MaxCard';
import Card1 from './cards/Card1';
import Card2 from './cards/Card2';
import Card3 from './cards/Card3';
import MenuDesktop from './menu/MenuDesktop';
import { useState } from 'react';
import MenuMobile from './menu/MenuMobile';

const Python = (props) => {
    const [ChoiseModule, setChoiseModule] = useState(2);

    let modules = [<Accordion1 />, <Card1 />];
    if (ChoiseModule === 2) {
        modules = [<Accordion1 />, <Card1 />];
    } else if (ChoiseModule === 3) {
        modules = [<Accordion2 />, <Card2 />];
    } else if (ChoiseModule === 4) {
        modules = [<Accordion3 />, <Card3 />];
    } else {
        modules = [<Accordion1 />, <Card1 />];
    }
    return (
        <div className={PythonCss.Python}>
            {props.state.displaySize.isDesktop ? (
                <BurgerMenuDesktop />
            ) : (
                <BurgerMenu />
            )}
            <div className={PythonCss.titleBack}>
                <div className={PythonCss.titleWrapper}>
                    <div className={PythonCss.title}>
                        Курс Frontend разработчик
                    </div>
                    <div className={PythonCss.subTitle}>
                        Теоретические и практические курсы по подготовке
                        Frontend разработчиков на реальных проектах (стартапах)
                    </div>
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSeASX9u0xCzgvDeLxKqwMXpx2c8qyBCGFN4G17faCjnzT2VSQ/viewform">
                        {' '}
                        <div className={PythonCss.titleBtn}>
                            <p>Записаться на курс</p>
                        </div>
                    </a>
                </div>
                <div className={PythonCss.blackBack}>
                    <div className={PythonCss.stagesTitleWrapper}>
                        <div className={PythonCss.stagesTitle}>
                            Стадии подготовки Front-end разработчика в MVP
                            connect
                        </div>
                        <div className={PythonCss.stagesSubTitle}>
                            От нулевого уровня до специалиста
                        </div>
                    </div>

                    <div className={PythonCss.courses}>
                        <div className={PythonCss.month}>
                            <p>1 месяц</p>
                        </div>
                        <div className={PythonCss.course}>
                            <div className={PythonCss.courseTitle}>
                                Базовый курс
                            </div>
                            <div className={PythonCss.courseSubTitle}>
                                Javascript разработчик
                            </div>
                            <div className={PythonCss.courseInfo}>
                                Получите базовые знания о верстке сайтов.
                                Изучите HTML5 и CSS3, освоите создание структуры
                                сайта и работу с макетом, научитесь создавать
                                адаптивные сайты.
                            </div>
                            <div className={PythonCss.courseShedule}>
                                Занятия каждую неделю по{' '}
                                <b>Вторникам и Четвергам</b> <br /> с 18:30 до
                                21:30
                                <br /> Формат - <b>online</b>
                            </div>
                        </div>
                        <div className={PythonCss.month2}>
                            <p>1 месяц</p>
                        </div>
                        <div className={PythonCss.course2}>
                            <div className={PythonCss.courseTitle}>
                                Профессиональный курс React & React native
                            </div>
                            <div className={PythonCss.courseSubTitle}>
                                Frontend разработчик
                            </div>
                            <div className={PythonCss.courseInfo}>
                                Узнаете как проектировать клиентские приложения
                                с использованием React, освоите настройки
                                окружения. Поймёте, где есть смысл в
                                использовании React, а где можно обойтись
                                другими инструментами.
                            </div>
                            <div className={PythonCss.courseShedule}>
                                Занятия каждую неделю по{' '}
                                <b>Вторникам и Четвергам</b> <br /> с 18:30 до
                                21:30
                                <br /> Формат - <b>online</b>
                            </div>
                        </div>
                        <div className={PythonCss.month3}>
                            <p>3 месяца</p>
                        </div>
                        <div className={PythonCss.course3}>
                            <div className={PythonCss.courseTitle}>
                                Практический курс (аналог стажировки в IT
                                компании)
                            </div>
                            <div className={PythonCss.courseSubTitle}>
                                Frontend разработчик <p> с опытом</p> командной
                                работы на IT-проекте
                            </div>
                            <div className={PythonCss.courseInfo}>
                                Закрепите полученный теоретический опыт,
                                прокачайте себя как специалиста, а не теоретика.
                                Погрузитесь в работу с командой и сделайте
                                качественный продукт. Узнайте как на практике
                                работают гибкие методологии и чем они помогают
                                проектам.
                            </div>
                            <div className={PythonCss.courseShedule}>
                                Занятия в <b> свободное время</b> <br />
                                связь с ментором ежедневно, в течении недели, по
                                согласованию.
                                <b>Суббота</b> - демонстрация результатов
                                работы, их анализ, планирование нового спринта и
                                проведение ретроспективы спринта.
                                <br /> Формат - <b>online</b>
                            </div>
                        </div>
                    </div>

                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSeASX9u0xCzgvDeLxKqwMXpx2c8qyBCGFN4G17faCjnzT2VSQ/viewform">
                        {' '}
                        <div className={PythonCss.coursesBtn}>
                            Записаться на курс
                        </div>{' '}
                    </a>
                    <div className={PythonCss.mentorWrapper}>
                        <div className={PythonCss.mentor}>
                            <img src={mentor} alt="" />
                        </div>
                        <div className={PythonCss.mentorInfo}>
                            <div className={PythonCss.mentorInfoWrapper}>
                                <div className={PythonCss.mentorName}>
                                    Евгений Гнедчик
                                </div>
                                <div className={PythonCss.mentorProf}>
                                    Senior Full-stack Developer в{' '}
                                    <a href="https://cropfleet.ru/">
                                        {' '}
                                        Cropfleet
                                    </a>{' '}
                                </div>
                                <div className={PythonCss.mentorBorder}></div>
                                <div className={PythonCss.mentorDescr}>
                                    Привет, я Python Team Lead в DVIT. С опытом
                                    работы в ИТ более 15 лет. - Руководил
                                    отделами разработки ПО в двух компаниях -
                                    Разрабатывал транспортный проект для
                                    правительства Москвы - Работал аналитиком
                                    данных в крупнейшей букмекерской компании
                                    Mostbet Я преподаю более 5 лет и за это
                                    время перебрал много разных методик. Уверен
                                    что смогу сделать и из тебя хорошего
                                    разработчика. До встречи на курсе ;){' '}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={PythonCss.programTitle}>
                        Программа подготовки Frontend разработчиков
                    </div>
                    {props.state.displaySize.isDesktop ? (
                        <MenuDesktop
                            ChoiseModule={ChoiseModule}
                            setChoiseModule={setChoiseModule}
                        />
                    ) : (
                        <MenuMobile
                            ChoiseModule={ChoiseModule}
                            setChoiseModule={setChoiseModule}
                        />
                    )}

                    {modules}

                    <footer className={PythonCss.footer}>
                        <div className={PythonCss.footerWrapper}>
                            <div className={PythonCss.footerImg}>
                                <NavLink to="/">
                                    {' '}
                                    <img src={mvp} alt="" />
                                </NavLink>
                            </div>

                            <div className={PythonCss.footerInfo}>
                                <div className={PythonCss.footerNumber}>
                                    +375 44 780 12 36
                                </div>
                                <div className={PythonCss.footerMail}>
                                    info@mvp.by
                                </div>
                                <div className={PythonCss.footerDescr}>
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
                            <div className={PythonCss.socialNetworkIcons}>
                                {/* <a href="https://vk.com/">
                                    {' '}
                                    <img src={Vk} alt="" />{' '}
                                </a> */}
                                <a href="https://www.facebook.com/people/Mvp-connect/100083144028399/">
                                    {' '}
                                    <img src={Facebook} alt="" />
                                </a>
                                <a href="https://www.instagram.com/mvp.connect/">
                                    {' '}
                                    <img src={Inst} alt="" />
                                </a>
                                <a href="https://www.linkedin.com/company/mvp-connect/">
                                    {' '}
                                    <img src={In} alt="" />{' '}
                                </a>
                                <a href="https://t.me/alexander_balodis">
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

export default Python;

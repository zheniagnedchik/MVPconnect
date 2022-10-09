import BurgerMenu from '../../mainComponent/mainPage/burgerMenu/BurgerMenu';
import BurgerMenuDesktop from '../../mainComponent/mainPage/burgerMenuDesktop/BurgerMenuDesktop';
import FrontendCss from './Frontend.module.css';
import mentor from './img/mentor.jpg';

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
import MvpConnect from '../../mainComponent/mvpConnect/MvpConnect';
import MvpConnectDesktop from '../../mainComponent/mvpConnect/mvpConnectDesktop/MvpConnectDesktop';
import { useEffect } from 'react';
import CourseForm from '../../forms/CoursesForm';

const Frontend = (props) => {
    props.ScrollTop();

    const [ChoiseModule, setChoiseModule] = useState(1);

    const [actualCurrency, setCurrency] = useState();

    useEffect(() =>
        setCurrency(
            new Map(Object.entries(props.worldCurrency)).get(
                props.localCurrency
            )
        )
    );
    let modules = [
        <Accordion1 />,
        <Accordion2 />,
        <Accordion3 />,
        <MaxCard
            CheckNumberSplider={props.CheckNumberSplider}
            localCurrency={props.localCurrency}
            actualCurrency={actualCurrency}
            Prices={props.Prices}
            changeActiveCourses={props.changeActiveCourses}
        />,
    ];
    if (ChoiseModule === 2) {
        modules = [
            <Accordion1 />,
            <Card1
                CheckNumberSplider={props.CheckNumberSplider}
                localCurrency={props.localCurrency}
                actualCurrency={actualCurrency}
                Prices={props.Prices}
                changeActiveCourses={props.changeActiveCourses}
            />,
        ];
    } else if (ChoiseModule === 3) {
        modules = [
            <Accordion2 />,
            <Card2
                CheckNumberSplider={props.CheckNumberSplider}
                localCurrency={props.localCurrency}
                actualCurrency={actualCurrency}
                Prices={props.Prices}
                changeActiveCourses={props.changeActiveCourses}
            />,
        ];
    } else if (ChoiseModule === 4) {
        modules = [
            <Accordion3 />,
            <Card3
                CheckNumberSplider={props.CheckNumberSplider}
                localCurrency={props.localCurrency}
                actualCurrency={actualCurrency}
                Prices={props.Prices}
                changeActiveCourses={props.changeActiveCourses}
            />,
        ];
    } else {
        modules = [
            <Accordion1 />,
            <Accordion2 />,
            <Accordion3 />,
            <MaxCard
                CheckNumberSplider={props.CheckNumberSplider}
                localCurrency={props.localCurrency}
                actualCurrency={actualCurrency}
                Prices={props.Prices}
                changeActiveCourses={props.changeActiveCourses}
            />,
        ];
    }

    return (
        <div className={FrontendCss.Frontend}>
            {props.state.displaySize.isDesktop ? (
                <BurgerMenuDesktop />
            ) : (
                <BurgerMenu />
            )}
            {props.formCoursesActive ? (
                <CourseForm
                    state={props.state}
                    changeActiveCourses={props.changeActiveCourses}
                    formCoursesActive={props.formCoursesActive}
                />
            ) : (
                ''
            )}
            <div className={FrontendCss.titleBack}>
                <div className={FrontendCss.titleWrapper}>
                    <div className={FrontendCss.title}>
                        Курс Frontend разработчик
                    </div>
                    <div className={FrontendCss.subTitle}>
                        Теоретические и практические курсы по подготовке
                        Frontend разработчиков на реальных проектах (стартапах)
                    </div>
                    <div
                        onClick={() => {
                            props.CheckNumberSplider(1);
                            props.changeActiveCourses();
                        }}
                    >
                        {' '}
                        <div className={FrontendCss.titleBtn}>
                            <p>Записаться на курс</p>
                        </div>
                    </div>
                </div>
                <div className={FrontendCss.blackBack}>
                    <div className={FrontendCss.stagesTitleWrapper}>
                        <div className={FrontendCss.stagesTitle}>
                            Стадии подготовки Front-end разработчика в MVP
                            connect
                        </div>
                        <div className={FrontendCss.stagesSubTitle}>
                            От нулевого уровня до специалиста
                        </div>
                    </div>

                    <div className={FrontendCss.courses}>
                        <div className={FrontendCss.month}>
                            <p>1 месяц</p>
                        </div>
                        <div className={FrontendCss.course}>
                            <div className={FrontendCss.courseTitle}>
                                Базовый курс
                            </div>
                            <div className={FrontendCss.courseSubTitle}>
                                Javascript разработчик
                            </div>
                            <div className={FrontendCss.courseInfo}>
                                Получите базовые знания о верстке сайтов.
                                Изучите HTML5 и CSS3, освоите создание структуры
                                сайта и работу с макетом, научитесь создавать
                                адаптивные сайты.
                            </div>
                            <div className={FrontendCss.courseShedule}>
                                Занятия каждую неделю по{' '}
                                <b>Вторникам и Четвергам</b> <br /> с 18:30 до
                                21:30
                                <br /> Формат - <b>online</b>
                            </div>
                        </div>
                        <div className={FrontendCss.month2}>
                            <p>1 месяц</p>
                        </div>
                        <div className={FrontendCss.course2}>
                            <div className={FrontendCss.courseTitle}>
                                Профессиональный курс React & React native
                            </div>
                            <div className={FrontendCss.courseSubTitle}>
                                Frontend разработчик
                            </div>
                            <div className={FrontendCss.courseInfo}>
                                Узнаете как проектировать клиентские приложения
                                с использованием React, освоите настройки
                                окружения. Поймёте, где есть смысл в
                                использовании React, а где можно обойтись
                                другими инструментами.
                            </div>
                            <div className={FrontendCss.courseShedule}>
                                Занятия каждую неделю по{' '}
                                <b>Вторникам и Четвергам</b> <br /> с 18:30 до
                                21:30
                                <br /> Формат - <b>online</b>
                            </div>
                        </div>
                        <div className={FrontendCss.month3}>
                            <p>3 месяца</p>
                        </div>
                        <div className={FrontendCss.course3}>
                            <div className={FrontendCss.courseTitle}>
                                Практический курс (аналог стажировки в IT
                                компании)
                            </div>
                            <div className={FrontendCss.courseSubTitle}>
                                Frontend разработчик <p> с опытом</p> командной
                                работы на IT-проекте
                            </div>
                            <div className={FrontendCss.courseInfo}>
                                Закрепите полученный теоретический опыт,
                                прокачайте себя как специалиста, а не теоретика.
                                Погрузитесь в работу с командой и сделайте
                                качественный продукт. Узнайте как на практике
                                работают гибкие методологии и чем они помогают
                                проектам.
                            </div>
                            <div className={FrontendCss.courseShedule}>
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

                    <div
                        onClick={() => {
                            props.CheckNumberSplider(1);
                            props.changeActiveCourses();
                        }}
                    >
                        {' '}
                        <div className={FrontendCss.coursesBtn}>
                            Записаться на курс
                        </div>{' '}
                    </div>
                    <div className={FrontendCss.mentorWrapper}>
                        <div className={FrontendCss.mentor}>
                            <img src={mentor} alt="" />
                        </div>
                        <div className={FrontendCss.mentorInfo}>
                            <div className={FrontendCss.mentorInfoWrapper}>
                                <div className={FrontendCss.mentorName}>
                                    Евгений Гнедчик
                                </div>
                                <div className={FrontendCss.mentorProf}>
                                    Senior Full-stack Developer в{' '}
                                    <a href="https://cropfleet.ru/">
                                        {' '}
                                        Cropfleet
                                    </a>{' '}
                                </div>
                                <div className={FrontendCss.mentorBorder}></div>
                                <div className={FrontendCss.mentorDescr}>
                                    Привет, за 5 лет в разработке я накопил
                                    огромный опыт, которым хотел бы поделиться с
                                    миром. По специфике проектов я почти всегда
                                    работал с Junior специалистами и со
                                    стартапами, поэтому очень хорошо знаю эту
                                    сферу и могу вас научить создавать крутые
                                    проект с нуля.{' '}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={FrontendCss.programTitle}>
                        Программа подготовки Frontend разработчиков
                    </div>
                    {props.state.displaySize.isDesktop ? (
                        <MenuDesktop
                            ChoiseModule={ChoiseModule}
                            setChoiseModule={setChoiseModule}
                            ChangNumberModule={props.ChangNumberModule}
                        />
                    ) : (
                        <MenuMobile
                            ChoiseModule={ChoiseModule}
                            setChoiseModule={setChoiseModule}
                            ChangNumberModule={props.ChangNumberModule}
                        />
                    )}

                    {modules}

                    {props.state.displaySize.isDesktop ? (
                        <MvpConnectDesktop />
                    ) : (
                        <MvpConnect />
                    )}
                </div>
            </div>
        </div>
    );
};

export default Frontend;

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
    props.ScrollTop();
    const [ChoiseModule, setChoiseModule] = useState(2);

    let modules = [
        <Accordion1 />,
        <Card1 CheckNumberSplider={props.CheckNumberSplider} />,
    ];
    if (ChoiseModule === 2) {
        modules = [
            <Accordion1 />,
            <Card1 CheckNumberSplider={props.CheckNumberSplider} />,
        ];
    } else if (ChoiseModule === 3) {
        modules = [
            <Accordion2 />,
            <Card2 CheckNumberSplider={props.CheckNumberSplider} />,
        ];
    } else if (ChoiseModule === 4) {
        modules = [
            <Accordion3 />,
            <Card3 CheckNumberSplider={props.CheckNumberSplider} />,
        ];
    } else {
        modules = [
            <Accordion1 />,
            <Card1 CheckNumberSplider={props.CheckNumberSplider} />,
        ];
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
                    <div className={PythonCss.title}>Back-end разработчик</div>
                    <div className={PythonCss.subTitle}>
                        Теоретические и практические курсы по подготовке
                        Back-end разработчиков на реальных проектах (стартапах)
                    </div>
                    <NavLink
                        to="/CourseForm"
                        onClick={() => props.CheckNumberSplider(2)}
                    >
                        <div className={PythonCss.titleBtn}>
                            <p>Записаться на курс</p>
                        </div>
                    </NavLink>
                </div>
                <div className={PythonCss.blackBack}>
                    <div className={PythonCss.stagesTitleWrapper}>
                        <div className={PythonCss.stagesTitle}>
                            Стадии подготовки Back-end разработчика в MVP
                            connect
                        </div>
                        <div className={PythonCss.stagesSubTitle}>
                            От нулевого уровня до специалиста
                        </div>
                    </div>

                    <div className={PythonCss.courses}>
                        <div className={PythonCss.month}>
                            <p>3 месяца</p>
                        </div>
                        <div className={PythonCss.course}>
                            <div className={PythonCss.courseTitle}>
                                Базовый курс
                            </div>
                            <div className={PythonCss.courseSubTitle}>
                                Back-end Python разработчик начальниый уровень
                            </div>
                            <div className={PythonCss.courseInfo}>
                                Получите базовые знания о работе с Python.
                                Изучите кортежи, словари, циклы, функции,
                                модули, пакеты и многое другое. Познакомитесь с
                                базами данных и окружением Python
                            </div>
                            <div className={PythonCss.courseShedule}>
                                Занятия каждую неделю по{' '}
                                <b>Вторникам и Четвергам</b> <br /> с 19:00 до
                                21:15
                                <br /> Формат - <b>online</b>
                            </div>
                        </div>
                        <div className={PythonCss.month2}>
                            <p>3 месяца</p>
                        </div>
                        <div className={PythonCss.course2}>
                            <div className={PythonCss.courseTitle}>
                                Практический курс (аналог стажировки в IT
                                компании)
                            </div>
                            <div className={PythonCss.courseSubTitle}>
                                Junior Back-end Python разработчик
                                <ins> с опытом</ins> командной работы на
                                IT-проекте
                            </div>
                            <div className={PythonCss.courseInfo}>
                                Закрепите полученный теоретический опыт,
                                прокачайте себя как специалиста, а не теоретика.
                                Погрузитесь в работу с командой и сделайте
                                качественный продукт. Узнайте как на практике
                                работают гибкие методологии и чем они помогают
                                проектам.
                                <br />
                                <br />
                                Занятия в <b> свободное время </b>
                                связь с ментором ежедневно, в течении недели, по
                                согласованию. <br />
                                <b>Суббота</b> - демонстрация результатов
                                работы, их анализ, планирование нового спринта и
                                проведение ретроспективы спринта. Формат -{' '}
                                <b> online</b>
                            </div>
                        </div>
                    </div>

                    <NavLink
                        to="/CourseForm"
                        onClick={() => props.CheckNumberSplider(2)}
                    >
                        {' '}
                        <div className={PythonCss.coursesBtn}>
                            Записаться на курс
                        </div>{' '}
                    </NavLink>
                    <div className={PythonCss.mentorWrapper}>
                        <div className={PythonCss.mentor}>
                            <img src={mentor} alt="" />
                        </div>
                        <div className={PythonCss.mentorInfo}>
                            <div className={PythonCss.mentorInfoWrapper}>
                                <div className={PythonCss.mentorName}>
                                    Жогаль Дмитрий
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
                                <a href="tel:+375447801236">
                                    {' '}
                                    <div className={PythonCss.footerNumber}>
                                        +375 44 780 12 36
                                    </div>{' '}
                                </a>
                                <a href="mailto:info@mvp.by">
                                    {' '}
                                    <div className={PythonCss.footerMail}>
                                        info@mvp.by
                                    </div>{' '}
                                </a>
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

export default Python;

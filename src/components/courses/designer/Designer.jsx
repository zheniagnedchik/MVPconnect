import BurgerMenu from '../../mainComponent/mainPage/burgerMenu/BurgerMenu';
import BurgerMenuDesktop from '../../mainComponent/mainPage/burgerMenuDesktop/BurgerMenuDesktop';
import DesignerCss from './Designer.module.css';
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

const Designer = (props) => {
    const [ChoiseModule, setChoiseModule] = useState(1);

    let modules = [<Accordion1 />, <Accordion2 />, <Accordion3 />, <MaxCard />];
    if (ChoiseModule === 2) {
        modules = [<Accordion1 />, <Card1 />];
    } else if (ChoiseModule === 3) {
        modules = [<Accordion2 />, <Card2 />];
    } else if (ChoiseModule === 4) {
        modules = [<Accordion3 />, <Card3 />];
    } else {
        modules = [<Accordion1 />, <Accordion2 />, <Accordion3 />, <MaxCard />];
    }
    return (
        <div className={DesignerCss.DesignerWrapper}>
            <div className={DesignerCss.Designer}>
                {props.state.displaySize.isDesktop ? (
                    <BurgerMenuDesktop />
                ) : (
                    <BurgerMenu />
                )}
                <div className={DesignerCss.titleBack}>
                    <div className={DesignerCss.titleWrapper}>
                        <div className={DesignerCss.title}>
                            Курс UX/UI дизайнер
                        </div>
                        <div className={DesignerCss.subTitle}>
                            Теоретические и практические курсы по подготовке
                            UX/UI дизайнеров на реальных проектах (стартапах)
                        </div>
                        <a href="https://docs.google.com/forms/d/e/1FAIpQLSdZZpKxYcmL6XEKL2r7_KQN4al--1MCFCcBhA3JCcmJlVDHLQ/viewform">
                            {' '}
                            <div className={DesignerCss.titleBtn}>
                                <p>Записаться на курс</p>
                            </div>
                        </a>
                    </div>
                    <div className={DesignerCss.blackBack}>
                        <div className={DesignerCss.stagesTitleWrapper}>
                            <div className={DesignerCss.stagesTitle}>
                                Стадии подготовки UX/UI дизайнера в MVP connect
                            </div>
                            <div className={DesignerCss.stagesSubTitle}>
                                От нулевого уровня до специалиста
                            </div>
                        </div>

                        <div className={DesignerCss.courses}>
                            <div className={DesignerCss.month}>
                                <p>3 месяца</p>
                            </div>
                            <div className={DesignerCss.course}>
                                <div className={DesignerCss.courseTitle}>
                                    Базовый курс
                                </div>

                                <div className={DesignerCss.courseInfo}>
                                    Получите базовые знания о работе над
                                    проектом от сбора данных до финальной
                                    демонстрации заказчику. Узнаете что такое
                                    Figma, принципы разработки web-дизайна и
                                    мобильных интерфейсов, познакомитесь с
                                    дизайн-системами. Научитесь составлять
                                    "карту путешествия клиента", готовить UI
                                    Kit, работать с компонентами и со стилями.
                                </div>
                                <div className={DesignerCss.courseShedule}>
                                    Занятия каждую неделю:{' '}
                                    <b>Вторник, Среда и Четверг</b> <br /> с
                                    18:30 до 21:30
                                    <br /> Формат - <b>online</b>
                                </div>
                            </div>
                            <div className={DesignerCss.month2}>
                                <p>1 месяц</p>
                            </div>
                            <div className={DesignerCss.course2}>
                                <div className={DesignerCss.courseTitle}>
                                    Профессиональный курс
                                </div>

                                <div className={DesignerCss.courseInfo}>
                                    Освоите работу с анимацией, тестированием
                                    юзабилити. погрузитесь в разработку игровой
                                    среды, а также виртуальной и дополненной
                                    реальностей. Сформируете портфолио из
                                    нескольких проектов. Узнаете основные
                                    методологии разработки программного
                                    обеспечения, спринты инкремент и многое
                                    другое.
                                </div>
                                <div className={DesignerCss.courseShedule}>
                                    Занятия каждую неделю:{' '}
                                    <b> Вторник, Среда и Четверг</b> <br /> с
                                    18:30 до 21:30
                                    <br /> Формат - <b>online</b>
                                </div>
                            </div>
                            <div className={DesignerCss.month3}>
                                <p>3 месяца</p>
                            </div>
                            <div className={DesignerCss.course3}>
                                <div className={DesignerCss.courseTitle}>
                                    Практический курс (аналог стажировки в IT
                                    компании)
                                </div>
                                <div className={DesignerCss.courseSubTitle}>
                                    UX/UI дизайнер <p> с опытом</p> командной
                                    работы на IT-проекте
                                </div>
                                <div className={DesignerCss.courseInfo}>
                                    Закрепите полученный теоретический опыт,
                                    прокачайте себя как специалиста, а не
                                    теоретика. Погрузитесь в работу с командой и
                                    сделайте качественный продукт. Узнайте как
                                    на практике работают гибкие методологии и
                                    чем они помогают проектам.
                                </div>
                                <div className={DesignerCss.courseShedule}>
                                    Занятия в <b> свободное время</b> <br />
                                    связь с ментором ежедневно, в течении
                                    недели, по согласованию.
                                    <b>Суббота</b> - демонстрация результатов
                                    работы, их анализ, планирование нового
                                    спринта и проведение ретроспективы спринта.
                                    <br /> Формат - <b>online</b>
                                </div>
                            </div>
                        </div>

                        <a href="https://docs.google.com/forms/d/e/1FAIpQLSdZZpKxYcmL6XEKL2r7_KQN4al--1MCFCcBhA3JCcmJlVDHLQ/viewform">
                            {' '}
                            <div className={DesignerCss.coursesBtn}>
                                Записаться на курс
                            </div>{' '}
                        </a>
                        <div className={DesignerCss.mentorWrapper}>
                            <div className={DesignerCss.mentor}>
                                <img src={mentor} alt="" />
                            </div>
                            <div className={DesignerCss.mentorInfo}>
                                <div className={DesignerCss.mentorInfoWrapper}>
                                    <div className={DesignerCss.mentorName}>
                                        Анастасия Муравьева
                                    </div>
                                    <div className={DesignerCss.mentorProf}>
                                        Senior UX/UI designer в iTechArt
                                    </div>
                                    <div
                                        className={DesignerCss.mentorBorder}
                                    ></div>
                                    <div className={DesignerCss.mentorDescr}>
                                        Привет, я Настя! Работаю Senior UX/UI
                                        designer в iTechArt. Мы создаем крутые
                                        сервисы и приложения для западных
                                        стартапов. Специфика моего дела в том,
                                        что я не только работаю руками, но и
                                        помогаю своим коллегам доводить все до
                                        идеала.
                                        <br />
                                        <br />
                                        Если ты хочешь освоить UX/UI, стать
                                        крутым дизайнером и работать с
                                        интересными проектами, я с радостью
                                        проведу тебя за руку в этот удивительный
                                        мир.{' '}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={DesignerCss.programTitle}>
                            Программа подготовки UX/UI дизайнеров
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

                        <footer className={DesignerCss.footer}>
                            <div className={DesignerCss.footerWrapper}>
                                <div className={DesignerCss.footerImg}>
                                    <NavLink to="/">
                                        {' '}
                                        <img src={mvp} alt="" />
                                    </NavLink>
                                </div>

                                <div className={DesignerCss.footerInfo}>
                                    <div className={DesignerCss.footerNumber}>
                                        +375 44 780 12 36
                                    </div>
                                    <div className={DesignerCss.footerMail}>
                                        info@mvp.by
                                    </div>
                                    <div className={DesignerCss.footerDescr}>
                                        {' '}
                                        ООО “ЭмВиПи коннект”
                                        <br /> 220051, г. Минск, ул. Сергея
                                        Есенина, 130, кабинет 3
                                        <br />
                                        УНП: 193620230, ОКПО: 505945425000 BY06{' '}
                                        <br />
                                        ALFA 3012 2B99 8900 1027 0000, БИК:
                                        ALFABY2X <br /> в ЗАО "Альфа-Банк",
                                        220013 г.Минск, ул.Сурганова, 43-47.
                                    </div>
                                </div>
                                <div className={DesignerCss.socialNetworkIcons}>
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
        </div>
    );
};

export default Designer;

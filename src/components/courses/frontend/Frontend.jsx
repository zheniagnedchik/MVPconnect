import BurgerMenu from '../../mainComponent/mainPage/burgerMenu/BurgerMenu';
import BurgerMenuDesktop from '../../mainComponent/mainPage/burgerMenuDesktop/BurgerMenuDesktop';
import FrontendCss from './Frontend.module.css';
import mentor from './img/mentor.jpg';
import mvp from './img/MvpConnect.svg';
import Vk from './img/socialNetwork/vk.svg';
import Facebook from './img/socialNetwork/f.svg';
import Inst from './img/socialNetwork/inst.svg';
import In from './img/socialNetwork/in.svg';
import Tel from './img/socialNetwork/teleg.svg';

const Frontend = (props) => {
    return (
        <div className={FrontendCss.Frontend}>
            {props.state.displaySize.isDesktop ? (
                <BurgerMenuDesktop />
            ) : (
                <BurgerMenu />
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
                    <div className={FrontendCss.titleBtn}>
                        <p>Записаться на курс</p>
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

                    <div className={FrontendCss.coursesBtn}>
                        Записаться на курс
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

                    <footer className={FrontendCss.footer}>
                        <div className={FrontendCss.footerWrapper}>
                            <div className={FrontendCss.footerImg}>
                                <img src={mvp} alt="" />
                            </div>

                            <div className={FrontendCss.footerInfo}>
                                <div className={FrontendCss.footerNumber}>
                                    +375 44 780 12 36
                                </div>
                                <div className={FrontendCss.footerMail}>
                                    info@mvp.by
                                </div>
                                <div className={FrontendCss.footerDescr}>
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
                            <div className={FrontendCss.socialNetworkIcons}>
                                <img src={Vk} alt="" />
                                <img src={Facebook} alt="" />
                                <img src={Inst} alt="" />
                                <img src={In} alt="" />
                                <img src={Tel} alt="" />
                            </div>
                        </div>
                    </footer>
                </div>
            </div>
        </div>
    );
};

export default Frontend;

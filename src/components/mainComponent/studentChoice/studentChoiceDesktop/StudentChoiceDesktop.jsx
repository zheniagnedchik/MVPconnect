import StudentChoiceCss from './studentChoiceDesktop.module.css';
import icon1 from './img/icon1.svg';
import icon2 from './img/icon2.svg';
import icon3 from './img/icon3.svg';
import icon4 from './img/icon4.svg';
import icon5 from './img/icon5.svg';
import icon6 from './img/icon6.svg';
import { NavLink } from 'react-router-dom';

const StudentChoiceDesktop = () => {
    return (
        <div className={StudentChoiceCss.studentChoice}>
            <div className={StudentChoiceCss.mainTitle}>
                {' '}
                <p> Почему студенты выбирают MVP connect</p>
            </div>
            <div className={StudentChoiceCss.mainSubTitle}> </div>

            <div className={StudentChoiceCss.wrapperTable}>
                <div className={StudentChoiceCss.cell1}>
                    <div className={StudentChoiceCss.imgWrapper}>
                        {' '}
                        <img src={icon1} alt="" />
                    </div>
                    <div className={StudentChoiceCss.titleWrapper}>
                        <div className={StudentChoiceCss.title}>
                            Коммерческие проекты
                        </div>
                        <div className={StudentChoiceCss.subTitle}>
                            Коммерческие проекты - практика только на
                            коммерческих проектах и стартапах. Никаких
                            Pet-проектов и домашних заготовок.
                        </div>
                    </div>
                </div>
                <div className={StudentChoiceCss.cell2}>
                    {' '}
                    <div className={StudentChoiceCss.imgWrapper}>
                        {' '}
                        <img src={icon2} alt="" />
                    </div>
                    <div className={StudentChoiceCss.titleWrapper}>
                        <div className={StudentChoiceCss.title}>
                            Ментор для каждой профессии
                        </div>
                        <div className={StudentChoiceCss.subTitle}>
                            Ментор для каждой профессии - на практической части
                            за вами будет закреплен ментор, который в течении
                            всего обучения будет помогать с постановкой и
                            реализацией задач.
                        </div>
                    </div>
                </div>
                <div className={StudentChoiceCss.cell3}>
                    {' '}
                    <div className={StudentChoiceCss.imgWrapper}>
                        {' '}
                        <img src={icon3} alt="" />
                    </div>
                    <div className={StudentChoiceCss.titleWrapper}>
                        <div className={StudentChoiceCss.title}>
                            Совмещай работу и учёбу
                        </div>
                        <div className={StudentChoiceCss.subTitle}>
                            Совмещай работу и учебу - вы можете получать
                            теоретические и практические знания во время работы
                            с проектом, без ущерба для основной работы/обучения.
                            "Мягкий" вход в новую специальность.
                        </div>
                    </div>
                </div>
                <div className={StudentChoiceCss.cell4}>
                    {' '}
                    <div className={StudentChoiceCss.imgWrapper}>
                        {' '}
                        <img src={icon4} alt="" />
                    </div>
                    <div className={StudentChoiceCss.titleWrapper}>
                        <div className={StudentChoiceCss.title}>
                            Полноценные команды
                        </div>
                        <div className={StudentChoiceCss.subTitle}>
                            Полноценные команды - вы не работаете в одиночку или
                            в моно-команде (одного типа). Мы предлагаем команду
                            из UX/UI, Front&Back-end developers, PM, QA. Только
                            так можно получить полноценный опыт работы.
                        </div>
                    </div>
                </div>
                <div className={StudentChoiceCss.cell5}>
                    {' '}
                    <div className={StudentChoiceCss.imgWrapper}>
                        {' '}
                        <img src={icon5} alt="" />
                    </div>
                    <div className={StudentChoiceCss.titleWrapper}>
                        <div className={StudentChoiceCss.title}>
                            Стоимость обучения
                        </div>
                        <div className={StudentChoiceCss.subTitle}>
                            Лучшие программы - мы не предлагаем стать сеньором
                            за день и заработать миллион за час. Все программы
                            обеспечивают максимальное качество подготовки, в
                            реальные сроки.
                        </div>
                    </div>
                </div>
                <div className={StudentChoiceCss.cell6}>
                    {' '}
                    <div className={StudentChoiceCss.imgWrapper}>
                        {' '}
                        <img src={icon6} alt="" />
                    </div>
                    <div className={StudentChoiceCss.titleWrapper}>
                        <div className={StudentChoiceCss.title}>
                            Ментор для каждой профессии
                        </div>
                        <div className={StudentChoiceCss.subTitle}>
                            Программа трудоустройства - вам будут доступны все
                            наши инструменты - чаты и сайт с поиском работ и
                            фриланс проектов, а также предложения от партнеров.
                        </div>
                    </div>
                </div>
            </div>
            <NavLink to="/PracticeForm">
                <div className={StudentChoiceCss.btn}>
                    <p>Записаться</p>
                </div>
            </NavLink>
        </div>
    );
};

export default StudentChoiceDesktop;

import StudentChoiceCss from './StudentChoice.module.css';
import { useState } from 'react';
import Icon from './img/icon.svg';
import Vector from './img/Vector.svg';
import VectorGold from './img/VectorGold.svg';
import { NavLink } from 'react-router-dom';

const StudentChoice = () => {
    const [selected, setSelected] = useState(null);
    // Accordion
    const toggle = (i) => {
        if (selected == i) {
            return setSelected(null);
        }
        setSelected(i);
    };

    return (
        <div className={StudentChoiceCss.studentChoice} id="studentChoice">
            <div className={StudentChoiceCss.mainTitle}>
                Почему студенты выбирают MVP connect
            </div>
            <div className={StudentChoiceCss.accordiondWrapper}>
                <div className={StudentChoiceCss.accordion}>
                    {data.map((item, i) => (
                        <div className={StudentChoiceCss.item}>
                            <div className={StudentChoiceCss.icon}>
                                {' '}
                                <img src={Icon} alt="" />
                            </div>
                            <div
                                className={`${StudentChoiceCss.title} ${
                                    selected == i
                                        ? StudentChoiceCss.titleActive
                                        : ''
                                }`}
                                onClick={() => toggle(i)}
                            >
                                <h2>{item.section}</h2>
                                <div
                                    className={`${StudentChoiceCss.arrow} ${
                                        selected == i
                                            ? StudentChoiceCss.active
                                            : ''
                                    }`}
                                >
                                    {' '}
                                    <img
                                        src={`${
                                            selected == i ? VectorGold : Vector
                                        }`}
                                        alt=""
                                    />
                                </div>
                            </div>
                            <div
                                className={`${StudentChoiceCss.content} ${
                                    selected == i
                                        ? StudentChoiceCss.activeContent
                                        : ''
                                }`}
                            >
                                <div> {item.subsection}</div>{' '}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <NavLink to="/PracticeForm">
                {' '}
                <div className={StudentChoiceCss.btn}>
                    <p>Записаться</p>
                </div>
            </NavLink>
        </div>
    );
};

const data = [
    {
        section: 'Коммерческий проект в портфолио',
        subsection:
            'Нет скучным и никому не нужным заданиям. Только необходимая теория, без “зубрежки”, с закреплением навыков на практике',
    },
    {
        section: 'Полноценные команды (BA, Dev, UX/UI, QA…)',
        subsection:
            'Научишься планировать время, искать информацию, “прокачаешь” ответственность, поймешь роли в команде',
    },

    {
        section: 'Ментор для каждой профессии',
        subsection:
            'Развивайся правильно и на максимуме. Эксперты помогут с решением вопросов и проблем',
    },
    {
        section: 'Совмещай работу и учебу',
        subsection:
            'Работа по гибкому графику - по вечерам и выходным. Продолжи подготовку к переходу в IT, не покидая текущую деятельность',
    },
    {
        section: 'Трудоустройство к партнерам MVP connect',
        subsection: 'Мы помогаем студентам построить свою карьеру',
    },
];

export default StudentChoice;

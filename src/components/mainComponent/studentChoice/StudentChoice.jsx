import StudentChoiceCss from './StudentChoice.module.css';
import { useState } from 'react';
import Icon from './img/icon.svg';
import Vector from './img/Vector.svg';
import VectorGold from './img/VectorGold.svg';

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
            <div className={StudentChoiceCss.btn}>
                <p>Записаться</p>
            </div>
        </div>
    );
};

const data = [
    {
        section: 'Коммерческие проекты  ',
        subsection: 'IT- курсы и практика на коммерческих проектах и стартапах',
    },
    {
        section: 'Ментор для каждой профессии',
        subsection: 'IT- курсы и практика на коммерческих проектах и стартапах',
    },

    {
        section: 'Совмещай работу и учёбу',
        subsection: 'IT- курсы и практика на коммерческих проектах и стартапах',
    },
    {
        section: 'Стоимость обучения',
        subsection: 'IT- курсы и практика на коммерческих проектах и стартапах',
    },
    {
        section: 'Полноценные команды (BA, Dev, UI/UX...)',
        subsection: 'IT- курсы и практика на коммерческих проектах и стартапах',
    },
];

export default StudentChoice;

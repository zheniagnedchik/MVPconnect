import MenuAccordionCss from './MenuAccordion.module.css';
import Vector from './img/Vector.svg';
import { useState } from 'react';

const MenuAccordion = () => {
    const [selected, setSelected] = useState(null);

    // Accordion in open burger menu
    const toggle = (i) => {
        if (selected == i) {
            return setSelected(null);
        }
        setSelected(i);
    };

    return (
        <div className={MenuAccordionCss.wrapper}>
            <div className={MenuAccordionCss.accordion}>
                {data.map((item, i) => (
                    <div className={MenuAccordionCss.item}>
                        <div
                            className={MenuAccordionCss.title}
                            onClick={() => toggle(i)}
                        >
                            <h2>{item.section}</h2>
                            <div
                                className={`${MenuAccordionCss.arrow} ${
                                    selected == i ? MenuAccordionCss.active : ''
                                }`}
                            >
                                {' '}
                                <img src={Vector} alt="" />
                            </div>
                        </div>
                        <div
                            className={`${MenuAccordionCss.content} ${
                                selected == i
                                    ? MenuAccordionCss.activeContent
                                    : ''
                            }`}
                        >
                            <div> {item.subsection}</div>{' '}
                            <div>{item.subsection1}</div>
                            <div> {item.subsection2}</div>{' '}
                            <div>{item.subsection3}</div>
                            <div> {item.subsection4}</div>{' '}
                            <div>{item.subsection5}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MenuAccordion;

const data = [
    {
        section: 'IT Курсы',
        subsection: 'Front-end',
        subsection1: 'Back-end',
        subsection2: 'UX/UI',
        subsection3: 'PM',
        subsection4: 'BA',
        subsection5: 'QA',
    },
    {
        section: 'IT Практика',
        subsection: 'Front-end',
        subsection1: 'Back-end',
        subsection2: 'UX/UI',
        subsection3: 'PM',
        subsection4: 'BA',
        subsection5: 'QA',
    },

    {
        section: 'Сотрудничество',
        subsection: 'Front-end',
        subsection1: 'Back-end',
        subsection2: 'UX/UI',
        subsection3: 'PM',
        subsection4: 'BA',
        subsection5: 'QA',
    },
    {
        section: 'Кабинет пользователя',
        subsection: 'Front-end',
        subsection1: 'Back-end',
        subsection2: 'UX/UI',
        subsection3: 'PM',
        subsection4: 'BA',
        subsection5: 'QA',
    },
];

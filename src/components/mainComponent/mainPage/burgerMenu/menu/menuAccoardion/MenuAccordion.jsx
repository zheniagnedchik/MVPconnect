import MenuAccordionCss from './MenuAccordion.module.css';
import Vector from './img/Vector.svg';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

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
                            <NavLink to={item.link}>
                                {' '}
                                <div> {item.subsection}</div>
                            </NavLink>{' '}
                            <NavLink to={item.link1}>
                                {' '}
                                <div>{item.subsection1}</div>
                            </NavLink>
                            <NavLink to={item.link2}>
                                {' '}
                                <div> {item.subsection2}</div>
                            </NavLink>{' '}
                        </div>
                    </div>
                ))}

                <NavLink to="/Practice">
                    <div className={MenuAccordionCss.title}>
                        <h2> IT Практика</h2>
                    </div>
                </NavLink>
            </div>
        </div>
    );
};

export default MenuAccordion;

const data = [
    {
        section: 'IT Курсы',
        subsection: 'Front-end',
        subsection1: 'Python',
        subsection2: 'UX/UI',
        link: '/Frontend',
        link1: '/Python',
        link2: '/Designer',
    },
];

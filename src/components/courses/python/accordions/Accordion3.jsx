import AccordionCss from './Accordion.module.css';
import { useState } from 'react';
const Accordion3 = () => {
    const [selected, setSelected] = useState(false);

    return (
        <div className={AccordionCss.Accordion}>
            <div className={AccordionCss.titleWrapper}>
                <div className={AccordionCss.title}>Модуль 3. Пра﻿ктика</div>
                <div className={AccordionCss.subTitle}>
                    Продолжительность - 3 месяца{' '}
                    <p>Модуль может быть приобретен отдельно</p>
                </div>
            </div>

            <div className={AccordionCss.accordionWrapper}>
                <div
                    className={`${AccordionCss.accordionItem} ${
                        selected ? '' : AccordionCss.accordionItemBorder
                    } ${AccordionCss.accordionTopBorder} `}
                >
                    <div
                        className={AccordionCss.accordionTitle}
                        onClick={() => {
                            selected ? setSelected(false) : setSelected(true);
                        }}
                    >
                        {' '}
                        <p> Практика на стартапах</p>{' '}
                        <p
                            className={`${AccordionCss.accordionPlus} ${
                                selected ? AccordionCss.accordionPlusActive : ''
                            }  `}
                        >
                            +
                        </p>{' '}
                    </div>
                    <div></div>
                    <div
                        className={`${AccordionCss.accordionContent} ${
                            selected ? AccordionCss.accordionActive : ''
                        }  `}
                    >
                        <ul>
                            <li>Реальные проекты</li>
                            <li>
                                Командная работа (с Backend, UX/UI, PM, PrdM,
                                QA)
                            </li>
                            <li>Постоянная поддержка со стороны менторов</li>

                            <li>
                                {' '}
                                Возможность трудоустроиться в проект при его
                                успешном запуске
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Accordion3;

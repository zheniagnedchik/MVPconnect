import AccordionCss from './Accordion.module.css';
import { useState } from 'react';
const Accordion2 = () => {
    const [selected, setSelected] = useState(false);
    const [selected1, setSelected1] = useState(false);
    const [selected2, setSelected2] = useState(false);
    const [selected3, setSelected3] = useState(false);
    const [selected4, setSelected4] = useState(false);
    const [selected5, setSelected5] = useState(false);
    const [selected6, setSelected6] = useState(false);
    const [selected7, setSelected7] = useState(false);
    const [selected8, setSelected8] = useState(false);
    const [selected9, setSelected9] = useState(false);
    const [selected10, setSelected10] = useState(false);

    return (
        <div className={AccordionCss.Accordion}>
            <div className={AccordionCss.titleWrapper}>
                <div className={AccordionCss.title}>
                    Модуль 2. “UX/UI профессиональный”
                </div>
                <div className={AccordionCss.subTitle}>
                    20 занятий по 3 часа (60 часов){' '}
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
                        <p>10. Анимация в After Effects</p>{' '}
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
                            <li>
                                Виды и примеры анимации для веб и мобильных
                                устройств
                            </li>
                            <li>Прелоадеры сайтов</li>
                            <li>Основной функционал After Effects</li>
                            <li> Основной функционал Principl</li>
                        </ul>
                    </div>
                </div>
                <div
                    className={`${AccordionCss.accordionItem} ${
                        selected1 ? '' : AccordionCss.accordionItemBorder
                    } `}
                >
                    <div
                        className={AccordionCss.accordionTitle}
                        onClick={() => {
                            selected1
                                ? setSelected1(false)
                                : setSelected1(true);
                        }}
                    >
                        {' '}
                        <p> 11. Тестирование юзабилити</p>{' '}
                        <p
                            className={`${AccordionCss.accordionPlus} ${
                                selected1
                                    ? AccordionCss.accordionPlusActive
                                    : ''
                            }  `}
                        >
                            +
                        </p>{' '}
                    </div>
                    <div></div>
                    <div
                        className={`${AccordionCss.accordionContent} ${
                            selected1 ? AccordionCss.accordionActive : ''
                        }  `}
                    >
                        <ul>
                            <li>Юзабилити-тестирование</li>
                            <li>Hallway testing</li>
                            <li>Remote usability testing</li>
                            <li>Expert review</li>
                            <li> Automated expert review</li>
                            <li> A/B testing</li>
                        </ul>
                    </div>
                </div>
                <div
                    className={`${AccordionCss.accordionItem} ${
                        selected2 ? '' : AccordionCss.accordionItemBorder
                    } `}
                >
                    <div
                        className={AccordionCss.accordionTitle}
                        onClick={() => {
                            selected2
                                ? setSelected2(false)
                                : setSelected2(true);
                        }}
                    >
                        {' '}
                        <p> 12. Дизайн игровых интерфейсов</p>{' '}
                        <p
                            className={`${AccordionCss.accordionPlus} ${
                                selected2
                                    ? AccordionCss.accordionPlusActive
                                    : ''
                            }  `}
                        >
                            +
                        </p>{' '}
                    </div>
                    <div></div>
                    <div
                        className={`${AccordionCss.accordionContent} ${
                            selected2 ? AccordionCss.accordionActive : ''
                        }  `}
                    >
                        <ul>
                            <li>Разработка игровых интерфейсов</li>
                            <li>Незаметные интерфейсы VS сложные</li>
                            <li>
                                Особенности дизайна интерфейсов мобильных игр
                            </li>
                            <li>Примеры хороших и плохих Game GUI</li>
                        </ul>
                    </div>
                </div>
                <div
                    className={`${AccordionCss.accordionItem} ${
                        selected3 ? '' : AccordionCss.accordionItemBorder
                    } `}
                >
                    <div
                        className={AccordionCss.accordionTitle}
                        onClick={() => {
                            selected3
                                ? setSelected3(false)
                                : setSelected3(true);
                        }}
                    >
                        {' '}
                        <p> 13. UI для VR, AR</p>{' '}
                        <p
                            className={`${AccordionCss.accordionPlus} ${
                                selected3
                                    ? AccordionCss.accordionPlusActive
                                    : ''
                            }  `}
                        >
                            +
                        </p>{' '}
                    </div>
                    <div></div>
                    <div
                        className={`${AccordionCss.accordionContent} ${
                            selected3 ? AccordionCss.accordionActive : ''
                        }  `}
                    >
                        <ul>
                            <li>Особенности интерфейсов VR</li>
                            <li>Особенности интерфейсов AR</li>
                        </ul>
                    </div>
                </div>
                <div
                    className={`${AccordionCss.accordionItem} ${
                        selected4 ? '' : AccordionCss.accordionItemBorder
                    } `}
                >
                    <div
                        className={AccordionCss.accordionTitle}
                        onClick={() => {
                            selected4
                                ? setSelected4(false)
                                : setSelected4(true);
                        }}
                    >
                        {' '}
                        <p> 14. Баннеры</p>{' '}
                        <p
                            className={`${AccordionCss.accordionPlus} ${
                                selected4
                                    ? AccordionCss.accordionPlusActive
                                    : ''
                            }  `}
                        >
                            +
                        </p>{' '}
                    </div>
                    <div></div>
                    <div
                        className={`${AccordionCss.accordionContent} ${
                            selected4 ? AccordionCss.accordionActive : ''
                        }  `}
                    >
                        <ul>
                            <li>Виды баннеров</li>
                        </ul>
                    </div>
                </div>
                <div
                    className={`${AccordionCss.accordionItem} ${
                        selected5 ? '' : AccordionCss.accordionItemBorder
                    } `}
                >
                    <div
                        className={AccordionCss.accordionTitle}
                        onClick={() => {
                            selected5
                                ? setSelected5(false)
                                : setSelected5(true);
                        }}
                    >
                        {' '}
                        <p>15. Редизайн, гипотезы</p>{' '}
                        <p
                            className={`${AccordionCss.accordionPlus} ${
                                selected5
                                    ? AccordionCss.accordionPlusActive
                                    : ''
                            }  `}
                        >
                            +
                        </p>{' '}
                    </div>
                    <div></div>
                    <div
                        className={`${AccordionCss.accordionContent} ${
                            selected5 ? AccordionCss.accordionActive : ''
                        }  `}
                    >
                        <ul>
                            <li> Редизайн. Специфика применения</li>
                            <li>Гипотезы по улучшению</li>
                        </ul>
                    </div>
                </div>
                <div
                    className={`${AccordionCss.accordionItem} ${
                        selected6 ? '' : AccordionCss.accordionItemBorder
                    } `}
                >
                    <div
                        className={AccordionCss.accordionTitle}
                        onClick={() => {
                            selected6
                                ? setSelected6(false)
                                : setSelected6(true);
                        }}
                    >
                        {' '}
                        <p>
                            {' '}
                            16. Особенности интерфейса программного обеспечения
                        </p>{' '}
                        <p
                            className={`${AccordionCss.accordionPlus} ${
                                selected6
                                    ? AccordionCss.accordionPlusActive
                                    : ''
                            }  `}
                        >
                            +
                        </p>{' '}
                    </div>
                    <div></div>
                    <div
                        className={`${AccordionCss.accordionContent} ${
                            selected6 ? AccordionCss.accordionActive : ''
                        }  `}
                    >
                        <ul>
                            <li> Особенности интерфейсов ПО</li>
                            <li>Примеры хороших/плохих интерфейсов ПО</li>
                        </ul>
                    </div>
                </div>
                <div
                    className={`${AccordionCss.accordionItem} ${
                        selected7 ? '' : AccordionCss.accordionItemBorder
                    } `}
                >
                    <div
                        className={AccordionCss.accordionTitle}
                        onClick={() => {
                            selected7
                                ? setSelected7(false)
                                : setSelected7(true);
                        }}
                    >
                        {' '}
                        <p> 17. Soft Skills</p>{' '}
                        <p
                            className={`${AccordionCss.accordionPlus} ${
                                selected7
                                    ? AccordionCss.accordionPlusActive
                                    : ''
                            }  `}
                        >
                            +
                        </p>{' '}
                    </div>
                    <div></div>
                    <div
                        className={`${AccordionCss.accordionContent} ${
                            selected7 ? AccordionCss.accordionActive : ''
                        }  `}
                    >
                        <ul>
                            <li>Правила презентации проектов и гипотез</li>
                            <li>Типичные ошибки</li>
                            <li> Передача проекта разработчикам</li>
                            <li>
                                Сосавление резюме и портфолио UX/UI дизайнера
                            </li>
                        </ul>
                    </div>
                </div>
                <div
                    className={`${AccordionCss.accordionItem} ${
                        selected8 ? '' : AccordionCss.accordionItemBorder
                    } `}
                >
                    <div
                        className={AccordionCss.accordionTitle}
                        onClick={() => {
                            selected8
                                ? setSelected8(false)
                                : setSelected8(true);
                        }}
                    >
                        {' '}
                        <p> 18. Методологии разработки IT проектов</p>{' '}
                        <p
                            className={`${AccordionCss.accordionPlus} ${
                                selected8
                                    ? AccordionCss.accordionPlusActive
                                    : ''
                            }  `}
                        >
                            +
                        </p>{' '}
                    </div>
                    <div></div>
                    <div
                        className={`${AccordionCss.accordionContent} ${
                            selected8 ? AccordionCss.accordionActive : ''
                        }  `}
                    >
                        <ul>
                            <li>Scrum</li>
                            <li>Kanban</li>
                            <li>Waterfall</li>
                            <li>Scrumban</li>
                        </ul>
                    </div>
                </div>
                <div
                    className={`${AccordionCss.accordionItem} ${
                        selected9 ? '' : AccordionCss.accordionItemBorder
                    } `}
                >
                    <div
                        className={AccordionCss.accordionTitle}
                        onClick={() => {
                            selected9
                                ? setSelected9(false)
                                : setSelected9(true);
                        }}
                    >
                        {' '}
                        <p> 19. Работа в команде</p>{' '}
                        <p
                            className={`${AccordionCss.accordionPlus} ${
                                selected9
                                    ? AccordionCss.accordionPlusActive
                                    : ''
                            }  `}
                        >
                            +
                        </p>{' '}
                    </div>
                    <div></div>
                    <div
                        className={`${AccordionCss.accordionContent} ${
                            selected9 ? AccordionCss.accordionActive : ''
                        }  `}
                    >
                        <ul>
                            <li>Принципы управления временем</li>
                            <li>
                                Основы работы в системах управления задачами (на
                                примере Clickup)
                            </li>
                        </ul>
                    </div>
                </div>
                <div
                    className={`${AccordionCss.accordionItem} ${
                        selected10 ? '' : AccordionCss.accordionItemBorder
                    } `}
                >
                    <div
                        className={AccordionCss.accordionTitle}
                        onClick={() => {
                            selected10
                                ? setSelected10(false)
                                : setSelected10(true);
                        }}
                    >
                        {' '}
                        <p> Курсовая работа</p>{' '}
                        <p
                            className={`${AccordionCss.accordionPlus} ${
                                selected10
                                    ? AccordionCss.accordionPlusActive
                                    : ''
                            }  `}
                        >
                            +
                        </p>{' '}
                    </div>
                    <div></div>
                    <div
                        className={`${AccordionCss.accordionContent} ${
                            selected10 ? AccordionCss.accordionActive : ''
                        }  `}
                    >
                        <ul></ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Accordion2;

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

    return (
        <div className={AccordionCss.Accordion}>
            <div className={AccordionCss.titleWrapper}>
                <div className={AccordionCss.title}>
                    Модуль 2. Профессиональный (React)
                </div>
                <div className={AccordionCss.subTitle}>
                    9 занятий по 3 часа (27 часов) - 2 месяца{' '}
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
                        <p> 11. Знакомство с React</p>{' '}
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
                            <li>Что такое React</li>
                            <li>Где html и что такое JSX</li>
                            <li>Настройка create-react-app</li>
                            <li> Виртуальный DOM</li>
                            <li> Props</li>
                            <li> Стилизация компонентов</li>
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
                        <p> 12. Компоненты в React</p>{' '}
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
                            <li>State</li>
                            <li>Stateless и stateful компоненты</li>
                            <li>Элементы формы</li>
                            <li>Условный рендеринг</li>
                            <li> Подъем состояния</li>
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
                        <p> 13. Хуки в React</p>{' '}
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
                            <li>Что такое хуки?</li>
                            <li>
                                Разбор основных хуков: useState, useEffect,
                                useCallback, useMemo
                            </li>
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
                        <p> 14. Навигация сайта в React</p>{' '}
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
                            <li>Router, browser-router, маршрутизация</li>
                            <li>NavLink</li>
                            <li> Router exact</li>
                            <li> Private/public router</li>
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
                        <p> 15. Redux</p>{' '}
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
                            <li>Интеграция Redux</li>
                            <li>Action type, action creator</li>
                            <li> Reducer</li>
                            <li> Store</li>
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
                        <p>16. Знакомство с React Native</p>{' '}
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
                            <li> Как работает React Native</li>
                            <li>Настройка окружения</li>
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
                        <p> 17. Общие сведения</p>{' '}
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
                            <li>
                                {' '}
                                Получение и обработка данных от сторонних
                                сервисов по API
                            </li>
                            <li>Доступ к геопозиции устройства</li>
                            <li>Запрос на предоставление доступа</li>
                            <li>Отличия React от React Native</li>
                            <li>Стили в React Native</li>
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
                        <p> 18. Методологии разработки IT проектов</p>{' '}
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
                            <li>Scrum</li>
                            <li>Kanban</li>
                            <li> Waterfall</li>
                            <li>Scrumban</li>
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
                        <p> 19. Работа в команде</p>{' '}
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
                            <li>Принципы управления временем</li>
                            <li>
                                Основы работы в системах управления задачами (на
                                примере Clickup)
                            </li>
                            <li> Покер планирования</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Accordion2;

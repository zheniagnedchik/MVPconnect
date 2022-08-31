import AccordionCss from './Accordion.module.css';
import { useState } from 'react';
const Accordion1 = () => {
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

    return (
        <div className={AccordionCss.Accordion}>
            <div className={AccordionCss.titleWrapper}>
                <div className={AccordionCss.title}>
                    Модуль 1. “Frontend базовый”
                </div>
                <div className={AccordionCss.subTitle}>
                    10 занятий по 3 часа (30 часов) - 2,5 месяца
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
                        <p> 1. Знакомство с HTML</p>{' '}
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
                            <li>Настройка рабочего окружения</li>
                            <li>Структура и разметка страницы</li>
                            <li>HTML - теги</li>
                            <li>Атрибуты</li>
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
                        <p> 2. Знакомство с CSS</p>{' '}
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
                            <li>Подключение стилей</li>
                            <li>Основные свойства CSS</li>
                            <li>Блочная модель элементов</li>
                            <li>Подключение шрифтов</li>
                            <li>Методология БЭМ</li>
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
                        <p> 3. Работа с git</p>{' '}
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
                            <li>Основные команды</li>
                            <li>Ветвление и состояния в git</li>
                            <li>Командная работа в git</li>
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
                        <p> 4. Введение в JavaScript</p>{' '}
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
                            <li>Переменные</li>
                            <li>Типы данных</li>
                            <li>Преобразование типов</li>
                            <li> Встроенные функции браузера</li>
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
                        <p> 5. Основы JavaScript</p>{' '}
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
                            <li>Базовые операторы</li>
                            <li>Условия</li>
                            <li>Циклы</li>
                            <li>Конструкция switch</li>
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
                        <p> 6. Введение в функции</p>{' '}
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
                            <li> Объявление и вызов</li>
                            <li>Параметры и аргументы</li>
                            <li>Ключевое слово return</li>
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
                        <p> 7. Объекты и массивы</p>{' '}
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
                            <li>Синтаксис и особенности</li>
                            <li>Методы объекта</li>
                            <li>Синтаксис и особенности</li>
                            <li>Методы массивов</li>
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
                        <p> 8. Web Storage Api</p>{' '}
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
                            <li>localStorage</li>
                            <li>sessionStorage</li>
                            <li>JSON</li>
                            <li>Событиe storage</li>
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
                        <p> 9. Асинхронность</p>{' '}
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
                            <li>Функции таймеры</li>
                            <li>Цикл событий</li>
                            <li> Знакомство с сетевыми запросами</li>
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
                        <p> 10. Работа с сетевыми запросами</p>{' '}
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
                            <li>Fetch API</li>
                            <li>Базовый синтаксис new Promise</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Accordion1;

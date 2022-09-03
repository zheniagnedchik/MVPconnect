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
    const [selected10, setSelected10] = useState(false);
    const [selected11, setSelected11] = useState(false);
    const [selected12, setSelected12] = useState(false);
    const [selected13, setSelected13] = useState(false);
    const [selected14, setSelected14] = useState(false);
    const [selected15, setSelected15] = useState(false);
    const [selected16, setSelected16] = useState(false);
    const [selected17, setSelected17] = useState(false);
    const [selected18, setSelected18] = useState(false);

    return (
        <div className={AccordionCss.Accordion}>
            <div className={AccordionCss.titleWrapper}>
                <div className={AccordionCss.title}>
                    Модуль 1. “Python базовый”
                </div>
                <div className={AccordionCss.subTitle}>
                    19 занятий по 2-4 часа (54 часа) - 3 месяца
                </div>
            </div>

            <div className={AccordionCss.accordionWrapper}>
                <div
                    className={`${AccordionCss.accordionItem} ${
                        selected ? '' : AccordionCss.accordionItemBorder
                    } ${AccordionCss.accordionTopBorder} `}
                >
                    <div
                    // className={AccordionCss.accordionTitle}
                    // onClick={() => {
                    //     selected ? setSelected(false) : setSelected(true);
                    // }}
                    >
                        {' '}
                        <p> 1. Введение в Python </p>{' '}
                        {/* <p
                            className={`${AccordionCss.accordionPlus} ${
                                selected ? AccordionCss.accordionPlusActive : ''
                            }  `}
                        >
                            +
                        </p>{' '} */}
                    </div>
                    <div></div>
                    <div
                        className={`${AccordionCss.accordionContent} ${
                            selected ? AccordionCss.accordionActive : ''
                        }  `}
                    >
                        {/* <ul>
                            <li>Настройка рабочего окружения</li>
                            <li>Структура и разметка страницы</li>
                            <li>HTML - теги</li>
                            <li>Атрибуты</li>
                        </ul> */}
                    </div>
                </div>
                <div
                    className={`${AccordionCss.accordionItem} ${
                        selected1 ? '' : AccordionCss.accordionItemBorder
                    } `}
                >
                    <div
                        className={AccordionCss.accordionTitle}
                        // onClick={() => {
                        //     selected1
                        //         ? setSelected1(false)
                        //         : setSelected1(true);
                        // }}
                    >
                        {' '}
                        <p> 2. Основы Python </p>{' '}
                        {/* <p
                            className={`${AccordionCss.accordionPlus} ${
                                selected1
                                    ? AccordionCss.accordionPlusActive
                                    : ''
                            }  `}
                        >
                            +
                        </p>{' '} */}
                    </div>
                    <div></div>
                    <div
                        className={`${AccordionCss.accordionContent} ${
                            selected1 ? AccordionCss.accordionActive : ''
                        }  `}
                    >
                        {/* <ul>
                            <li>Подключение стилей</li>
                            <li>Основные свойства CSS</li>
                            <li>Блочная модель элементов</li>
                            <li>Подключение шрифтов</li>
                            <li>Методология БЭМ</li>
                        </ul> */}
                    </div>
                </div>
                <div
                    className={`${AccordionCss.accordionItem} ${
                        selected2 ? '' : AccordionCss.accordionItemBorder
                    } `}
                >
                    <div
                        className={AccordionCss.accordionTitle}
                        // onClick={() => {
                        //     selected2
                        //         ? setSelected2(false)
                        //         : setSelected2(true);
                        // }}
                    >
                        {' '}
                        <p> 3. Работа со строками </p>{' '}
                        {/* <p
                            className={`${AccordionCss.accordionPlus} ${
                                selected2
                                    ? AccordionCss.accordionPlusActive
                                    : ''
                            }  `}
                        >
                            +
                        </p>{' '} */}
                    </div>
                    <div></div>
                    <div
                        className={`${AccordionCss.accordionContent} ${
                            selected2 ? AccordionCss.accordionActive : ''
                        }  `}
                    >
                        {/* <ul>
                            <li>Основные команды</li>
                            <li>Ветвление и состояния в git</li>
                            <li>Командная работа в git</li>
                        </ul> */}
                    </div>
                </div>
                <div
                    className={`${AccordionCss.accordionItem} ${
                        selected3 ? '' : AccordionCss.accordionItemBorder
                    } `}
                >
                    <div
                        className={AccordionCss.accordionTitle}
                        // onClick={() => {
                        //     selected3
                        //         ? setSelected3(false)
                        //         : setSelected3(true);
                        // }}
                    >
                        {' '}
                        <p> 4. Работа со списками </p>{' '}
                        {/* <p
                            className={`${AccordionCss.accordionPlus} ${
                                selected3
                                    ? AccordionCss.accordionPlusActive
                                    : ''
                            }  `}
                        >
                            +
                        </p>{' '} */}
                    </div>
                    <div></div>
                    <div
                        className={`${AccordionCss.accordionContent} ${
                            selected3 ? AccordionCss.accordionActive : ''
                        }  `}
                    >
                        {/* <ul>
                            <li>Переменные</li>
                            <li>Типы данных</li>
                            <li>Преобразование типов</li>
                            <li> Встроенные функции браузера</li>
                        </ul> */}
                    </div>
                </div>
                <div
                    className={`${AccordionCss.accordionItem} ${
                        selected4 ? '' : AccordionCss.accordionItemBorder
                    } `}
                >
                    <div
                        className={AccordionCss.accordionTitle}
                        // onClick={() => {
                        //     selected4
                        //         ? setSelected4(false)
                        //         : setSelected4(true);
                        // }}
                    >
                        {' '}
                        <p> 5. Кортежи, словари и множества </p>{' '}
                        {/* <p
                            className={`${AccordionCss.accordionPlus} ${
                                selected4
                                    ? AccordionCss.accordionPlusActive
                                    : ''
                            }  `}
                        >
                            +
                        </p>{' '} */}
                    </div>
                    <div></div>
                    <div
                        className={`${AccordionCss.accordionContent} ${
                            selected4 ? AccordionCss.accordionActive : ''
                        }  `}
                    >
                        {/* <ul>
                            <li>Базовые операторы</li>
                            <li>Условия</li>
                            <li>Циклы</li>
                            <li>Конструкция switch</li>
                        </ul> */}
                    </div>
                </div>
                <div
                    className={`${AccordionCss.accordionItem} ${
                        selected5 ? '' : AccordionCss.accordionItemBorder
                    } `}
                >
                    <div
                        className={AccordionCss.accordionTitle}
                        // onClick={() => {
                        //     selected5
                        //         ? setSelected5(false)
                        //         : setSelected5(true);
                        // }}
                    >
                        {' '}
                        <p> 6. Условия в Python </p>{' '}
                        {/* <p
                            className={`${AccordionCss.accordionPlus} ${
                                selected5
                                    ? AccordionCss.accordionPlusActive
                                    : ''
                            }  `}
                        >
                            +
                        </p>{' '} */}
                    </div>
                    <div></div>
                    <div
                        className={`${AccordionCss.accordionContent} ${
                            selected5 ? AccordionCss.accordionActive : ''
                        }  `}
                    >
                        {/* <ul>
                            <li> Объявление и вызов</li>
                            <li>Параметры и аргументы</li>
                            <li>Ключевое слово return</li>
                        </ul> */}
                    </div>
                </div>
                <div
                    className={`${AccordionCss.accordionItem} ${
                        selected6 ? '' : AccordionCss.accordionItemBorder
                    } `}
                >
                    <div
                        className={AccordionCss.accordionTitle}
                        // onClick={() => {
                        //     selected6
                        //         ? setSelected6(false)
                        //         : setSelected6(true);
                        // }}
                    >
                        {' '}
                        <p> 7. Работа с циклами while и for </p>{' '}
                        {/* <p
                            className={`${AccordionCss.accordionPlus} ${
                                selected6
                                    ? AccordionCss.accordionPlusActive
                                    : ''
                            }  `}
                        >
                            +
                        </p>{' '} */}
                    </div>
                    <div></div>
                    <div
                        className={`${AccordionCss.accordionContent} ${
                            selected6 ? AccordionCss.accordionActive : ''
                        }  `}
                    >
                        {/* <ul>
                            <li>Синтаксис и особенности</li>
                            <li>Методы объекта</li>
                            <li>Синтаксис и особенности</li>
                            <li>Методы массивов</li>
                        </ul> */}
                    </div>
                </div>
                <div
                    className={`${AccordionCss.accordionItem} ${
                        selected7 ? '' : AccordionCss.accordionItemBorder
                    } `}
                >
                    <div
                        className={AccordionCss.accordionTitle}
                        // onClick={() => {
                        //     selected7
                        //         ? setSelected7(false)
                        //         : setSelected7(true);
                        // }}
                    >
                        {' '}
                        <p> 8. Работа с текстом и файлами </p>{' '}
                        {/* <p
                            className={`${AccordionCss.accordionPlus} ${
                                selected7
                                    ? AccordionCss.accordionPlusActive
                                    : ''
                            }  `}
                        >
                            +
                        </p>{' '} */}
                    </div>
                    <div></div>
                    <div
                        className={`${AccordionCss.accordionContent} ${
                            selected7 ? AccordionCss.accordionActive : ''
                        }  `}
                    >
                        {/* <ul>
                            <li>localStorage</li>
                            <li>sessionStorage</li>
                            <li>JSON</li>
                            <li>Событиe storage</li>
                        </ul> */}
                    </div>
                </div>
                <div
                    className={`${AccordionCss.accordionItem} ${
                        selected8 ? '' : AccordionCss.accordionItemBorder
                    } `}
                >
                    <div
                        className={AccordionCss.accordionTitle}
                        // onClick={() => {
                        //     selected8
                        //         ? setSelected8(false)
                        //         : setSelected8(true);
                        // }}
                    >
                        {' '}
                        <p> 9. Работа с функциями </p>{' '}
                        {/* <p
                            className={`${AccordionCss.accordionPlus} ${
                                selected8
                                    ? AccordionCss.accordionPlusActive
                                    : ''
                            }  `}
                        >
                            +
                        </p>{' '} */}
                    </div>
                    <div></div>
                    <div
                        className={`${AccordionCss.accordionContent} ${
                            selected8 ? AccordionCss.accordionActive : ''
                        }  `}
                    >
                        {/* <ul>
                            <li>Функции таймеры</li>
                            <li>Цикл событий</li>
                            <li> Знакомство с сетевыми запросами</li>
                        </ul> */}
                    </div>
                </div>
                <div
                    className={`${AccordionCss.accordionItem} ${
                        selected9 ? '' : AccordionCss.accordionItemBorder
                    } `}
                >
                    <div
                        className={AccordionCss.accordionTitle}
                        // onClick={() => {
                        //     selected9
                        //         ? setSelected9(false)
                        //         : setSelected9(true);
                        // }}
                    >
                        {' '}
                        <p> 10. Модули и пакеты в Python </p>{' '}
                        {/* <p
                            className={`${AccordionCss.accordionPlus} ${
                                selected9
                                    ? AccordionCss.accordionPlusActive
                                    : ''
                            }  `}
                        >
                            +
                        </p>{' '} */}
                    </div>
                    <div></div>
                    <div
                        className={`${AccordionCss.accordionContent} ${
                            selected9 ? AccordionCss.accordionActive : ''
                        }  `}
                    >
                        {/* <ul>
                            <li>Fetch API</li>
                            <li>Базовый синтаксис new Promise</li>
                        </ul> */}
                    </div>
                </div>
                <div
                    className={`${AccordionCss.accordionItem} ${
                        selected10 ? '' : AccordionCss.accordionItemBorder
                    } `}
                >
                    <div
                        className={AccordionCss.accordionTitle}
                        // onClick={() => {
                        //     selected10
                        //         ? setSelected10(false)
                        //         : setSelected10(true);
                        // }}
                    >
                        {' '}
                        <p> 11. ООП </p>{' '}
                        {/* <p
                            className={`${AccordionCss.accordionPlus} ${
                                selected10
                                    ? AccordionCss.accordionPlusActive
                                    : ''
                            }  `}
                        >
                            +
                        </p>{' '} */}
                    </div>
                    <div></div>
                    <div
                        className={`${AccordionCss.accordionContent} ${
                            selected10 ? AccordionCss.accordionActive : ''
                        }  `}
                    >
                        {/* <ul>
                            <li>Fetch API</li>
                            <li>Базовый синтаксис new Promise</li>
                        </ul> */}
                    </div>
                </div>
                <div
                    className={`${AccordionCss.accordionItem} ${
                        selected11 ? '' : AccordionCss.accordionItemBorder
                    } `}
                >
                    <div
                        className={AccordionCss.accordionTitle}
                        // onClick={() => {
                        //     selected11
                        //         ? setSelected11(false)
                        //         : setSelected11(true);
                        // }}
                    >
                        {' '}
                        <p> 12. Работа с исключениями </p>{' '}
                        {/* <p
                            className={`${AccordionCss.accordionPlus} ${
                                selected11
                                    ? AccordionCss.accordionPlusActive
                                    : ''
                            }  `}
                        >
                            +
                        </p>{' '} */}
                    </div>
                    <div></div>
                    <div
                        className={`${AccordionCss.accordionContent} ${
                            selected11 ? AccordionCss.accordionActive : ''
                        }  `}
                    >
                        {/* <ul>
                            <li>Fetch API</li>
                            <li>Базовый синтаксис new Promise</li>
                        </ul> */}
                    </div>
                </div>
                <div
                    className={`${AccordionCss.accordionItem} ${
                        selected12 ? '' : AccordionCss.accordionItemBorder
                    } `}
                >
                    <div
                        className={AccordionCss.accordionTitle}
                        // onClick={() => {
                        //     selected12
                        //         ? setSelected12(false)
                        //         : setSelected12(true);
                        // }}
                    >
                        {' '}
                        <p>13. Итераторы и генераторы </p>{' '}
                        {/* <p
                            className={`${AccordionCss.accordionPlus} ${
                                selected12
                                    ? AccordionCss.accordionPlusActive
                                    : ''
                            }  `}
                        >
                            +
                        </p>{' '} */}
                    </div>
                    <div></div>
                    <div
                        className={`${AccordionCss.accordionContent} ${
                            selected12 ? AccordionCss.accordionActive : ''
                        }  `}
                    >
                        {/* <ul>
                            <li>Fetch API</li>
                            <li>Базовый синтаксис new Promise</li>
                        </ul> */}
                    </div>
                </div>
                <div
                    className={`${AccordionCss.accordionItem} ${
                        selected13 ? '' : AccordionCss.accordionItemBorder
                    } `}
                >
                    <div
                        className={AccordionCss.accordionTitle}
                        // onClick={() => {
                        //     selected13
                        //         ? setSelected13(false)
                        //         : setSelected13(true);
                        // }}
                    >
                        {' '}
                        <p>
                            14. Стандартные и стороние библиотеки Python{' '}
                        </p>{' '}
                        {/* <p
                            className={`${AccordionCss.accordionPlus} ${
                                selected13
                                    ? AccordionCss.accordionPlusActive
                                    : ''
                            }  `}
                        >
                            +
                        </p>{' '} */}
                    </div>
                    <div></div>
                    <div
                        className={`${AccordionCss.accordionContent} ${
                            selected13 ? AccordionCss.accordionActive : ''
                        }  `}
                    >
                        {/* <ul>
                            <li>Fetch API</li>
                            <li>Базовый синтаксис new Promise</li>
                        </ul> */}
                    </div>
                </div>
                <div
                    className={`${AccordionCss.accordionItem} ${
                        selected14 ? '' : AccordionCss.accordionItemBorder
                    } `}
                >
                    <div
                        className={AccordionCss.accordionTitle}
                        // onClick={() => {
                        //     selected14
                        //         ? setSelected14(false)
                        //         : setSelected14(true);
                        // }}
                    >
                        {' '}
                        <p> 15. Работа с потоками </p>{' '}
                        {/* <p
                            className={`${AccordionCss.accordionPlus} ${
                                selected14
                                    ? AccordionCss.accordionPlusActive
                                    : ''
                            }  `}
                        >
                            +
                        </p>{' '} */}
                    </div>
                    <div></div>
                    <div
                        className={`${AccordionCss.accordionContent} ${
                            selected14 ? AccordionCss.accordionActive : ''
                        }  `}
                    >
                        {/* <ul>
                            <li>Fetch API</li>
                            <li>Базовый синтаксис new Promise</li>
                        </ul> */}
                    </div>
                </div>
                <div
                    className={`${AccordionCss.accordionItem} ${
                        selected15 ? '' : AccordionCss.accordionItemBorder
                    } `}
                >
                    <div
                        className={AccordionCss.accordionTitle}
                        // onClick={() => {
                        //     selected15
                        //         ? setSelected15(false)
                        //         : setSelected15(true);
                        // }}
                    >
                        {' '}
                        <p> 16. Интернет и сеть </p>{' '}
                        {/* <p
                            className={`${AccordionCss.accordionPlus} ${
                                selected15
                                    ? AccordionCss.accordionPlusActive
                                    : ''
                            }  `}
                        >
                            +
                        </p>{' '} */}
                    </div>
                    <div></div>
                    <div
                        className={`${AccordionCss.accordionContent} ${
                            selected15 ? AccordionCss.accordionActive : ''
                        }  `}
                    >
                        {/* <ul>
                            <li>Fetch API</li>
                            <li>Базовый синтаксис new Promise</li>
                        </ul> */}
                    </div>
                </div>
                <div
                    className={`${AccordionCss.accordionItem} ${
                        selected16 ? '' : AccordionCss.accordionItemBorder
                    } `}
                >
                    <div
                        className={AccordionCss.accordionTitle}
                        // onClick={() => {
                        //     selected16
                        //         ? setSelected16(false)
                        //         : setSelected16(true);
                        // }}
                    >
                        {' '}
                        <p> 17. Окружение Python </p>{' '}
                        {/* <p
                            className={`${AccordionCss.accordionPlus} ${
                                selected16
                                    ? AccordionCss.accordionPlusActive
                                    : ''
                            }  `}
                        >
                            +
                        </p>{' '} */}
                    </div>
                    <div></div>
                    <div
                        className={`${AccordionCss.accordionContent} ${
                            selected16 ? AccordionCss.accordionActive : ''
                        }  `}
                    >
                        {/* <ul>
                            <li>Fetch API</li>
                            <li>Базовый синтаксис new Promise</li>
                        </ul> */}
                    </div>
                </div>
                <div
                    className={`${AccordionCss.accordionItem} ${
                        selected17 ? '' : AccordionCss.accordionItemBorder
                    } `}
                >
                    <div
                        className={AccordionCss.accordionTitle}
                        // onClick={() => {
                        //     selected17
                        //         ? setSelected17(false)
                        //         : setSelected17(true);
                        // }}
                    >
                        {' '}
                        <p> 18. Базы данных </p>{' '}
                        {/* <p
                            className={`${AccordionCss.accordionPlus} ${
                                selected17
                                    ? AccordionCss.accordionPlusActive
                                    : ''
                            }  `}
                        >
                            +
                        </p>{' '} */}
                    </div>
                    <div></div>
                    <div
                        className={`${AccordionCss.accordionContent} ${
                            selected17 ? AccordionCss.accordionActive : ''
                        }  `}
                    >
                        {/* <ul>
                            <li>Fetch API</li>
                            <li>Базовый синтаксис new Promise</li>
                        </ul> */}
                    </div>
                </div>
                <div
                    className={`${AccordionCss.accordionItem} ${
                        selected18 ? '' : AccordionCss.accordionItemBorder
                    } `}
                >
                    <div
                        className={AccordionCss.accordionTitle}
                        // onClick={() => {
                        //     selected18
                        //         ? setSelected18(false)
                        //         : setSelected18(true);
                        // }}
                    >
                        {' '}
                        <p> 19. Продвинутый SQL </p>{' '}
                        {/* <p
                            className={`${AccordionCss.accordionPlus} ${
                                selected18
                                    ? AccordionCss.accordionPlusActive
                                    : ''
                            }  `}
                        >
                            +
                        </p>{' '} */}
                    </div>
                    <div></div>
                    <div
                        className={`${AccordionCss.accordionContent} ${
                            selected18 ? AccordionCss.accordionActive : ''
                        }  `}
                    >
                        {/* <ul>
                            <li>Fetch API</li>
                            <li>Базовый синтаксис new Promise</li>
                        </ul> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Accordion1;

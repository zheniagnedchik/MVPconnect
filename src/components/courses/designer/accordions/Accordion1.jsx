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

    return (
        <div className={AccordionCss.Accordion}>
            <div className={AccordionCss.titleWrapper}>
                <div className={AccordionCss.title}>
                    Модуль 1. “UX/UI базовый”
                </div>
                <div className={AccordionCss.subTitle}>
                    31 занятие (93 часов)
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
                        <p> 1. Основы UX/UI</p>{' '}
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
                            <li>Цели курса</li>
                            <li>Профессия Web и UX/UI дизайнера</li>
                            <li>Интерфейсы. Примеры интерфейсов</li>
                            <li>User Experience</li>
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
                        <p> 2. Подготовка к разработке веб-проекта</p>{' '}
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
                            <li> Виды сайтов</li>
                            <li>Продуктивный и сервисный дизайн</li>
                            <li>B2B, B2C, DDD, SaaS</li>
                            <li>
                                Структура разработки проекта, методологии Lean,
                                Agile
                            </li>
                            <li>
                                Создание и обработка брифа и технического
                                задания
                            </li>
                            <li>
                                Moodboard как инструмент по созданию креативной
                                концепции продукта
                            </li>
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
                        <p>3. Работа с аудиторией, виды пользователей</p>{' '}
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
                            <li> Анализ аудитории</li>
                            <li>Потребности аудитории</li>
                            <li>Петля ценностей</li>
                            <li>Воронка продаж</li>
                            <li>Виды пользователей</li>
                            <li>
                                Принципы восприятия и психология пользователей
                            </li>
                            <li>Портреты пользователей</li>
                            <li>Карты эмпатии</li>
                            <li>Пользовательские сценарии</li>
                            <li>Storytelling</li>
                            <li>Storyboarding</li>
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
                        <p> 4. Customer Journey Mapping</p>{' '}
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
                            <li>Analytical and anecdotal research</li>
                            <li>Типы данных</li>
                            <li>
                                Компоненты и типы Customer Journey Map (CJM)
                            </li>
                            <li> Алгоритм создания CJM</li>
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
                        <p>
                            5. Информационная архитектура, прототипирование
                        </p>{' '}
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
                            <li>Информационная архитектура. Виды и модели.</li>
                            <li>
                                Контент-стратегия. Определение требований к
                                контенту. Работа с контентом.
                            </li>
                            <li>Навигационный дизайн</li>
                            <li>Навигационные схемы и пути</li>
                            <li>Компоненты интерфейса</li>
                            <li>Wireframe</li>
                            <li>MVP, MVL</li>
                            <li>Тестирование прототипов</li>
                            <li> Axure</li>
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
                        <p> 6. Веб-дизайн</p>{' '}
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
                            <li> Типографика</li>
                            <li>Основы колористики</li>
                            <li>Акценты</li>
                            <li>Модульные сетки</li>
                            <li>Работа с изображениями и иллюстрациями</li>
                            <li> СТА</li>
                            <li>Элементы лендинга</li>
                            <li>Понятие "Продающий лендинг"</li>
                            <li>Элементы лендинга</li>
                            <li> Иконки</li>
                            <li>Стили в веб-дизайне</li>
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
                        <p> 7. UI</p>{' '}
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
                            <li>UI Kit как коллекция адаптивных компонентов</li>
                            <li>Удачные / неудачные сайты</li>
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
                        <p> 8. Дизайн-системы</p>{' '}
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
                            <li>Atomic Design</li>
                            <li>IBM visual language</li>
                            <li>Fluent Design (Microsoft)</li>
                            <li>Material Design (Google)</li>
                            <li>iOS (Apple)</li>
                            <li>Дизайн для Retina</li>
                            <li>Guideline</li>
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
                        <p> 9. Мобильные интерфейсы</p>{' '}
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
                            <li>
                                Особенности интерфейсов для Desktop и мобильных
                                устройств
                            </li>
                            <li>Контентная стратегия в мобильной разработке</li>
                            <li> Типографика в мобильных интерфейсах</li>
                            <li> UI паттерны</li>
                            <li>
                                Адаптивный дизайн, отзывчивый дизайн, концепция
                                Mobile First
                            </li>
                            <li> Гибридные и нативные мобильные приложения</li>
                            <li>
                                {' '}
                                Особенности дизайна мобильных систем Android и
                                iOS
                            </li>
                            <li> Тренды мобильного дизайна</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Accordion1;

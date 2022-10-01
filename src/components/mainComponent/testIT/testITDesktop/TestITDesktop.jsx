import TestItDesktopCss from './TestITDesktop.module.css';
import VectorRight from './img/VectorRight.svg';
import VectorLeft from './img/VectorLeft.svg';
import { useRef, useEffect } from 'react';
import slide1 from './img/characters/Back-end.jpg';
import slide1blue from './img/characters/Back-end_selected.jpg';
import slide2 from './img/characters/Front-end.jpg';
import slide2blue from './img/characters/Front-end_selected.jpg';
import slide3 from './img/characters/HR.jpg';
import slide3blue from './img/characters/HR_selected.jpg';
import slide4 from './img/characters/Marketer.jpg';
import slide4blue from './img/characters/Marketer_selected.jpg';
import slide5 from './img/characters/PM.jpg';
import slide5blue from './img/characters/PM_selected.jpg';
import slide6 from './img/characters/PrdM.jpg';
import slide6blue from './img/characters/PrdM_selected.jpg';
import slide7 from './img/characters/QA.jpg';
import slide7blue from './img/characters/QA_selected.jpg';
import slide8 from './img/characters/UXUI.jpg';
import slide8blue from './img/characters/UXUI_selected.jpg';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/skyblue';
import './splide.css';

const TestITDesktop = () => {
    const [changeImg, setChangeImg] = useState(null);
    const slider1 = useRef();
    const slider2 = useRef();

    useEffect(() => {
        slider1.current.sync(slider2.current.splide);
    }, [slider1, slider2]);

    return (
        <div className={TestItDesktopCss.TestIT}>
            <div className={TestItDesktopCss.titleWrapper}>
                <div className={TestItDesktopCss.title}>
                    Пройди тест, чтобы определиться с IT сферой
                </div>
                <div className={TestItDesktopCss.subTitle}>
                    {' '}
                    <p>
                        Большие проекты, смелые идеи и новые технологии станут
                        частью твоей работы!
                    </p>
                </div>
            </div>
            <Splide
                onActive={(splide, Slide) => {
                    setChangeImg(Slide.slideIndex);
                }}
                ref={(slider) => (slider1.current = slider)}
                hasTrack={false}
                options={{
                    type: 'loop',
                    gap: 70,
                    perPage: 5,
                    rewind: true,

                    rewindByDrag: true,
                    isNavigation: true,
                    pagination: false,
                    focus: 'center',

                    breakpoints: {
                        600: {
                            fixedWidth: '28.12vw',
                            fixedHeight: '30vh',
                        },
                    },
                    classes: {
                        page: `splide__pagination__page splide__pagination__customPage`,
                        arrows: 'splide__arrows your-class-arrows',
                        arrow: 'splide__arrow your-class-arrow',
                        prev: 'splide__arrow--prev splide__customArrowDesktop-prev',
                        next: 'splide__arrow--next splide__customArrowDesktop-next',
                    },
                }}
                aria-label="..."
            >
                {' '}
                <div className={TestItDesktopCss.splideWrapper}>
                    <SplideTrack>
                        <SplideSlide className="slider_transformTest">
                            <div
                                className={`${TestItDesktopCss.slider} sliderTest`}
                            >
                                <div
                                    className={`${TestItDesktopCss.sliderTitle} titleTest`}
                                >
                                    UX
                                </div>
                                <div className={TestItDesktopCss.sliderImg}>
                                    <img
                                        src={
                                            changeImg === 0
                                                ? slide8blue
                                                : slide8
                                        }
                                        alt=""
                                    />
                                </div>
                            </div>
                        </SplideSlide>
                        <SplideSlide className="slider_transformTest">
                            <div
                                className={`${TestItDesktopCss.slider} sliderTest`}
                            >
                                <div
                                    className={`${TestItDesktopCss.sliderTitle} titleTest`}
                                >
                                    PM
                                </div>
                                <div className={TestItDesktopCss.sliderImg}>
                                    <img
                                        src={
                                            changeImg === 1
                                                ? slide5blue
                                                : slide5
                                        }
                                        alt=""
                                    />
                                </div>
                            </div>
                        </SplideSlide>
                        <SplideSlide className="slider_transformTest">
                            <div
                                className={`${TestItDesktopCss.slider} sliderTest`}
                            >
                                <div
                                    className={`${TestItDesktopCss.sliderTitle} titleTest`}
                                >
                                    QA
                                </div>
                                <div className={TestItDesktopCss.sliderImg}>
                                    <img
                                        src={
                                            changeImg === 2
                                                ? slide7blue
                                                : slide7
                                        }
                                        alt=""
                                    />
                                </div>
                            </div>
                        </SplideSlide>
                        <SplideSlide className="slider_transformTest">
                            <div
                                className={`${TestItDesktopCss.slider} sliderTest`}
                            >
                                <div
                                    className={`${TestItDesktopCss.sliderTitle} titleTest`}
                                >
                                    HR
                                </div>
                                <div className={TestItDesktopCss.sliderImg}>
                                    <img
                                        src={
                                            changeImg === 3
                                                ? slide3blue
                                                : slide3
                                        }
                                        alt=""
                                    />
                                </div>
                            </div>
                        </SplideSlide>
                        <SplideSlide className="slider_transformTest">
                            <div
                                className={`${TestItDesktopCss.slider} sliderTest`}
                            >
                                <div
                                    className={`${TestItDesktopCss.sliderTitle} titleTest`}
                                >
                                    Frontend
                                </div>
                                <div className={TestItDesktopCss.sliderImg}>
                                    <img
                                        src={
                                            changeImg === 4
                                                ? slide2blue
                                                : slide2
                                        }
                                        alt=""
                                    />
                                </div>
                            </div>
                        </SplideSlide>
                        <SplideSlide className="slider_transformTest">
                            <div
                                className={`${TestItDesktopCss.slider} sliderTest`}
                            >
                                <div
                                    className={`${TestItDesktopCss.sliderTitle} titleTest`}
                                >
                                    Back-end
                                </div>
                                <div className={TestItDesktopCss.sliderImg}>
                                    <img
                                        src={
                                            changeImg === 5
                                                ? slide1blue
                                                : slide1
                                        }
                                        alt=""
                                    />
                                </div>
                            </div>
                        </SplideSlide>
                        <SplideSlide className="slider_transformTest">
                            <div
                                className={`${TestItDesktopCss.slider} sliderTest`}
                            >
                                <div
                                    className={`${TestItDesktopCss.sliderTitle} titleTest`}
                                >
                                    PrdM
                                </div>
                                <div className={TestItDesktopCss.sliderImg}>
                                    <img
                                        src={
                                            changeImg === 6
                                                ? slide6blue
                                                : slide6
                                        }
                                        alt=""
                                    />
                                </div>
                            </div>
                        </SplideSlide>
                        <SplideSlide className="slider_transformTest">
                            <div
                                className={`${TestItDesktopCss.slider} sliderTest`}
                            >
                                <div
                                    className={`${TestItDesktopCss.sliderTitle} titleTest`}
                                >
                                    Marketer
                                </div>
                                <div className={TestItDesktopCss.sliderImg}>
                                    <img
                                        src={
                                            changeImg === 7
                                                ? slide4blue
                                                : slide4
                                        }
                                        alt=""
                                    />
                                </div>
                            </div>
                        </SplideSlide>
                    </SplideTrack>
                </div>
                <div className="splide__arrows splide__arrows" />
                <button className="splide__arrow splide__arrow--prev splide__customArrowDesktop--prev">
                    <img src={VectorLeft} alt="" />
                </button>
                <button className="splide__arrow splide__arrow--next splide__customArrowDesktop--next">
                    <img src={VectorRight} alt="" />
                </button>
                <div className="splide__customPagination">
                    <ul className="splide__pagination "></ul>
                </div>
            </Splide>

            <div className={TestItDesktopCss.splideWrapper1}>
                <Splide
                    ref={(slider) => (slider2.current = slider)}
                    options={{
                        type: 'loop',
                        rewind: true,
                        pagination: false,
                        arrows: false,
                    }}
                >
                    <SplideSlide className={TestItDesktopCss.slide1}>
                        <div className={TestItDesktopCss.wrapper1}>
                            <div className={TestItDesktopCss.title1}>UX/UI</div>
                            <div className={TestItDesktopCss.subtitle1}>
                                Это специалист, работающий на грани сухого
                                анализа и ощущения прекрасного. Основная задача
                                - делать пользовательские интерфейсы для веб,
                                мобильных и десктоп приложений максимально
                                удобными и визуально привлекательными
                                (красивыми). Необходимо учитывать привычки
                                людей, их ожидания по расположению кнопок,
                                информации, знать и учитывать психологию цвета,
                                понимать принципы композиции и многое другое.
                            </div>
                        </div>
                    </SplideSlide>
                    <SplideSlide className={TestItDesktopCss.slide1}>
                        <div className={TestItDesktopCss.wrapper1}>
                            <div className={TestItDesktopCss.title1}>PM</div>
                            <div className={TestItDesktopCss.subtitle1}>
                                Это специалист по работе и с командой и с
                                продуктом и с заказчиком. В его обязанности
                                входит обеспечить разработку продукта в
                                согласованные сроки, в рамках выделенного
                                бюджета, с определенным функционалом. Работа
                                связана с аналитикой, планированием, постоянной
                                коммуникацией и решением проблем.
                            </div>
                        </div>
                    </SplideSlide>
                    <SplideSlide className={TestItDesktopCss.slide1}>
                        <div className={TestItDesktopCss.wrapper1}>
                            <div className={TestItDesktopCss.title1}>QA</div>
                            <div className={TestItDesktopCss.subtitle1}>
                                Это специалист по качеству программного
                                обеспечения. Именно от его усилий зависит будет
                                ли продукт работать именно так как это было
                                запланировано. От его решения зависит готов
                                продукт к передаче пользователям или необходимо
                                устранять появившиеся в ходе разработки ошибки.
                            </div>
                        </div>
                    </SplideSlide>
                    <SplideSlide className={TestItDesktopCss.slide1}>
                        <div className={TestItDesktopCss.wrapper1}>
                            <div className={TestItDesktopCss.title1}>HR</div>
                            <div className={TestItDesktopCss.subtitle1}>
                                Это специалист по обеспечению непрерывной работы
                                компании. Он ищет сотрудников, разрабатывает и
                                реализует мероприятия для удержание специалистов
                                в компании, повышение их эффективности. Часто HR
                                дополнительно совмещает в себе функции SMM и
                                креативного маркетолога, для того чтобы привлечь
                                наиболее ценных сотрудников в компанию.
                            </div>
                        </div>
                    </SplideSlide>
                    <SplideSlide className={TestItDesktopCss.slide1}>
                        <div className={TestItDesktopCss.wrapper1}>
                            <div className={TestItDesktopCss.title1}>
                                Front-end
                            </div>
                            <div className={TestItDesktopCss.subtitle1}>
                                Это сециалист, реализующий визуальную часть
                                проектов. Весь интерфейс, отображаемые на экране
                                устройства данные, это все делает Front-end
                                разработчик. Результат работы его кода виден
                                сразу, из-за чего профессия пользуется
                                неизменным спросом. Мы обучаем не просто
                                написанию кода для сайтов, но и для мобильных
                                приложений под iOs и Android, что позволяет
                                полностью закрывать потребности большинства
                                компаний.
                            </div>
                        </div>
                    </SplideSlide>
                    <SplideSlide className={TestItDesktopCss.slide1}>
                        <div className={TestItDesktopCss.wrapper1}>
                            <div className={TestItDesktopCss.title1}>
                                Back-end
                            </div>
                            <div className={TestItDesktopCss.subtitle1}>
                                Это специалист в области тайной магии - никто не
                                знает что он делает, пока не будет реализован
                                функционал. Результаты работы очень важны и
                                ценны, но, в большинстве случаев, незаметны для
                                пользователей. Именно Back-end разработчики
                                работают с базами данных, синхронизацией с
                                другими продуктами, получением данных из
                                стронних источников, блокчейн, искуственным
                                интеллектом и многими другими задачами.
                            </div>
                        </div>
                    </SplideSlide>
                    <SplideSlide className={TestItDesktopCss.slide1}>
                        <div className={TestItDesktopCss.wrapper1}>
                            <div className={TestItDesktopCss.title1}>
                                Product manager (PrdM)
                            </div>
                            <div className={TestItDesktopCss.subtitle1}>
                                Это специалист, сочетающий знания в бизнесе,
                                маркетинге, программировании и тестировании. Он
                                контролирует работу над новым продуктом от идеи
                                до успешной реализации, сопровождает и развивает
                                продукт уже после его успешного запуска. Продукт
                                менеджер общается с заказчиками, пользователями,
                                командой разработки и с инвесторами. Он может
                                работать как над своим продуктом (стартап), так
                                и возглавлять новое направление в сущестующих
                                компаниях.
                            </div>
                        </div>
                    </SplideSlide>
                    <SplideSlide className={TestItDesktopCss.slide1}>
                        <div className={TestItDesktopCss.wrapper1}>
                            <div className={TestItDesktopCss.title1}>
                                Marketer
                            </div>
                            <div className={TestItDesktopCss.subtitle1}>
                                Это специалист по привлечению клиентов в
                                компанию, формированию имиджа организации и
                                оповещению мира о важных событиях в фирме.
                                Современный маркетинг имеет множество
                                направлений: Таргетинг, SMM, SEO, Piar и т.д.
                                Маркетологи это очень ценные и всегда
                                востребованные специалисты.
                            </div>
                        </div>
                    </SplideSlide>
                </Splide>
            </div>
            <NavLink to="/TestITQuestions/Question1">
                <div className={`${TestItDesktopCss.sliderBtn} sliderBtn`}>
                    Пройти тест
                </div>
            </NavLink>
        </div>
    );
};

export default TestITDesktop;

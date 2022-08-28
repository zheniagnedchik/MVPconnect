import TestItDesktopCss from './TestITDesktop.module.css';
import VectorRight from './img/VectorRight.svg';
import VectorLeft from './img/VectorLeft.svg';
import { useRef, useEffect } from 'react';
import slide1 from './img/slide1.svg';
import slide2 from './img/slide2.svg';
import slide3 from './img/slide3.svg';
import slide4 from './img/slide4.svg';
import { NavLink } from 'react-router-dom';
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/skyblue';
import './splide.css';

const TestITDesktop = () => {
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
                                    <img src={slide1} alt="" />
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
                                    <img src={slide2} alt="" />
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
                                    <img src={slide3} alt="" />
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
                                    <img src={slide4} alt="" />
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
                                    UX
                                </div>
                                <div className={TestItDesktopCss.sliderImg}>
                                    <img src={slide1} alt="" />
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
                                    <img src={slide2} alt="" />
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
                                    <img src={slide3} alt="" />
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
                                    <img src={slide4} alt="" />
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
                            <div className={TestItDesktopCss.title1}>
                                Product manager (PrdM)
                            </div>
                            <div className={TestItDesktopCss.subtitle1}>
                                Это специалист, работающий на стыке бизнеса,
                                маркетинга и программирования. Он на всех этапах
                                контролирует работу над новым продуктом,
                                взаимодействует с инвесторами, заказчиками и
                                пользователями и продолжает развивать продукт
                                после окончания технической реализации. Продукт
                                менеджер может работать как над своим продуктом
                                (стартап), так и возглавлять новое направление в
                                сущестующих компаниях.
                            </div>
                        </div>
                    </SplideSlide>
                    <SplideSlide className={TestItDesktopCss.slide1}>
                        <div className={TestItDesktopCss.wrapper1}>
                            <div className={TestItDesktopCss.title1}>
                                Product manager (PrdM)
                            </div>
                            <div className={TestItDesktopCss.subtitle1}>
                                Это специалист, работающий на стыке бизнеса,
                                маркетинга и программирования. Он на всех этапах
                                контролирует работу над новым продуктом,
                                взаимодействует с инвесторами, заказчиками и
                                пользователями и продолжает развивать продукт
                                после окончания технической реализации. Продукт
                                менеджер может работать как над своим продуктом
                                (стартап), так и возглавлять новое направление в
                                сущестующих компаниях.
                            </div>
                        </div>
                    </SplideSlide>
                    <SplideSlide className={TestItDesktopCss.slide1}>
                        <div className={TestItDesktopCss.wrapper1}>
                            <div className={TestItDesktopCss.title1}>
                                Product manager (PrdM)
                            </div>
                            <div className={TestItDesktopCss.subtitle1}>
                                Это специалист, работающий на стыке бизнеса,
                                маркетинга и программирования. Он на всех этапах
                                контролирует работу над новым продуктом,
                                взаимодействует с инвесторами, заказчиками и
                                пользователями и продолжает развивать продукт
                                после окончания технической реализации. Продукт
                                менеджер может работать как над своим продуктом
                                (стартап), так и возглавлять новое направление в
                                сущестующих компаниях.
                            </div>
                        </div>
                    </SplideSlide>
                    <SplideSlide className={TestItDesktopCss.slide1}>
                        <div className={TestItDesktopCss.wrapper1}>
                            <div className={TestItDesktopCss.title1}>
                                Product manager (PrdM)
                            </div>
                            <div className={TestItDesktopCss.subtitle1}>
                                Это специалист, работающий на стыке бизнеса,
                                маркетинга и программирования. Он на всех этапах
                                контролирует работу над новым продуктом,
                                взаимодействует с инвесторами, заказчиками и
                                пользователями и продолжает развивать продукт
                                после окончания технической реализации. Продукт
                                менеджер может работать как над своим продуктом
                                (стартап), так и возглавлять новое направление в
                                сущестующих компаниях.
                            </div>
                        </div>
                    </SplideSlide>
                    <SplideSlide className={TestItDesktopCss.slide1}>
                        <div className={TestItDesktopCss.wrapper1}>
                            <div className={TestItDesktopCss.title1}>
                                Product manager (PrdM)
                            </div>
                            <div className={TestItDesktopCss.subtitle1}>
                                Это специалист, работающий на стыке бизнеса,
                                маркетинга и программирования. Он на всех этапах
                                контролирует работу над новым продуктом,
                                взаимодействует с инвесторами, заказчиками и
                                пользователями и продолжает развивать продукт
                                после окончания технической реализации. Продукт
                                менеджер может работать как над своим продуктом
                                (стартап), так и возглавлять новое направление в
                                сущестующих компаниях.
                            </div>
                        </div>
                    </SplideSlide>
                    <SplideSlide className={TestItDesktopCss.slide1}>
                        <div className={TestItDesktopCss.wrapper1}>
                            <div className={TestItDesktopCss.title1}>
                                Product manager (PrdM)
                            </div>
                            <div className={TestItDesktopCss.subtitle1}>
                                Это специалист, работающий на стыке бизнеса,
                                маркетинга и программирования. Он на всех этапах
                                контролирует работу над новым продуктом,
                                взаимодействует с инвесторами, заказчиками и
                                пользователями и продолжает развивать продукт
                                после окончания технической реализации. Продукт
                                менеджер может работать как над своим продуктом
                                (стартап), так и возглавлять новое направление в
                                сущестующих компаниях.
                            </div>
                        </div>
                    </SplideSlide>
                    <SplideSlide className={TestItDesktopCss.slide1}>
                        <div className={TestItDesktopCss.wrapper1}>
                            <div className={TestItDesktopCss.title1}>
                                Product manager (PrdM)
                            </div>
                            <div className={TestItDesktopCss.subtitle1}>
                                Это специалист, работающий на стыке бизнеса,
                                маркетинга и программирования. Он на всех этапах
                                контролирует работу над новым продуктом,
                                взаимодействует с инвесторами, заказчиками и
                                пользователями и продолжает развивать продукт
                                после окончания технической реализации. Продукт
                                менеджер может работать как над своим продуктом
                                (стартап), так и возглавлять новое направление в
                                сущестующих компаниях.
                            </div>
                        </div>
                    </SplideSlide>
                    <SplideSlide className={TestItDesktopCss.slide1}>
                        <div className={TestItDesktopCss.wrapper1}>
                            <div className={TestItDesktopCss.title1}>
                                Product manager (PrdM)
                            </div>
                            <div className={TestItDesktopCss.subtitle1}>
                                Это специалист, работающий на стыке бизнеса,
                                маркетинга и программирования. Он на всех этапах
                                контролирует работу над новым продуктом,
                                взаимодействует с инвесторами, заказчиками и
                                пользователями и продолжает развивать продукт
                                после окончания технической реализации. Продукт
                                менеджер может работать как над своим продуктом
                                (стартап), так и возглавлять новое направление в
                                сущестующих компаниях.
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

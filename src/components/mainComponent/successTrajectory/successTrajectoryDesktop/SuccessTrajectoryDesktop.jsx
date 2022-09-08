import SuccessTrajectoryCss from './SuccessTrajectoryDesktop.module.css';
import VectorRight from './img/VectorRight.svg';
import VectorLeft from './img/VectorLeft.svg';
import { useRef, useEffect } from 'react';
import slide1 from './img/slide1.svg';
import slide2 from './img/slide2.svg';
import slide3 from './img/slide3.svg';
import table from './img/table.svg';
import slide4 from './img/slide4.svg';
import { NavLink } from 'react-router-dom';
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/skyblue';
import './splide.css';

const SuccessTrajectoryDesktop = () => {
    const slider1 = useRef();
    const slider2 = useRef();

    useEffect(() => {
        slider1.current.sync(slider2.current.splide);
    }, [slider1, slider2]);

    return (
        <div className={SuccessTrajectoryCss.SuccessTrajectory}>
            <div className={SuccessTrajectoryCss.titleWrapper}>
                <div className={SuccessTrajectoryCss.title}>
                    Траектория вашего успеха
                </div>
                <div className={SuccessTrajectoryCss.subTitle}>
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
                    gap: 0,
                    perPage: 3,
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
                <div className={SuccessTrajectoryCss.splideWrapper}>
                    <SplideTrack className={SuccessTrajectoryCss.splideTrack}>
                        <SplideSlide className="slider_transformTest">
                            <div
                                className={`${SuccessTrajectoryCss.slider} sliderTest`}
                            >
                                <div
                                    className={`${SuccessTrajectoryCss.sliderTitle} titleTest`}
                                >
                                    UX
                                </div>
                                <div className={SuccessTrajectoryCss.sliderImg}>
                                    <img src={slide1} alt="" />
                                </div>
                            </div>
                        </SplideSlide>
                        <SplideSlide className="slider_transformTest">
                            <div
                                className={`${SuccessTrajectoryCss.slider} sliderTest`}
                            >
                                <div
                                    className={`${SuccessTrajectoryCss.sliderTitle} titleTest`}
                                >
                                    PM
                                </div>
                                <div className={SuccessTrajectoryCss.sliderImg}>
                                    <img src={slide2} alt="" />
                                </div>
                            </div>
                        </SplideSlide>
                        <SplideSlide className="slider_transformTest">
                            <div
                                className={`${SuccessTrajectoryCss.slider} sliderTest`}
                            >
                                <div
                                    className={`${SuccessTrajectoryCss.sliderTitle} titleTest`}
                                >
                                    QA
                                </div>
                                <div className={SuccessTrajectoryCss.sliderImg}>
                                    <img src={slide3} alt="" />
                                </div>
                            </div>
                        </SplideSlide>
                        <SplideSlide className="slider_transformTest">
                            <div
                                className={`${SuccessTrajectoryCss.slider} sliderTest`}
                            >
                                <div
                                    className={`${SuccessTrajectoryCss.sliderTitle} titleTest`}
                                >
                                    HR
                                </div>
                                <div className={SuccessTrajectoryCss.sliderImg}>
                                    <img src={slide4} alt="" />
                                </div>
                            </div>
                        </SplideSlide>
                        <SplideSlide className="slider_transformTest">
                            <div
                                className={`${SuccessTrajectoryCss.slider} sliderTest`}
                            >
                                <div
                                    className={`${SuccessTrajectoryCss.sliderTitle} titleTest`}
                                >
                                    UX
                                </div>
                                <div className={SuccessTrajectoryCss.sliderImg}>
                                    <img src={slide1} alt="" />
                                </div>
                            </div>
                        </SplideSlide>
                        <SplideSlide className="slider_transformTest">
                            <div
                                className={`${SuccessTrajectoryCss.slider} sliderTest`}
                            >
                                <div
                                    className={`${SuccessTrajectoryCss.sliderTitle} titleTest`}
                                >
                                    PM
                                </div>
                                <div className={SuccessTrajectoryCss.sliderImg}>
                                    <img src={slide2} alt="" />
                                </div>
                            </div>
                        </SplideSlide>
                        <SplideSlide className="slider_transformTest">
                            <div
                                className={`${SuccessTrajectoryCss.slider} sliderTest`}
                            >
                                <div
                                    className={`${SuccessTrajectoryCss.sliderTitle} titleTest`}
                                >
                                    QA
                                </div>
                                <div className={SuccessTrajectoryCss.sliderImg}>
                                    <img src={slide3} alt="" />
                                </div>
                            </div>
                        </SplideSlide>
                        <SplideSlide className="slider_transformTest">
                            <div
                                className={`${SuccessTrajectoryCss.slider} sliderTest`}
                            >
                                <div
                                    className={`${SuccessTrajectoryCss.sliderTitle} titleTest`}
                                >
                                    HR
                                </div>
                                <div className={SuccessTrajectoryCss.sliderImg}>
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
            </Splide>

            <div className={SuccessTrajectoryCss.splideWrapper1}>
                <Splide
                    ref={(slider) => (slider2.current = slider)}
                    options={{
                        type: 'loop',
                        rewind: true,
                        pagination: false,
                        arrows: false,
                    }}
                >
                    <SplideSlide className={SuccessTrajectoryCss.table}>
                        <img src={table} alt="" />
                    </SplideSlide>
                    <SplideSlide className={SuccessTrajectoryCss.table}>
                        <img src={table} alt="" />
                    </SplideSlide>
                    <SplideSlide className={SuccessTrajectoryCss.table}>
                        <img src={table} alt="" />
                    </SplideSlide>
                    <SplideSlide className={SuccessTrajectoryCss.table}>
                        <img src={table} alt="" />
                    </SplideSlide>
                    <SplideSlide className={SuccessTrajectoryCss.table}>
                        <img src={table} alt="" />
                    </SplideSlide>
                    <SplideSlide className={SuccessTrajectoryCss.table}>
                        <img src={table} alt="" />
                    </SplideSlide>
                    <SplideSlide className={SuccessTrajectoryCss.table}>
                        <img src={table} alt="" />
                    </SplideSlide>
                    <SplideSlide className={SuccessTrajectoryCss.table}>
                        <img src={table} alt="" />
                    </SplideSlide>
                    <SplideSlide className={SuccessTrajectoryCss.table}>
                        <img src={table} alt="" />
                    </SplideSlide>
                </Splide>
            </div>
        </div>
    );
};

export default SuccessTrajectoryDesktop;

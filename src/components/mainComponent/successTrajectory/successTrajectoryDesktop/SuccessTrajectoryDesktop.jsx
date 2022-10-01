import SuccessTrajectoryCss from './SuccessTrajectoryDesktop.module.css';
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
import {
    Chart,
    ArcElement,
    LineElement,
    BarElement,
    PointElement,
    BarController,
    BubbleController,
    DoughnutController,
    LineController,
    PieController,
    PolarAreaController,
    RadarController,
    ScatterController,
    CategoryScale,
    LinearScale,
    LogarithmicScale,
    RadialLinearScale,
    TimeScale,
    TimeSeriesScale,
    Decimation,
    Filler,
    Legend,
    Title,
    Tooltip,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/skyblue';
import './splide.css';

Chart.register(
    ArcElement,
    LineElement,
    BarElement,
    PointElement,
    BarController,
    BubbleController,
    DoughnutController,
    LineController,
    PieController,
    PolarAreaController,
    RadarController,
    ScatterController,
    CategoryScale,
    LinearScale,
    LogarithmicScale,
    RadialLinearScale,
    TimeScale,
    TimeSeriesScale,
    Decimation,
    Filler,
    Legend,
    Title,
    Tooltip
);

const SuccessTrajectoryDesktop = (props) => {
    const [changeImg, setChangeImg] = useState(null);
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
                onActive={(splide, Slide) => {
                    setChangeImg(Slide.slideIndex);
                }}
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
                                className={`${SuccessTrajectoryCss.slider} sliderTest`}
                            >
                                <div
                                    className={`${SuccessTrajectoryCss.sliderTitle} titleTest`}
                                >
                                    PM
                                </div>
                                <div className={SuccessTrajectoryCss.sliderImg}>
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
                                className={`${SuccessTrajectoryCss.slider} sliderTest`}
                            >
                                <div
                                    className={`${SuccessTrajectoryCss.sliderTitle} titleTest`}
                                >
                                    QA
                                </div>
                                <div className={SuccessTrajectoryCss.sliderImg}>
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
                                className={`${SuccessTrajectoryCss.slider} sliderTest`}
                            >
                                <div
                                    className={`${SuccessTrajectoryCss.sliderTitle} titleTest`}
                                >
                                    HR
                                </div>
                                <div className={SuccessTrajectoryCss.sliderImg}>
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
                                className={`${SuccessTrajectoryCss.slider} sliderTest`}
                            >
                                <div
                                    className={`${SuccessTrajectoryCss.sliderTitle} titleTest`}
                                >
                                    Frontend
                                </div>
                                <div className={SuccessTrajectoryCss.sliderImg}>
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
                                className={`${SuccessTrajectoryCss.slider} sliderTest`}
                            >
                                <div
                                    className={`${SuccessTrajectoryCss.sliderTitle} titleTest`}
                                >
                                    Back-end
                                </div>
                                <div className={SuccessTrajectoryCss.sliderImg}>
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
                                className={`${SuccessTrajectoryCss.slider} sliderTest`}
                            >
                                <div
                                    className={`${SuccessTrajectoryCss.sliderTitle} titleTest`}
                                >
                                    PrdM
                                </div>
                                <div className={SuccessTrajectoryCss.sliderImg}>
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
                                className={`${SuccessTrajectoryCss.slider} sliderTest`}
                            >
                                <div
                                    className={`${SuccessTrajectoryCss.sliderTitle} titleTest`}
                                >
                                    Marketer
                                </div>
                                <div className={SuccessTrajectoryCss.sliderImg}>
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
                    {props.Prices.successTrajectoryPrices.map((item, i) => (
                        <SplideSlide>
                            <div className={SuccessTrajectoryCss.chart}>
                                <div>
                                    <Bar
                                        data={{
                                            datasets: [
                                                {
                                                    data: [
                                                        item.data[0],
                                                        item.data[1],
                                                        item.data[2],
                                                    ],
                                                    backgroundColor: [
                                                        'white',
                                                        'yellow',
                                                        'green',
                                                    ],
                                                    barThickness: 25,
                                                },
                                            ],
                                            labels: [
                                                'Junior',
                                                'Middle',
                                                'Senior',
                                            ],
                                        }}
                                        options={{
                                            indexAxis: 'y',
                                            maintainAspectRatio: false,

                                            plugins: {
                                                legend: {
                                                    display: false,
                                                },
                                            },
                                            scales: {
                                                y: {
                                                    ticks: {
                                                        font: {
                                                            size: 22,
                                                        },
                                                    },
                                                },

                                                x: {
                                                    ticks: {
                                                        font: {
                                                            size: 12,
                                                        },
                                                    },
                                                },
                                            },
                                        }}
                                        height={300}
                                    />
                                </div>
                            </div>
                        </SplideSlide>
                    ))}
                </Splide>
            </div>
        </div>
    );
};

export default SuccessTrajectoryDesktop;

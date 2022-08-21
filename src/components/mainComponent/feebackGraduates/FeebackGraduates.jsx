import FeebackGraduatesCss from './FeebackGraduates.module.css';
import VectorRight from './img/VectorRight.svg';
import VectorLeft from './img/VectorLeft.svg';
import slider1 from './img/slider1.svg';

import Stars from './img/5star.svg';
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/skyblue';
import './splide.css';
import { Link } from 'react-router-dom';

const FeebackGraduates = () => {
    return (
        <div className={FeebackGraduatesCss.theoryCourse}>
            <div className={FeebackGraduatesCss.titleWrapper}>
                <div className={FeebackGraduatesCss.title}>
                    {' '}
                    Отзывы выпускников
                </div>
            </div>
            <Splide
                hasTrack={false}
                options={{
                    type: 'loop',
                    rewind: true,
                    rewindByDrag: true,

                    classes: {
                        page: `splide__pagination__page splide__pagination__customPage`,
                    },
                }}
                aria-label="..."
            >
                <div className={FeebackGraduatesCss.splideWrapper}>
                    <SplideTrack>
                        <SplideSlide>
                            {' '}
                            <div className={FeebackGraduatesCss.slider}>
                                <div className={FeebackGraduatesCss.sliderImg}>
                                    <img src={slider1} alt="" />
                                </div>
                                <div className={FeebackGraduatesCss.linedin}>
                                    <a href="https://www.linkedin.com/">in</a>
                                </div>
                                <div
                                    className={FeebackGraduatesCss.sliderTitle}
                                >
                                    Иванов Иван
                                </div>
                                <div
                                    className={
                                        FeebackGraduatesCss.sliderProfession
                                    }
                                >
                                    {' '}
                                    Java-разработчик
                                </div>
                                <div
                                    className={FeebackGraduatesCss.sliderStars}
                                >
                                    <img src={Stars} alt="" />
                                </div>
                                <div
                                    className={
                                        FeebackGraduatesCss.sliderSubTitle
                                    }
                                >
                                    С учётом сложившейся международной
                                    обстановки, существующая обстановки,
                                    существующая ...{' '}
                                    <p
                                        className={
                                            FeebackGraduatesCss.sliderMore
                                        }
                                    >
                                        Подробнее
                                    </p>
                                </div>
                            </div>
                            <br />
                        </SplideSlide>
                        <SplideSlide>
                            {' '}
                            <div className={FeebackGraduatesCss.slider}>
                                <div className={FeebackGraduatesCss.sliderImg}>
                                    <img src={slider1} alt="" />
                                </div>
                                <div className={FeebackGraduatesCss.linedin}>
                                    <a href="https://www.linkedin.com/">in</a>
                                </div>
                                <div
                                    className={FeebackGraduatesCss.sliderTitle}
                                >
                                    Иванов Иван
                                </div>
                                <div
                                    className={
                                        FeebackGraduatesCss.sliderProfession
                                    }
                                >
                                    {' '}
                                    Java-разработчик
                                </div>
                                <div
                                    className={FeebackGraduatesCss.sliderStars}
                                >
                                    <img src={Stars} alt="" />
                                </div>
                                <div
                                    className={
                                        FeebackGraduatesCss.sliderSubTitle
                                    }
                                >
                                    С учётом сложившейся международной
                                    обстановки, существующая обстановки,
                                    существующая ...{' '}
                                    <p
                                        className={
                                            FeebackGraduatesCss.sliderMore
                                        }
                                    >
                                        Подробнее
                                    </p>
                                </div>
                            </div>
                            <br />
                        </SplideSlide>
                        <SplideSlide>
                            {' '}
                            <div className={FeebackGraduatesCss.slider}>
                                <div className={FeebackGraduatesCss.sliderImg}>
                                    <img src={slider1} alt="" />
                                </div>
                                <div className={FeebackGraduatesCss.linedin}>
                                    <a href="https://www.linkedin.com/">in</a>
                                </div>
                                <div
                                    className={FeebackGraduatesCss.sliderTitle}
                                >
                                    Иванов Иван
                                </div>
                                <div
                                    className={
                                        FeebackGraduatesCss.sliderProfession
                                    }
                                >
                                    {' '}
                                    Java-разработчик
                                </div>
                                <div
                                    className={FeebackGraduatesCss.sliderStars}
                                >
                                    <img src={Stars} alt="" />
                                </div>
                                <div
                                    className={
                                        FeebackGraduatesCss.sliderSubTitle
                                    }
                                >
                                    С учётом сложившейся международной
                                    обстановки, существующая обстановки,
                                    существующая ...{' '}
                                    <p
                                        className={
                                            FeebackGraduatesCss.sliderMore
                                        }
                                    >
                                        Подробнее
                                    </p>
                                </div>
                            </div>
                            <br />
                        </SplideSlide>
                        <SplideSlide>
                            {' '}
                            <div className={FeebackGraduatesCss.slider}>
                                <div className={FeebackGraduatesCss.sliderImg}>
                                    <img src={slider1} alt="" />
                                </div>
                                <div className={FeebackGraduatesCss.linedin}>
                                    <a href="https://www.linkedin.com/">in</a>
                                </div>
                                <div
                                    className={FeebackGraduatesCss.sliderTitle}
                                >
                                    Иванов Иван
                                </div>
                                <div
                                    className={
                                        FeebackGraduatesCss.sliderProfession
                                    }
                                >
                                    {' '}
                                    Java-разработчик
                                </div>
                                <div
                                    className={FeebackGraduatesCss.sliderStars}
                                >
                                    <img src={Stars} alt="" />
                                </div>
                                <div
                                    className={
                                        FeebackGraduatesCss.sliderSubTitle
                                    }
                                >
                                    С учётом сложившейся международной
                                    обстановки, существующая обстановки,
                                    существующая ...{' '}
                                    <p
                                        className={
                                            FeebackGraduatesCss.sliderMore
                                        }
                                    >
                                        Подробнее
                                    </p>
                                </div>
                            </div>
                            <br />
                        </SplideSlide>
                        <SplideSlide>
                            {' '}
                            <div className={FeebackGraduatesCss.slider}>
                                <div className={FeebackGraduatesCss.sliderImg}>
                                    <img src={slider1} alt="" />
                                </div>
                                <div className={FeebackGraduatesCss.linedin}>
                                    <a href="https://www.linkedin.com/">in</a>
                                </div>
                                <div
                                    className={FeebackGraduatesCss.sliderTitle}
                                >
                                    Иванов Иван
                                </div>
                                <div
                                    className={
                                        FeebackGraduatesCss.sliderProfession
                                    }
                                >
                                    {' '}
                                    Java-разработчик
                                </div>
                                <div
                                    className={FeebackGraduatesCss.sliderStars}
                                >
                                    <img src={Stars} alt="" />
                                </div>
                                <div
                                    className={
                                        FeebackGraduatesCss.sliderSubTitle
                                    }
                                >
                                    С учётом сложившейся международной
                                    обстановки, существующая обстановки,
                                    существующая ...{' '}
                                    <p
                                        className={
                                            FeebackGraduatesCss.sliderMore
                                        }
                                    >
                                        Подробнее
                                    </p>
                                </div>
                            </div>
                            <br />
                        </SplideSlide>
                    </SplideTrack>

                    <div className="splide__arrows splide__arrows" />
                    <button className="splide__arrow splide__arrow--prev splide__customArrow--prev">
                        <img src={VectorLeft} alt="" />
                    </button>
                    <button className="splide__arrow splide__arrow--next splide__customArrow--next">
                        <img src={VectorRight} alt="" />
                    </button>
                </div>
                <div className="splide__customPagination">
                    <ul className="splide__pagination "></ul>
                </div>
            </Splide>
        </div>
    );
};

export default FeebackGraduates;

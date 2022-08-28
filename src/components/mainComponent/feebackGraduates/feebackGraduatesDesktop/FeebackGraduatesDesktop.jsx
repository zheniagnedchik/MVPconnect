import FeebackGraduatesDesktopCss from './FeebackGraduatesDesktop.module.css';
import VectorRight from './img/VectorRight.svg';
import VectorLeft from './img/VectorLeft.svg';
import slider1 from './img/slider1.svg';
import slider2 from './img/slider2.svg';
import slider3 from './img/slider3.svg';
import stars from './img/stars.svg';

import Stars from './img/5star.svg';
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/skyblue';
import './splide.css';
import { useState } from 'react';

const FeebackGraduatesDesktop = () => {
    const [selected1, setSelected1] = useState();
    const [selected2, setSelected2] = useState();
    const [selected3, setSelected3] = useState();
    const [selected4, setSelected4] = useState();
    return (
        <div className={FeebackGraduatesDesktopCss.FeebackGraduatesDesktop}>
            <div className={FeebackGraduatesDesktopCss.titleWrapper}>
                <div className={FeebackGraduatesDesktopCss.title}>
                    Отзывы выпускников
                </div>
                <div className={FeebackGraduatesDesktopCss.subTitle}>
                    {' '}
                    <p>
                        Большие проекты, смелые идеи и новые технологии станут
                        частью твоей работы!
                    </p>
                </div>
            </div>
            <Splide
                hasTrack={false}
                options={{
                    type: 'loop',
                    gap: 2,
                    perPage: 3,
                    rewind: true,
                    rewindByDrag: true,
                    isNavigation: true,
                    pagination: true,
                    focus: 'center',
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
                <div className={FeebackGraduatesDesktopCss.splideWrapper}>
                    <SplideTrack
                        className={FeebackGraduatesDesktopCss.splideTrack}
                    >
                        <SplideSlide className="slider_transform">
                            <div
                                className={`${FeebackGraduatesDesktopCss.slider} slider`}
                            >
                                {' '}
                                <div
                                    className={
                                        FeebackGraduatesDesktopCss.starsWrapper
                                    }
                                >
                                    <div
                                        className={
                                            FeebackGraduatesDesktopCss.number
                                        }
                                    >
                                        5
                                    </div>
                                    <div
                                        className={
                                            FeebackGraduatesDesktopCss.numberDescr
                                        }
                                    >
                                        Средняя оценка на основании 77 отзывов
                                        выпускников
                                    </div>
                                    <div
                                        className={
                                            FeebackGraduatesDesktopCss.stars
                                        }
                                    >
                                        <img src={stars} alt="" />
                                    </div>
                                </div>
                            </div>
                        </SplideSlide>
                        <SplideSlide className="slider_transform">
                            <div
                                className={`${FeebackGraduatesDesktopCss.slider} slider`}
                            >
                                <div
                                    className={`${
                                        FeebackGraduatesDesktopCss.slider1
                                    } ${
                                        selected4 === 4
                                            ? FeebackGraduatesDesktopCss.active
                                            : ''
                                    }
                                    `}
                                >
                                    <div
                                        className={
                                            FeebackGraduatesDesktopCss.sliderImg
                                        }
                                    >
                                        <img src={slider1} alt="" />
                                    </div>
                                    <div
                                        className={
                                            FeebackGraduatesDesktopCss.linedin
                                        }
                                    >
                                        <a href="https://www.linkedin.com/">
                                            in
                                        </a>
                                    </div>
                                    <div
                                        className={
                                            FeebackGraduatesDesktopCss.sliderTitle
                                        }
                                    >
                                        Иванов Иван
                                    </div>
                                    <div
                                        className={
                                            FeebackGraduatesDesktopCss.sliderProfession
                                        }
                                    >
                                        {' '}
                                        Java-разработчик
                                    </div>
                                    <div
                                        className={
                                            FeebackGraduatesDesktopCss.sliderStars
                                        }
                                    >
                                        <img src={Stars} alt="" />
                                    </div>

                                    <div
                                        className={`${
                                            FeebackGraduatesDesktopCss.sliderSubTitle
                                        } ${
                                            selected4 === 4
                                                ? FeebackGraduatesDesktopCss.active
                                                : ''
                                        }
                                    `}
                                    >
                                        С учётом сложившейся международной
                                        обстановки, существующая обстановки,
                                        существующая С учётом сложившейся
                                        международной обстан овки, существующая
                                        обстановки, сущес твующая С учётом
                                        сложившейся международной обстановки,
                                        существующая обстановки, существующая С
                                        учётом сложившейся международной
                                        обстановки, существующая обстановки,
                                        существующая С учётом сложившейся
                                        международной обстановки, существующая
                                        обстановки, существующая С учётом
                                        сложившейся международной обстановки,
                                        существующая обстановки, существующая
                                    </div>
                                    <div
                                        onClick={() => setSelected4(4)}
                                        className={`${
                                            FeebackGraduatesDesktopCss.sliderMore
                                        } ${
                                            selected4 === 4
                                                ? FeebackGraduatesDesktopCss.active
                                                : ''
                                        }
                                    `}
                                    >
                                        <div
                                            className={
                                                FeebackGraduatesDesktopCss.moreGradient
                                            }
                                        ></div>
                                        <div
                                            className={
                                                FeebackGraduatesDesktopCss.moreText
                                            }
                                        >
                                            Подробнее{' '}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <br />
                        </SplideSlide>
                        <SplideSlide className="slider_transform">
                            <div
                                className={`${FeebackGraduatesDesktopCss.slider} slider`}
                            >
                                <div
                                    className={`${
                                        FeebackGraduatesDesktopCss.slider1
                                    } ${
                                        selected1 === 1
                                            ? FeebackGraduatesDesktopCss.active
                                            : ''
                                    }
                                    `}
                                >
                                    <div
                                        className={
                                            FeebackGraduatesDesktopCss.sliderImg
                                        }
                                    >
                                        <img src={slider1} alt="" />
                                    </div>
                                    <div
                                        className={
                                            FeebackGraduatesDesktopCss.linedin
                                        }
                                    >
                                        <a href="https://www.linkedin.com/">
                                            in
                                        </a>
                                    </div>
                                    <div
                                        className={
                                            FeebackGraduatesDesktopCss.sliderTitle
                                        }
                                    >
                                        Иванов Иван
                                    </div>
                                    <div
                                        className={
                                            FeebackGraduatesDesktopCss.sliderProfession
                                        }
                                    >
                                        {' '}
                                        Java-разработчик
                                    </div>
                                    <div
                                        className={
                                            FeebackGraduatesDesktopCss.sliderStars
                                        }
                                    >
                                        <img src={Stars} alt="" />
                                    </div>

                                    <div
                                        className={`${
                                            FeebackGraduatesDesktopCss.sliderSubTitle
                                        } ${
                                            selected1 === 1
                                                ? FeebackGraduatesDesktopCss.active
                                                : ''
                                        }
                                    `}
                                    >
                                        С учётом сложившейся международной
                                        обстановки, существующая обстановки,
                                        существующая С учётом сложившейся
                                        международной обстан овки, существующая
                                        обстановки, сущес твующая С учётом
                                        сложившейся международной обстановки,
                                        существующая обстановки, существующая С
                                        учётом сложившейся международной
                                        обстановки, существующая обстановки,
                                        существующая С учётом сложившейся
                                        международной обстановки, существующая
                                        обстановки, существующая С учётом
                                        сложившейся международной обстановки,
                                        существующая обстановки, существующая
                                    </div>
                                    <div
                                        onClick={() => setSelected1(1)}
                                        className={`${
                                            FeebackGraduatesDesktopCss.sliderMore
                                        } ${
                                            selected1 === 1
                                                ? FeebackGraduatesDesktopCss.active
                                                : ''
                                        }
                                    `}
                                    >
                                        <div
                                            className={
                                                FeebackGraduatesDesktopCss.moreGradient
                                            }
                                        ></div>
                                        <div
                                            className={
                                                FeebackGraduatesDesktopCss.moreText
                                            }
                                        >
                                            Подробнее{' '}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <br />
                        </SplideSlide>
                        <SplideSlide className="slider_transform">
                            <div
                                className={`${FeebackGraduatesDesktopCss.slider} slider`}
                            >
                                <div
                                    className={`${
                                        FeebackGraduatesDesktopCss.slider1
                                    } ${
                                        selected2 === 2
                                            ? FeebackGraduatesDesktopCss.active
                                            : ''
                                    }
                                    `}
                                >
                                    <div
                                        className={
                                            FeebackGraduatesDesktopCss.sliderImg
                                        }
                                    >
                                        <img src={slider2} alt="" />
                                    </div>
                                    <div
                                        className={
                                            FeebackGraduatesDesktopCss.linedin
                                        }
                                    >
                                        <a href="https://www.linkedin.com/">
                                            in
                                        </a>
                                    </div>
                                    <div
                                        className={
                                            FeebackGraduatesDesktopCss.sliderTitle
                                        }
                                    >
                                        Загорская Ксения
                                    </div>
                                    <div
                                        className={
                                            FeebackGraduatesDesktopCss.sliderProfession
                                        }
                                    >
                                        {' '}
                                        UI/UX дизайнер
                                    </div>
                                    <div
                                        className={
                                            FeebackGraduatesDesktopCss.sliderStars
                                        }
                                    >
                                        <img src={Stars} alt="" />
                                    </div>

                                    <div
                                        className={`${
                                            FeebackGraduatesDesktopCss.sliderSubTitle
                                        } ${
                                            selected2 === 2
                                                ? FeebackGraduatesDesktopCss.active
                                                : ''
                                        }
                                    `}
                                    >
                                        С учётом сложившейся международной
                                        обстановки, существующая обстановки,
                                        существующая С учётом сложившейся
                                        международной обстан овки, существующая
                                        обстановки, сущес твующая С учётом
                                        сложившейся международной обстановки,
                                        существующая обстановки, существующая С
                                        учётом сложившейся международной
                                        обстановки, существующая обстановки,
                                        существующая С учётом сложившейся
                                        международной обстановки, существующая
                                        обстановки, существующая С учётом
                                        сложившейся международной обстановки,
                                        существующая обстановки, существующая
                                    </div>
                                    <div
                                        onClick={() => setSelected2(2)}
                                        className={`${
                                            FeebackGraduatesDesktopCss.sliderMore
                                        } ${
                                            selected2 === 2
                                                ? FeebackGraduatesDesktopCss.active
                                                : ''
                                        }
                                    `}
                                    >
                                        <div
                                            className={
                                                FeebackGraduatesDesktopCss.moreGradient
                                            }
                                        ></div>
                                        <div
                                            className={
                                                FeebackGraduatesDesktopCss.moreText
                                            }
                                        >
                                            Подробнее{' '}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <br />
                        </SplideSlide>
                        <SplideSlide className="slider_transform">
                            <div
                                className={`${FeebackGraduatesDesktopCss.slider} slider`}
                            >
                                <div
                                    className={`${
                                        FeebackGraduatesDesktopCss.slider1
                                    } ${
                                        selected3 === 3
                                            ? FeebackGraduatesDesktopCss.active
                                            : ''
                                    }
                                    `}
                                >
                                    <div
                                        className={
                                            FeebackGraduatesDesktopCss.sliderImg
                                        }
                                    >
                                        <img src={slider3} alt="" />
                                    </div>
                                    <div
                                        className={
                                            FeebackGraduatesDesktopCss.linedin
                                        }
                                    >
                                        <a href="https://www.linkedin.com/">
                                            in
                                        </a>
                                    </div>
                                    <div
                                        className={
                                            FeebackGraduatesDesktopCss.sliderTitle
                                        }
                                    >
                                        Иванова Вероника
                                    </div>
                                    <div
                                        className={
                                            FeebackGraduatesDesktopCss.sliderProfession
                                        }
                                    >
                                        {' '}
                                        UI/UX дизайнер
                                    </div>
                                    <div
                                        className={
                                            FeebackGraduatesDesktopCss.sliderStars
                                        }
                                    >
                                        <img src={Stars} alt="" />
                                    </div>

                                    <div
                                        className={`${
                                            FeebackGraduatesDesktopCss.sliderSubTitle
                                        } ${
                                            selected3 === 3
                                                ? FeebackGraduatesDesktopCss.active
                                                : ''
                                        }
                                    `}
                                    >
                                        С учётом сложившейся международной
                                        обстановки, существующая обстановки,
                                        существующая С учётом сложившейся
                                        международной обстан овки, существующая
                                        обстановки, сущес твующая С учётом
                                        сложившейся международной обстановки,
                                        существующая обстановки, существующая С
                                        учётом сложившейся международной
                                        обстановки, существующая обстановки,
                                        существующая С учётом сложившейся
                                        международной обстановки, существующая
                                        обстановки, существующая С учётом
                                        сложившейся международной обстановки,
                                        существующая обстановки, существующая
                                    </div>
                                    <div
                                        onClick={() => setSelected3(3)}
                                        className={`${
                                            FeebackGraduatesDesktopCss.sliderMore
                                        } ${
                                            selected3 === 3
                                                ? FeebackGraduatesDesktopCss.active
                                                : ''
                                        }
                                    `}
                                    >
                                        <div
                                            className={
                                                FeebackGraduatesDesktopCss.moreGradient
                                            }
                                        ></div>
                                        <div
                                            className={
                                                FeebackGraduatesDesktopCss.moreText
                                            }
                                        >
                                            Подробнее{' '}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <br />
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
        </div>
    );
};

export default FeebackGraduatesDesktop;

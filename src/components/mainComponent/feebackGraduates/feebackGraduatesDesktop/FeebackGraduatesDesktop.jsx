import FeebackGraduatesDesktopCss from './FeebackGraduatesDesktop.module.css';
import VectorRight from './img/VectorRight.svg';
import VectorLeft from './img/VectorLeft.svg';
import Stars from './img/1star.svg';
import Star1 from './img/Star1.svg';
import Star2 from './img/Star2.svg';
import Star3 from './img/Star3.svg';
import Star4 from './img/Star4.svg';
import Star5 from './img/Star5.svg';
import Star6 from './img/Star6.svg';
import Star7 from './img/Star7.svg';
import Star8 from './img/Star8.svg';
import Star9 from './img/Star9.svg';
import Stars2 from './img/Stars2.svg';
import Stars3 from './img/Stars3.svg';
import Stars4 from './img/Stars4.svg';
import Stars5 from './img/Stars5.svg';

import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/skyblue';

import { useState } from 'react';

const FeebackGraduatesDesktop = (props) => {
    const [selected, setSelected] = useState(null);

    const toggle = (i) => {
        if (selected == i) {
            return setSelected(null);
        }
        setSelected(i);
    };
    console.log(String(props.Stars.raiting).split('')[2]);
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
                                        {props.Stars.raiting}
                                    </div>
                                    <div
                                        className={
                                            FeebackGraduatesDesktopCss.numberDescr
                                        }
                                    >
                                        Средняя оценка на основании{' '}
                                        {props.Stars.allFeebackN} отзывов
                                        выпускников
                                    </div>
                                    <div
                                        className={
                                            FeebackGraduatesDesktopCss.stars
                                        }
                                    >
                                        <div>
                                            <img
                                                src={
                                                    props.Stars.raiting === 5
                                                        ? Stars5
                                                        : props.Stars.raiting >=
                                                          4
                                                        ? Stars4
                                                        : props.Stars.raiting >=
                                                          3
                                                        ? Stars3
                                                        : props.Stars.raiting >=
                                                          2
                                                        ? Stars2
                                                        : ''
                                                }
                                                alt=""
                                            />
                                        </div>
                                        <div
                                            className={
                                                FeebackGraduatesDesktopCss.star
                                            }
                                        >
                                            <img
                                                src={
                                                    String(
                                                        props.Stars.raiting
                                                    ).split('')[2] == 1
                                                        ? Star1
                                                        : String(
                                                              props.Stars
                                                                  .raiting
                                                          ).split('')[2] == 2
                                                        ? Star2
                                                        : String(
                                                              props.Stars
                                                                  .raiting
                                                          ).split('')[2] == 3
                                                        ? Star3
                                                        : String(
                                                              props.Stars
                                                                  .raiting
                                                          ).split('')[2] == 4
                                                        ? Star4
                                                        : String(
                                                              props.Stars
                                                                  .raiting
                                                          ).split('')[2] == 5
                                                        ? Star5
                                                        : String(
                                                              props.Stars
                                                                  .raiting
                                                          ).split('')[2] == 6
                                                        ? Star6
                                                        : String(
                                                              props.Stars
                                                                  .raiting
                                                          ).split('')[2] == 7
                                                        ? Star7
                                                        : String(
                                                              props.Stars
                                                                  .raiting
                                                          ).split('')[2] == 8
                                                        ? Star8
                                                        : String(
                                                              props.Stars
                                                                  .raiting
                                                          ).split('')[2] == 9
                                                        ? Star9
                                                        : ''
                                                }
                                                alt=""
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SplideSlide>
                        {props.Comments.map((item, i) => (
                            <SplideSlide className="slider_transform">
                                <div
                                    className={`${
                                        FeebackGraduatesDesktopCss.slider
                                    } slider ${
                                        selected == i
                                            ? FeebackGraduatesDesktopCss.active
                                            : ''
                                    }`}
                                >
                                    <div
                                        className={`${
                                            FeebackGraduatesDesktopCss.slider1
                                        } ${
                                            selected == i
                                                ? FeebackGraduatesDesktopCss.active
                                                : ''
                                        }
                                    `}
                                    >
                                        <div
                                            className={`${FeebackGraduatesDesktopCss.sliderImg} img`}
                                        >
                                            <img src={item.img} alt="" />
                                        </div>
                                        <div
                                            className={
                                                FeebackGraduatesDesktopCss.linedin
                                            }
                                        >
                                            <a
                                                target="_blank"
                                                href={item.linkedIn}
                                            >
                                                in
                                            </a>
                                        </div>
                                        <div
                                            className={
                                                FeebackGraduatesDesktopCss.sliderTitle
                                            }
                                        >
                                            {item.name}
                                        </div>
                                        <div
                                            className={
                                                FeebackGraduatesDesktopCss.sliderProfession
                                            }
                                        >
                                            {item.prof}
                                            <a
                                                target="_blank"
                                                href={item.linkWork}
                                            >
                                                {item.work}
                                            </a>
                                        </div>
                                        <div
                                            className={
                                                FeebackGraduatesDesktopCss.sliderStarsWrapper
                                            }
                                        >
                                            {' '}
                                            <div
                                                className={
                                                    FeebackGraduatesDesktopCss.sliderNumberStars
                                                }
                                            >
                                                {item.star}
                                            </div>
                                            <div
                                                className={
                                                    FeebackGraduatesDesktopCss.sliderStars
                                                }
                                            >
                                                <img src={Stars} alt="" />
                                            </div>
                                        </div>
                                        <div
                                            className={`${
                                                FeebackGraduatesDesktopCss.sliderSubTitle
                                            } ${
                                                selected == i
                                                    ? FeebackGraduatesDesktopCss.active
                                                    : ''
                                            }
                                    `}
                                        >
                                            {item.descr}
                                        </div>
                                        <div
                                            onClick={() => toggle(i)}
                                            className={`${
                                                FeebackGraduatesDesktopCss.sliderMore
                                            } ${
                                                selected == i
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
                        ))}
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

import FeebackGraduatesDesktopCss from './FeebackGraduatesDesktop.module.css';
import VectorRight from './img/VectorRight.svg';
import VectorLeft from './img/VectorLeft.svg';
import Stars from './img/1star.svg';

import halfStar from './img/halfStar.svg';
import oneStar from './img/1star.svg';
import oneHStar from './img/1halfStar.svg';
import twoStar from './img/2star.svg';
import twoHStar from './img/2halfStar.svg';
import threeStar from './img/3star.svg';
import threeHStar from './img/3halfStar.svg';
import fourStar from './img/4star.svg';
import fourHStar from './img/4halfStar.svg';
import fiveStar from './img/5stars.svg';
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
                                        {props.Stars.raiting <= 0.5
                                            ? 0.5
                                            : props.Stars.raiting <= 1
                                            ? 1
                                            : props.Stars.raiting <= 1.5
                                            ? 1.5
                                            : props.Stars.raiting <= 2
                                            ? 2
                                            : props.Stars.raiting <= 2.5
                                            ? 2.5
                                            : props.Stars.raiting <= 3
                                            ? 3
                                            : props.Stars.raiting <= 3.5
                                            ? 3.5
                                            : props.Stars.raiting <= 4
                                            ? 4
                                            : props.Stars.raiting <= 4.5
                                            ? 4.5
                                            : 5}
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
                                        <img
                                            src={
                                                props.Stars.raiting <= 0.5
                                                    ? halfStar
                                                    : props.Stars.raiting <= 1
                                                    ? oneStar
                                                    : props.Stars.raiting <= 1.5
                                                    ? oneHStar
                                                    : props.Stars.raiting <= 2
                                                    ? twoStar
                                                    : props.Stars.raiting <= 2.5
                                                    ? twoHStar
                                                    : props.Stars.raiting <= 3
                                                    ? threeStar
                                                    : props.Stars.raiting <= 3.5
                                                    ? threeHStar
                                                    : props.Stars.raiting <= 4
                                                    ? fourStar
                                                    : props.Stars.raiting <= 4.5
                                                    ? fourHStar
                                                    : fiveStar
                                            }
                                            alt=""
                                        />
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

import FeebackGraduatesCss from './FeebackGraduates.module.css';
import VectorRight from './img/VectorRight.svg';
import VectorLeft from './img/VectorLeft.svg';

import Stars from './img/1star.svg';
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/skyblue';
import './splide.css';

import { useState } from 'react';

const FeebackGraduates = (props) => {
    const [selected, setSelected] = useState(null);

    const toggle = (i) => {
        if (selected == i) {
            return setSelected(null);
        }
        setSelected(i);
    };

    return (
        <div className={FeebackGraduatesCss.FeebackGraduates}>
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
                    <SplideTrack className={FeebackGraduatesCss.SplideTrack}>
                        {props.Comments.map((item, i) => (
                            <SplideSlide>
                                {' '}
                                <div
                                    className={`${FeebackGraduatesCss.slider} ${
                                        selected == i
                                            ? FeebackGraduatesCss.active
                                            : ''
                                    }
                                    `}
                                >
                                    <div
                                        className={`${FeebackGraduatesCss.sliderImg} img`}
                                    >
                                        <img src={item.img} alt="" />
                                    </div>
                                    <div
                                        className={FeebackGraduatesCss.linedin}
                                    >
                                        <a target="_blank" href={item.linkedIn}>
                                            in
                                        </a>
                                    </div>
                                    <div
                                        className={
                                            FeebackGraduatesCss.sliderTitle
                                        }
                                    >
                                        {item.name}
                                    </div>
                                    <div
                                        className={
                                            FeebackGraduatesCss.sliderProfession
                                        }
                                    >
                                        {' '}
                                        {item.prof}
                                        <a target="_blank" href={item.linkWork}>
                                            {item.work}
                                        </a>
                                    </div>
                                    <div
                                        className={
                                            FeebackGraduatesCss.sliderStarsWrapper
                                        }
                                    >
                                        {' '}
                                        <div
                                            className={
                                                FeebackGraduatesCss.sliderNumberStars
                                            }
                                        >
                                            {item.star}
                                        </div>
                                        <div
                                            className={
                                                FeebackGraduatesCss.sliderStars
                                            }
                                        >
                                            <img src={Stars} alt="" />
                                        </div>
                                    </div>
                                    <div
                                        className={`${
                                            FeebackGraduatesCss.sliderSubTitle
                                        } ${
                                            selected == i
                                                ? FeebackGraduatesCss.active
                                                : ''
                                        }
                                    `}
                                    >
                                        {item.descr}
                                    </div>
                                    <div
                                        onClick={() => toggle(i)}
                                        className={`${
                                            FeebackGraduatesCss.sliderMore
                                        } ${
                                            selected == i
                                                ? FeebackGraduatesCss.active
                                                : ''
                                        }
                                    `}
                                    >
                                        <div
                                            className={
                                                FeebackGraduatesCss.moreGradient
                                            }
                                        ></div>
                                        <div
                                            className={
                                                FeebackGraduatesCss.moreText
                                            }
                                        >
                                            Подробнее{' '}
                                        </div>
                                    </div>
                                </div>
                                <br />
                            </SplideSlide>
                        ))}
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

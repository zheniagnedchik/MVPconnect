import TestITCss from './TestIT.module.css';
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
import '@splidejs/react-splide/css/skyblue';
import './splide.css';
import Slide1 from './img/slide1.svg';
import Slide2 from './img/slide2.svg';
import Slide3 from './img/slide3.svg';
import Slide4 from './img/slide4.svg';
import VectorRight from './img/VectorRight.svg';
import VectorLeft from './img/VectorLeft.svg';

import { NavLink } from 'react-router-dom';

const TestIT = () => {
    return (
        <div className={TestITCss.testIT}>
            <div className={TestITCss.titleWrapper}>
                <div className={TestITCss.title}>
                    Пройди тест, чтобы определиться с IT сферой
                </div>
                <div className={TestITCss.subTitle}>
                    Тест на профориентацию, где Вы раскроете ценные качества для
                    IT.
                </div>
            </div>
            <Splide
                hasTrack={false}
                options={{
                    type: 'loop',
                    pagination: false,
                    autoScroll: {
                        pauseOnHover: false,
                        pauseOnFocus: false,
                        rewind: false,
                        speed: 1,
                    },
                }}
                extensions={{ AutoScroll }}
                aria-label="..."
            >
                <div className={TestITCss.splideWrapper}>
                    <SplideTrack>
                        <SplideSlide>
                            {' '}
                            <div className={TestITCss.slider}>
                                <div className={TestITCss.sliderTitle}>
                                    UX/UI
                                </div>
                                <div className={TestITCss.sliderImg}>
                                    <img src={Slide1} alt="" />
                                </div>
                            </div>
                            <br />
                        </SplideSlide>
                        <SplideSlide>
                            {' '}
                            <div className={TestITCss.slider}>
                                <div className={TestITCss.sliderTitle}>
                                    PrdM
                                </div>
                                <div className={TestITCss.sliderImg}>
                                    <img src={Slide2} alt="" />
                                </div>
                            </div>
                        </SplideSlide>
                        <SplideSlide>
                            {' '}
                            <div className={TestITCss.slider}>
                                <div className={TestITCss.sliderTitle}>QA</div>
                                <div className={TestITCss.sliderImg}>
                                    <img src={Slide3} alt="" />
                                </div>
                            </div>
                        </SplideSlide>
                        <SplideSlide>
                            {' '}
                            <div className={TestITCss.slider}>
                                <div className={TestITCss.sliderTitle}>HR</div>
                                <div className={TestITCss.sliderImg}>
                                    <img src={Slide4} alt="" />
                                </div>
                            </div>
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
            </Splide>
            <NavLink to="/TestITQuestions/Question1">
                <div className={TestITCss.sliderBtn}>Пройти тест</div>
            </NavLink>
        </div>
    );
};

export default TestIT;

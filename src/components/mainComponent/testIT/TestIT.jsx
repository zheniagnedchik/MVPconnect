import TestITCss from './TestIT.module.css';
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
import '@splidejs/react-splide/css/skyblue';
import './splide.css';
import Slide1 from './img/characters/Front-end.jpg';
import Slide2 from './img/characters/UXUI.jpg';
import Slide3 from './img/characters/HR.jpg';
import Slide4 from './img/characters/PrdM.jpg';
import Slide5 from './img/characters/Marketer.jpg';
import Slide6 from './img/characters/Back-end.jpg';
import Slide7 from './img/characters/QA.jpg';
import Slide8 from './img/characters/PM.jpg';
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
                <div className={TestITCss.subTitle}>Кто ты в IT ?</div>
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
                    <SplideTrack className={TestITCss.splideItems}>
                        <SplideSlide className={TestITCss.splideItem}>
                            {' '}
                            <div className={TestITCss.slider}>
                                <div className={TestITCss.sliderTitle}>
                                    UX/UI
                                </div>
                                <NavLink to="/TestITQuestions/Question1">
                                    {' '}
                                    <div className={TestITCss.sliderImg}>
                                        <img src={Slide2} alt="" />
                                    </div>{' '}
                                </NavLink>
                            </div>
                            <br />
                        </SplideSlide>
                        <SplideSlide className={TestITCss.splideItem}>
                            {' '}
                            <div className={TestITCss.slider}>
                                <div className={TestITCss.sliderTitle}>
                                    Frontend
                                </div>
                                <NavLink to="/TestITQuestions/Question1">
                                    {' '}
                                    <div className={TestITCss.sliderImg}>
                                        <img src={Slide1} alt="" />
                                    </div>{' '}
                                </NavLink>
                            </div>
                        </SplideSlide>
                        <SplideSlide className={TestITCss.splideItem}>
                            {' '}
                            <div className={TestITCss.slider}>
                                <div className={TestITCss.sliderTitle}>HR</div>
                                <NavLink to="/TestITQuestions/Question1">
                                    {' '}
                                    <div className={TestITCss.sliderImg}>
                                        <img src={Slide3} alt="" />
                                    </div>
                                </NavLink>
                            </div>
                        </SplideSlide>
                        <SplideSlide className={TestITCss.splideItem}>
                            {' '}
                            <div className={TestITCss.slider}>
                                <div className={TestITCss.sliderTitle}>
                                    PrdM
                                </div>
                                <NavLink to="/TestITQuestions/Question1">
                                    {' '}
                                    <div className={TestITCss.sliderImg}>
                                        <img src={Slide4} alt="" />
                                    </div>
                                </NavLink>
                            </div>
                        </SplideSlide>
                        <SplideSlide className={TestITCss.splideItem}>
                            {' '}
                            <div className={TestITCss.slider}>
                                <div className={TestITCss.sliderTitle}>
                                    Marketer
                                </div>
                                <NavLink to="/TestITQuestions/Question1">
                                    {' '}
                                    <div className={TestITCss.sliderImg}>
                                        <img src={Slide5} alt="" />
                                    </div>
                                </NavLink>
                            </div>
                        </SplideSlide>
                        <SplideSlide className={TestITCss.splideItem}>
                            {' '}
                            <div className={TestITCss.slider}>
                                <div className={TestITCss.sliderTitle}>
                                    Back-end
                                </div>
                                <NavLink to="/TestITQuestions/Question1">
                                    {' '}
                                    <div className={TestITCss.sliderImg}>
                                        <img src={Slide6} alt="" />
                                    </div>
                                </NavLink>
                            </div>
                        </SplideSlide>
                        <SplideSlide className={TestITCss.splideItem}>
                            {' '}
                            <div className={TestITCss.slider}>
                                <div className={TestITCss.sliderTitle}>QA</div>
                                <NavLink to="/TestITQuestions/Question1">
                                    {' '}
                                    <div className={TestITCss.sliderImg}>
                                        <img src={Slide7} alt="" />
                                    </div>
                                </NavLink>
                            </div>
                        </SplideSlide>
                        <SplideSlide className={TestITCss.splideItem}>
                            {' '}
                            <div className={TestITCss.slider}>
                                <div className={TestITCss.sliderTitle}>PM</div>
                                <NavLink to="/TestITQuestions/Question1">
                                    {' '}
                                    <div className={TestITCss.sliderImg}>
                                        <img src={Slide8} alt="" />
                                    </div>
                                </NavLink>
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

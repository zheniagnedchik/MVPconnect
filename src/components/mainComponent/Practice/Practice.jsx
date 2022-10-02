import PracticeCss from './Practice.module.css';
import VectorRight from './img/VectorRight.svg';
import VectorLeft from './img/VectorLeft.svg';

import slider1 from './img/slider1.svg';
import slider2 from './img/slider2.svg';
import slider3 from './img/slider3.svg';
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/skyblue';
import './splide.css';
import { NavLink } from 'react-router-dom';

const Practice = () => {
    return (
        <div className={PracticeCss.Practice}>
            <div className={PracticeCss.titleWrapper}>
                <div className={PracticeCss.title}>
                    Boot camp (практический курс)
                </div>
                <div className={PracticeCss.subTitle}>
                    Присоединись к команде, возьми в работу настоящий проект.
                    Получи свой опыт!
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
                <div className={PracticeCss.splideWrapper}>
                    <SplideTrack>
                        <SplideSlide>
                            {' '}
                            <div className={PracticeCss.slider}>
                                <div className={PracticeCss.sliderImg}>
                                    <img src={slider1} alt="" />
                                </div>
                                <div className={PracticeCss.sliderTitle}>
                                    Frontend <br /> разработчик
                                </div>
                                <div className={PracticeCss.sliderSubTitle}>
                                    Упор на решение реальных задач и
                                    приобретение практических навыков.
                                </div>
                                <NavLink to="/Practice">
                                    {' '}
                                    <div className={PracticeCss.sliderBtn}>
                                        Подробнее о практике
                                    </div>
                                </NavLink>
                            </div>
                            <br />
                        </SplideSlide>
                        <SplideSlide>
                            {' '}
                            <div className={PracticeCss.slider}>
                                <div className={PracticeCss.sliderImg}>
                                    <img src={slider2} alt="" />
                                </div>
                                <div className={PracticeCss.sliderTitle}>
                                    Python <br /> разработчик
                                </div>
                                <div className={PracticeCss.sliderSubTitle}>
                                    Упор на решение реальных задач и
                                    приобретение практических навыков.
                                </div>
                                <NavLink to="/Practice">
                                    {' '}
                                    <div className={PracticeCss.sliderBtn}>
                                        Подробнее о практике
                                    </div>
                                </NavLink>
                            </div>
                            <br />
                        </SplideSlide>
                        <SplideSlide>
                            {' '}
                            <div className={PracticeCss.slider}>
                                <div className={PracticeCss.sliderImg}>
                                    <img src={slider3} alt="" />
                                </div>
                                <div className={PracticeCss.sliderTitle}>
                                    UX/UI <br /> дизайнер
                                </div>
                                <div className={PracticeCss.sliderSubTitle}>
                                    Упор на решение реальных задач и
                                    приобретение практических навыков.
                                </div>
                                <NavLink to="/Practice">
                                    {' '}
                                    <div className={PracticeCss.sliderBtn}>
                                        Подробнее о практике
                                    </div>
                                </NavLink>
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

export default Practice;

import PracticeCss from './Practice.module.css';
import VectorRight from './img/VectorRight.svg';
import VectorLeft from './img/VectorLeft.svg';
import slider1 from './img/slider1.svg';
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/skyblue';
import './splide.css';

const Practice = () => {
    return (
        <div className={PracticeCss.theoryCourse}>
            <div className={PracticeCss.titleWrapper}>
                <div className={PracticeCss.title}>Практика</div>
                <div className={PracticeCss.subTitle}>
                    Большие проекты, смелые идеи и новые технологии станут
                    частью твоей работы!
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
                                    Business Analysis
                                </div>
                                <div className={PracticeCss.sliderSubTitle}>
                                    Упор на решение реальных задач и
                                    приобретение практических навыков.
                                </div>
                                <div className={PracticeCss.sliderBtn}>
                                    Подробнее
                                </div>
                            </div>
                            <br />
                        </SplideSlide>
                        <SplideSlide>
                            {' '}
                            <div className={PracticeCss.slider}>
                                <div className={PracticeCss.sliderImg}>
                                    <img src={slider1} alt="" />
                                </div>
                                <div className={PracticeCss.sliderTitle}>
                                    Введение в програмирование
                                </div>
                                <div className={PracticeCss.sliderSubTitle}>
                                    Вы изучите распространенные языки
                                    програмирования.
                                </div>
                                <div className={PracticeCss.sliderBtn}>
                                    Подробнее
                                </div>
                            </div>
                        </SplideSlide>
                        <SplideSlide>
                            {' '}
                            <div className={PracticeCss.slider}>
                                <div className={PracticeCss.sliderImg}>
                                    <img src={slider1} alt="" />
                                </div>
                                <div className={PracticeCss.sliderTitle}>
                                    Введение в програмирование
                                </div>
                                <div className={PracticeCss.sliderSubTitle}>
                                    Вы изучите распространенные языки
                                    програмирования.
                                </div>
                                <div className={PracticeCss.sliderBtn}>
                                    Подробнее
                                </div>
                            </div>
                        </SplideSlide>
                        <SplideSlide>
                            {' '}
                            <div className={PracticeCss.slider}>
                                <div className={PracticeCss.sliderImg}>
                                    <img src={slider1} alt="" />
                                </div>
                                <div className={PracticeCss.sliderTitle}>
                                    Введение в програмирование
                                </div>
                                <div className={PracticeCss.sliderSubTitle}>
                                    Вы изучите распространенные языки
                                    програмирования.
                                </div>
                                <div className={PracticeCss.sliderBtn}>
                                    Подробнее
                                </div>
                            </div>
                        </SplideSlide>
                        <SplideSlide>
                            {' '}
                            <div className={PracticeCss.slider}>
                                <div className={PracticeCss.sliderImg}>
                                    <img src={slider1} alt="" />
                                </div>
                                <div className={PracticeCss.sliderTitle}>
                                    Введение в програмирование
                                </div>
                                <div className={PracticeCss.sliderSubTitle}>
                                    Вы изучите распространенные языки
                                    програмирования.
                                </div>
                                <div className={PracticeCss.sliderBtn}>
                                    Подробнее
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
                <div className="splide__customPagination">
                    <ul className="splide__pagination "></ul>
                </div>
            </Splide>
        </div>
    );
};

export default Practice;

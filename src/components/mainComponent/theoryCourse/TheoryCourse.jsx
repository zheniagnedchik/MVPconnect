import TheoryCourseCss from './TheoryCourse.module.css';
import VectorRight from './img/VectorRight.svg';
import VectorLeft from './img/VectorLeft.svg';
import slider1 from './img/slider1.svg';
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/skyblue';
import './splide.css';

const TheoryCourse = () => {
    return (
        <div className={TheoryCourseCss.theoryCourse}>
            <div className={TheoryCourseCss.titleWrapper}>
                <div className={TheoryCourseCss.title}>Теоретические курсы</div>
                <div className={TheoryCourseCss.subTitle}>
                    Большие проекты, смелые идеи и новые технологии станут
                    частью твоей работы!
                </div>
            </div>
            <Splide
                hasTrack={false}
                options={{
                    rewind: true,
                    rewindByDrag: true,
                    classes: {
                        page: `splide__pagination__page splide__pagination__customPage`,
                    },
                }}
                aria-label="..."
            >
                <div className={TheoryCourseCss.splideWrapper}>
                    <SplideTrack>
                        <SplideSlide>
                            {' '}
                            <div className={TheoryCourseCss.slider}>
                                <div className={TheoryCourseCss.sliderImg}>
                                    <img src={slider1} alt="" />
                                </div>
                                <div className={TheoryCourseCss.sliderTitle}>
                                    Введение в програмирование
                                </div>
                                <div className={TheoryCourseCss.sliderSubTitle}>
                                    Вы изучите распространенные языки
                                    програмирования.
                                </div>
                                <div className={TheoryCourseCss.sliderBtn}>
                                    Подробнее
                                </div>
                            </div>
                            <br />
                        </SplideSlide>
                        <SplideSlide>
                            {' '}
                            <div className={TheoryCourseCss.slider}>
                                <div className={TheoryCourseCss.sliderImg}>
                                    <img src={slider1} alt="" />
                                </div>
                                <div className={TheoryCourseCss.sliderTitle}>
                                    Введение в програмирование
                                </div>
                                <div className={TheoryCourseCss.sliderSubTitle}>
                                    Вы изучите распространенные языки
                                    програмирования.
                                </div>
                                <div className={TheoryCourseCss.sliderBtn}>
                                    Подробнее
                                </div>
                            </div>
                        </SplideSlide>
                        <SplideSlide>
                            {' '}
                            <div className={TheoryCourseCss.slider}>
                                <div className={TheoryCourseCss.sliderImg}>
                                    <img src={slider1} alt="" />
                                </div>
                                <div className={TheoryCourseCss.sliderTitle}>
                                    Введение в програмирование
                                </div>
                                <div className={TheoryCourseCss.sliderSubTitle}>
                                    Вы изучите распространенные языки
                                    програмирования.
                                </div>
                                <div className={TheoryCourseCss.sliderBtn}>
                                    Подробнее
                                </div>
                            </div>
                        </SplideSlide>
                        <SplideSlide>
                            {' '}
                            <div className={TheoryCourseCss.slider}>
                                <div className={TheoryCourseCss.sliderImg}>
                                    <img src={slider1} alt="" />
                                </div>
                                <div className={TheoryCourseCss.sliderTitle}>
                                    Введение в програмирование
                                </div>
                                <div className={TheoryCourseCss.sliderSubTitle}>
                                    Вы изучите распространенные языки
                                    програмирования.
                                </div>
                                <div className={TheoryCourseCss.sliderBtn}>
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
                    <ul class="splide__pagination "></ul>
                </div>
            </Splide>
        </div>
    );
};

export default TheoryCourse;

import TheoryCourseCss from './TheoryCourse.module.css';
import VectorRight from './img/VectorRight.svg';
import VectorLeft from './img/VectorLeft.svg';
import slider1 from './img/slider1.svg';
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/skyblue';
import './splide.css';
import { NavLink } from 'react-router-dom';
const TheoryCourse = () => {
    return (
        <div className={TheoryCourseCss.theoryCourse}>
            <div className={TheoryCourseCss.titleWrapper}>
                <div className={TheoryCourseCss.title}>Теоретические курсы</div>
                <div className={TheoryCourseCss.subTitle}>
                    Мы готовим IT специалистов различных направлений. Что ближе
                    тебе?
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
                <div className={TheoryCourseCss.splideWrapper}>
                    <SplideTrack className={TheoryCourseCss.spliderTrack}>
                        <SplideSlide>
                            {' '}
                            <div className={TheoryCourseCss.slider}>
                                <div className={TheoryCourseCss.sliderImg}>
                                    <img src={slider1} alt="" />
                                </div>
                                <div className={TheoryCourseCss.sliderTitle}>
                                    Курс Frontend разработчик
                                </div>
                                <div className={TheoryCourseCss.sliderSubTitle}>
                                    От нулевого уровня до специалиста
                                </div>
                                <NavLink to="/Frontend">
                                    {' '}
                                    <div className={TheoryCourseCss.sliderBtn}>
                                        Подробнее о курсе
                                    </div>
                                </NavLink>
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
                                    Курс UX/UI <br /> дизайнер
                                </div>
                                <div className={TheoryCourseCss.sliderSubTitle}>
                                    От нулевого уровня до специалиста
                                </div>
                                <NavLink to="/Designer">
                                    {' '}
                                    <div className={TheoryCourseCss.sliderBtn}>
                                        Подробнее о курсе
                                    </div>
                                </NavLink>
                            </div>
                        </SplideSlide>
                        <SplideSlide>
                            {' '}
                            <div className={TheoryCourseCss.slider}>
                                <div className={TheoryCourseCss.sliderImg}>
                                    <img src={slider1} alt="" />
                                </div>
                                <div className={TheoryCourseCss.sliderTitle}>
                                    Курс Python разработчик
                                </div>
                                <div className={TheoryCourseCss.sliderSubTitle}>
                                    От нулевого уровня до специалиста
                                </div>
                                <NavLink to="/Python">
                                    {' '}
                                    <div className={TheoryCourseCss.sliderBtn}>
                                        Подробнее о курсе
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
                <div className="splide__customPagination">
                    <ul className="splide__pagination "></ul>
                </div>
            </Splide>
        </div>
    );
};

export default TheoryCourse;

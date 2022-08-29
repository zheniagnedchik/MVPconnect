import PracticeDesktopCss from './PracticeDesktop.module.css';
import VectorRight from './img/VectorRight.svg';
import VectorLeft from './img/VectorLeft.svg';
import slider1 from './img/slider1.svg';
import slider2 from './img/slider2.svg';
import slider3 from './img/slider3.svg';
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/skyblue';
import './splide.css';

const PracticeDesktop = () => {
    return (
        <div className={PracticeDesktopCss.PracticeDesktop}>
            <div className={PracticeDesktopCss.titleWrapper}>
                <div className={PracticeDesktopCss.title}>Практика</div>
                <div className={PracticeDesktopCss.subTitle}>
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
                <div className={PracticeDesktopCss.splideWrapper}>
                    <SplideTrack>
                        <SplideSlide className="slider_transform">
                            <div
                                className={`${PracticeDesktopCss.slider} slider`}
                            >
                                <div className={PracticeDesktopCss.sliderImg}>
                                    <img src={slider1} alt="" />
                                </div>
                                <div className={PracticeDesktopCss.sliderTitle}>
                                    Ключевые аспекты разработки на Python
                                </div>
                                <div
                                    className={
                                        PracticeDesktopCss.sliderSubTitle
                                    }
                                >
                                    Вы изучите распространенные языки
                                    програмирования.Вы изучите распространенные
                                    языки програмирования.Вы изучите
                                    распространенные.
                                </div>
                                <div
                                    className={`${PracticeDesktopCss.sliderBtn} sliderBtn`}
                                >
                                    Подробнее
                                </div>
                            </div>
                            <br />
                        </SplideSlide>
                        <SplideSlide className="slider_transform">
                            <div
                                className={`${PracticeDesktopCss.slider} slider`}
                            >
                                <div className={PracticeDesktopCss.sliderImg}>
                                    <img src={slider2} alt="" />
                                </div>
                                <div className={PracticeDesktopCss.sliderTitle}>
                                    Ключевые аспекты разработки на Python
                                </div>
                                <div
                                    className={
                                        PracticeDesktopCss.sliderSubTitle
                                    }
                                >
                                    Вы изучите распространенные языки
                                    програмирования.Вы изучите распространенные
                                    языки програмирования.Вы изучите
                                    распространенные.
                                </div>
                                <div
                                    className={`${PracticeDesktopCss.sliderBtn} sliderBtn`}
                                >
                                    Подробнее
                                </div>
                            </div>
                            <br />
                        </SplideSlide>
                        <SplideSlide className="slider_transform">
                            <div
                                className={`${PracticeDesktopCss.slider} slider`}
                            >
                                <div className={PracticeDesktopCss.sliderImg}>
                                    <img src={slider3} alt="" />
                                </div>
                                <div className={PracticeDesktopCss.sliderTitle}>
                                    Ключевые аспекты разработки на Python
                                </div>
                                <div
                                    className={
                                        PracticeDesktopCss.sliderSubTitle
                                    }
                                >
                                    Вы изучите распространенные языки
                                    програмирования.Вы изучите распространенные
                                    языки програмирования.Вы изучите
                                    распространенные.
                                </div>
                                <div
                                    className={`${PracticeDesktopCss.sliderBtn} sliderBtn`}
                                >
                                    Подробнее
                                </div>
                            </div>
                            <br />
                        </SplideSlide>
                        <SplideSlide className="slider_transform">
                            <div
                                className={`${PracticeDesktopCss.slider} slider`}
                            >
                                <div className={PracticeDesktopCss.sliderImg}>
                                    <img src={slider1} alt="" />
                                </div>
                                <div className={PracticeDesktopCss.sliderTitle}>
                                    Ключевые аспекты разработки на Python
                                </div>
                                <div
                                    className={
                                        PracticeDesktopCss.sliderSubTitle
                                    }
                                >
                                    Вы изучите распространенные языки
                                    програмирования.Вы изучите распространенные
                                    языки програмирования.Вы изучите
                                    распространенные.
                                </div>
                                <div
                                    className={`${PracticeDesktopCss.sliderBtn} sliderBtn`}
                                >
                                    Подробнее
                                </div>
                            </div>
                            <br />
                        </SplideSlide>
                        <SplideSlide className="slider_transform">
                            <div
                                className={`${PracticeDesktopCss.slider} slider`}
                            >
                                <div className={PracticeDesktopCss.sliderImg}>
                                    <img src={slider2} alt="" />
                                </div>
                                <div className={PracticeDesktopCss.sliderTitle}>
                                    Ключевые аспекты разработки на Python
                                </div>
                                <div
                                    className={
                                        PracticeDesktopCss.sliderSubTitle
                                    }
                                >
                                    Вы изучите распространенные языки
                                    програмирования.Вы изучите распространенные
                                    языки програмирования.Вы изучите
                                    распространенные.
                                </div>
                                <div
                                    className={`${PracticeDesktopCss.sliderBtn} sliderBtn`}
                                >
                                    Подробнее
                                </div>
                            </div>
                            <br />
                        </SplideSlide>
                        <SplideSlide className="slider_transform">
                            <div
                                className={`${PracticeDesktopCss.slider} slider`}
                            >
                                <div className={PracticeDesktopCss.sliderImg}>
                                    <img src={slider3} alt="" />
                                </div>
                                <div className={PracticeDesktopCss.sliderTitle}>
                                    Ключевые аспекты разработки на Python
                                </div>
                                <div
                                    className={
                                        PracticeDesktopCss.sliderSubTitle
                                    }
                                >
                                    Вы изучите распространенные языки
                                    програмирования.Вы изучите распространенные
                                    языки програмирования.Вы изучите
                                    распространенные.
                                </div>
                                <div
                                    className={`${PracticeDesktopCss.sliderBtn} sliderBtn`}
                                >
                                    Подробнее
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

export default PracticeDesktop;

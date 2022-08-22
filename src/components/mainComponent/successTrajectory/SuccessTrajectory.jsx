import SuccessTrajectoryCss from './SuccessTrajectory.module.css';
import VectorRight from './img/VectorRight.svg';
import VectorLeft from './img/VectorLeft.svg';
import slider1 from './img/slider1.svg';
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/skyblue';
import './splide.css';

const SuccessTrajectory = () => {
    return (
        <div className={SuccessTrajectoryCss.theoryCourse}>
            <div className={SuccessTrajectoryCss.titleWrapper}>
                <div className={SuccessTrajectoryCss.title}>Практика</div>
                <div className={SuccessTrajectoryCss.subTitle}>
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
                <div className={SuccessTrajectoryCss.splideWrapper}>
                    <SplideTrack>
                        <SplideSlide>
                            {' '}
                            <div className={SuccessTrajectoryCss.slider}>
                                <div className={SuccessTrajectoryCss.sliderImg}>
                                    <img src={slider1} alt="" />
                                </div>
                                <div
                                    className={SuccessTrajectoryCss.sliderTitle}
                                >
                                    Business Analysis
                                </div>
                                <div
                                    className={
                                        SuccessTrajectoryCss.sliderSubTitle
                                    }
                                >
                                    Упор на решение реальных задач и
                                    приобретение практических навыков.
                                </div>
                                <div className={SuccessTrajectoryCss.sliderBtn}>
                                    Подробнее
                                </div>
                            </div>
                            <br />
                        </SplideSlide>
                        <SplideSlide>
                            {' '}
                            <div className={SuccessTrajectoryCss.slider}>
                                <div className={SuccessTrajectoryCss.sliderImg}>
                                    <img src={slider1} alt="" />
                                </div>
                                <div
                                    className={SuccessTrajectoryCss.sliderTitle}
                                >
                                    Business Analysis
                                </div>
                                <div
                                    className={
                                        SuccessTrajectoryCss.sliderSubTitle
                                    }
                                >
                                    Упор на решение реальных задач и
                                    приобретение практических навыков.
                                </div>
                                <div className={SuccessTrajectoryCss.sliderBtn}>
                                    Подробнее
                                </div>
                            </div>
                            <br />
                        </SplideSlide>
                        <SplideSlide>
                            {' '}
                            <div className={SuccessTrajectoryCss.slider}>
                                <div className={SuccessTrajectoryCss.sliderImg}>
                                    <img src={slider1} alt="" />
                                </div>
                                <div
                                    className={SuccessTrajectoryCss.sliderTitle}
                                >
                                    Business Analysis
                                </div>
                                <div
                                    className={
                                        SuccessTrajectoryCss.sliderSubTitle
                                    }
                                >
                                    Упор на решение реальных задач и
                                    приобретение практических навыков.
                                </div>
                                <div className={SuccessTrajectoryCss.sliderBtn}>
                                    Подробнее
                                </div>
                            </div>
                            <br />
                        </SplideSlide>
                        <SplideSlide>
                            {' '}
                            <div className={SuccessTrajectoryCss.slider}>
                                <div className={SuccessTrajectoryCss.sliderImg}>
                                    <img src={slider1} alt="" />
                                </div>
                                <div
                                    className={SuccessTrajectoryCss.sliderTitle}
                                >
                                    Business Analysis
                                </div>
                                <div
                                    className={
                                        SuccessTrajectoryCss.sliderSubTitle
                                    }
                                >
                                    Упор на решение реальных задач и
                                    приобретение практических навыков.
                                </div>
                                <div className={SuccessTrajectoryCss.sliderBtn}>
                                    Подробнее
                                </div>
                            </div>
                            <br />
                        </SplideSlide>
                        <SplideSlide>
                            {' '}
                            <div className={SuccessTrajectoryCss.slider}>
                                <div className={SuccessTrajectoryCss.sliderImg}>
                                    <img src={slider1} alt="" />
                                </div>
                                <div
                                    className={SuccessTrajectoryCss.sliderTitle}
                                >
                                    Business Analysis
                                </div>
                                <div
                                    className={
                                        SuccessTrajectoryCss.sliderSubTitle
                                    }
                                >
                                    Упор на решение реальных задач и
                                    приобретение практических навыков.
                                </div>
                                <div className={SuccessTrajectoryCss.sliderBtn}>
                                    Подробнее
                                </div>
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

export default SuccessTrajectory;

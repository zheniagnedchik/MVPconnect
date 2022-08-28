import HistorySuccessDesctopCss from './HistorySuccessDesctop.module.css';
import VectorRight from './img/VectorRight.svg';
import VectorLeft from './img/VectorLeft.svg';
import Success from './img/success.svg';
import slider2 from './img/slider2.svg';
import slider3 from './img/slider3.svg';
import slider4 from './img/slider3.svg';
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import { Video } from '@splidejs/splide-extension-video';
import '@splidejs/react-splide/css/skyblue';
import './splide.css';

const HistorySuccessDesctop = () => {
    return (
        <div className={HistorySuccessDesctopCss.HistorySuccessDesctop}>
            <div className={HistorySuccessDesctopCss.titleWrapper}>
                <div className={HistorySuccessDesctopCss.title}>
                    Истории успеха
                </div>
                <div className={HistorySuccessDesctopCss.subTitle}>
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
                    // isNavigation: true,
                    pagination: true,
                    focus: 'center',
                    video: {
                        mute: true,
                        playerOptions: {
                            youtube: {
                                width: 200,
                            },
                            vimeo: {},
                            htmlVideo: {
                                width: 200,
                            },
                        },
                    },
                    classes: {
                        page: `splide__pagination__page splide__pagination__customPage`,
                        arrows: 'splide__arrows your-class-arrows',
                        arrow: 'splide__arrow your-class-arrow',
                        prev: 'splide__arrow--prev splide__customArrowDesktop-prev',
                        next: 'splide__arrow--next splide__customArrowDesktop-next',
                    },
                }}
                extensions={{ Video }}
                aria-label="..."
            >
                {' '}
                <div className={HistorySuccessDesctopCss.splideWrapper}>
                    <SplideTrack>
                        <li
                            className="splide__slide splide__Customslide"
                            data-splide-youtube="https://www.youtube.com/watch?v=cdz__ojQOuU"
                        >
                            <img src={slider4} />
                        </li>
                        <li
                            className="splide__slide splide__Customslide"
                            data-splide-vimeo="https://vimeo.com/215334213"
                        >
                            <img src={slider2} />
                        </li>
                        <li
                            className="splide__slide splide__Customslide"
                            data-splide-vimeo="https://vimeo.com/215334213"
                        >
                            <img src={slider3} />
                        </li>
                        <li
                            className="splide__slide splide__Customslide"
                            data-splide-vimeo="https://vimeo.com/215334213"
                        >
                            <img src={slider4} />
                        </li>
                        <li
                            className="splide__slide splide__Customslide"
                            data-splide-vimeo="https://vimeo.com/215334213"
                        >
                            <img src={slider2} />
                        </li>
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

export default HistorySuccessDesctop;

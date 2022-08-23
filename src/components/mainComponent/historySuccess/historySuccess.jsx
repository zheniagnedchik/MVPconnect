import HistorySuccessCss from './HistorySuccess.module.css';
import VectorRight from './img/VectorRight.svg';
import VectorLeft from './img/VectorLeft.svg';
import Success from './img/success.svg';
import Slider from './img/slider1.svg';
import { Splide, SplideTrack } from '@splidejs/react-splide';
import { Video } from '@splidejs/splide-extension-video';
import '@splidejs/splide-extension-video/dist/css/splide-extension-video.min.css';
import '@splidejs/react-splide/css/skyblue';
import './splide.css';

const historySuccess = () => {
    return (
        <div className={HistorySuccessCss.theoryCourse}>
            <div className={HistorySuccessCss.titleWrapper}>
                <div className={HistorySuccessCss.title}>Истории успеха</div>
                <div className={HistorySuccessCss.subTitle}>
                    Как я стала айтишницей и заработала первый миллион...
                </div>
            </div>
            <Splide
                hasTrack={false}
                options={{
                    type: 'loop',
                    rewind: true,
                    rewindByDrag: true,
                    video: {
                        mute: true,
                        playerOptions: {
                            youtube: {
                                width: '600',
                            },
                            vimeo: {},
                            htmlVideo: {
                                width: '600',
                            },
                        },
                    },
                    classes: {
                        page: `splide__pagination__page splide__pagination__customPage`,
                    },
                }}
                extensions={{ Video }}
                aria-label="..."
            >
                <div className={HistorySuccessCss.splideWrapper}>
                    <SplideTrack>
                        <li
                            class="splide__slide splide__Customslide"
                            data-splide-youtube="https://www.youtube.com/watch?v=cdz__ojQOuU"
                        >
                            <img src={Success} />
                        </li>
                        <li
                            class="splide__slide splide__Customslide"
                            data-splide-vimeo="https://vimeo.com/215334213"
                        >
                            <img src={Success} />
                        </li>
                        <li
                            class="splide__slide splide__Customslide"
                            data-splide-vimeo="https://vimeo.com/215334213"
                        >
                            <img src={Success} />
                        </li>
                        <li
                            class="splide__slide splide__Customslide"
                            data-splide-vimeo="https://vimeo.com/215334213"
                        >
                            <img src={Success} />
                        </li>
                        <li
                            class="splide__slide splide__Customslide"
                            data-splide-vimeo="https://vimeo.com/215334213"
                        >
                            <img src={Success} />
                        </li>
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

export default historySuccess;

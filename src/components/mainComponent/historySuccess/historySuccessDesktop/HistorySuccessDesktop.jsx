import HistorySuccessDesktopCss from './HistorySuccessDesktop.module.css';
import VectorRight from './img/VectorRight.svg';
import VectorLeft from './img/VectorLeft.svg';

import David from './img/David.svg';
import Novikow from './img/Novikow.svg';
import Ruslan from './img/Ruslan.svg';
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import { Video } from '@splidejs/splide-extension-video';
import '@splidejs/react-splide/css/skyblue';

const HistorySuccessDesktop = () => {
    return (
        <div className={HistorySuccessDesktopCss.HistorySuccessDesktop}>
            <div className={HistorySuccessDesktopCss.titleWrapper}>
                <div className={HistorySuccessDesktopCss.title}>
                    Истории успеха
                </div>
                <div className={HistorySuccessDesktopCss.subTitle}>
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

                    pagination: true,

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
                <div className={HistorySuccessDesktopCss.splideWrapper}>
                    <SplideTrack>
                        <li
                            className="splide__slide splide__Customslide"
                            data-splide-youtube="https://www.youtube.com/watch?v=KST8GEDhmBI"
                        >
                            <img src={Ruslan} />
                        </li>
                        <li
                            className="splide__slide splide__Customslide"
                            data-splide-youtube="https://www.youtube.com/watch?v=VxlWXEsymGM"
                        >
                            <img src={David} />
                        </li>
                        <li
                            className="splide__slide splide__Customslide"
                            data-splide-youtube="https://www.youtube.com/watch?v=hhFYcnwzWEY"
                        >
                            <img src={Novikow} />
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

export default HistorySuccessDesktop;

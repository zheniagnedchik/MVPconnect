import OurPartnersCss from './OurPartners.module.css';

import Partners from './img/partners.svg';
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/skyblue';
import './splide.css';

const OurPartners = () => {
    return (
        <div className={OurPartnersCss.theoryCourse}>
            <div className={OurPartnersCss.titleWrapper}>
                <div className={OurPartnersCss.title}>Наши партнеры</div>
            </div>
            <div className={OurPartnersCss.splideWrapper}>
                <Splide
                    hasTrack={false}
                    options={{
                        type: 'loop',
                        rewind: true,
                        rewindByDrag: true,
                        arrows: false,

                        classes: {
                            page: `splide__pagination__page splide__pagination__customPage`,
                        },
                    }}
                    aria-label="..."
                >
                    <SplideTrack>
                        <SplideSlide>
                            <img src={Partners} alt="" />
                        </SplideSlide>
                        <SplideSlide>
                            <img src={Partners} alt="" />
                        </SplideSlide>
                        <SplideSlide>
                            <img src={Partners} alt="" />
                        </SplideSlide>
                        <SplideSlide>
                            <img src={Partners} alt="" />
                        </SplideSlide>
                        <SplideSlide>
                            <img src={Partners} alt="" />
                        </SplideSlide>
                    </SplideTrack>

                    <div className="splide__customPagination">
                        <ul className="splide__pagination "></ul>
                    </div>
                </Splide>
            </div>
        </div>
    );
};

export default OurPartners;

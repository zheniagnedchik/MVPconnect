import OurPartnersDesktopCss from './OurPartnersDesktop.module.css';
import VectorRight from './img/VectorRight.svg';
import VectorLeft from './img/VectorLeft.svg';
import slider1 from './img/slider1.svg';
import slider2 from './img/slider2.svg';
import slider3 from './img/slider3.svg';
import partners from './img/partners.svg';
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/skyblue';
import './splide.css';

const OurPartnersDesktop = () => {
    return (
        <div className={OurPartnersDesktopCss.OurPartnersDesktop}>
            <div className={OurPartnersDesktopCss.titleWrapper}>
                <div className={OurPartnersDesktopCss.title}>Наши партнёры</div>
                <div className={OurPartnersDesktopCss.subTitle}> </div>
            </div>
            <Splide
                hasTrack={false}
                options={{
                    type: 'loop',
                    gap: 2,
                    perPage: 1,
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
                <div className={OurPartnersDesktopCss.splideWrapper}>
                    <SplideTrack>
                        <SplideSlide>
                            <img src={partners} alt="" />
                        </SplideSlide>
                        <SplideSlide>
                            <img src={partners} alt="" />
                        </SplideSlide>
                        <SplideSlide>
                            <img src={partners} alt="" />
                        </SplideSlide>
                        <SplideSlide>
                            <img src={partners} alt="" />
                        </SplideSlide>
                        <SplideSlide>
                            <img src={partners} alt="" />
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

export default OurPartnersDesktop;

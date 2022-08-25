import SuccessTrajectoryCss from './SuccessTrajectory.module.css';
import VectorRight from './img/VectorRight.svg';
import VectorLeft from './img/VectorLeft.svg';
import { useRef, useEffect } from 'react';
import slide1 from './img/slide1.svg';

import slide3 from './img/slide3.svg';
import slide4 from './img/slide4.svg';
import table from './img/table.svg';
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/skyblue';
import './splide.css';

const SuccessTrajectory = () => {
    const slider1 = useRef();
    const slider2 = useRef();

    useEffect(() => {
        slider1.current.sync(slider2.current.splide);
    }, [slider1, slider2]);

    return (
        <div className={SuccessTrajectoryCss.SuccessTrajectory}>
            <div className={SuccessTrajectoryCss.titleWrapper}>
                <div className={SuccessTrajectoryCss.title}>
                    Траектория вашего успеха
                </div>
                <div className={SuccessTrajectoryCss.subTitle}>
                    Динамика заработной платы в месяц
                </div>
            </div>
            <div className={SuccessTrajectoryCss.splideWrapper}>
                <Splide
                    ref={(slider) => (slider1.current = slider)}
                    hasTrack={false}
                    options={{
                        type: 'loop',
                        gap: 2,
                        perPage: 3,
                        rewind: true,
                        rewindByDrag: true,
                        isNavigation: true,
                        pagination: false,
                        focus: 'center',
                        breakpoints: {
                            600: {
                                fixedWidth: '28.12vw',
                                fixedHeight: '30vh',
                            },
                        },
                    }}
                    aria-label="..."
                >
                    <SplideTrack className={SuccessTrajectoryCss.splide}>
                        <SplideSlide
                            className={SuccessTrajectoryCss.characters}
                        >
                            {' '}
                            <img src={slide1} alt="" />
                        </SplideSlide>
                        <SplideSlide
                            className={SuccessTrajectoryCss.characters}
                        >
                            {' '}
                            <img src={slide4} alt="" />
                        </SplideSlide>
                        <SplideSlide
                            className={SuccessTrajectoryCss.characters}
                        >
                            {' '}
                            <img src={slide3} alt="" />
                        </SplideSlide>
                        <SplideSlide
                            className={SuccessTrajectoryCss.characters}
                        >
                            {' '}
                            <img src={slide4} alt="" />
                        </SplideSlide>
                        <SplideSlide
                            className={SuccessTrajectoryCss.characters}
                        >
                            {' '}
                            <img src={slide1} alt="" />
                        </SplideSlide>
                        <SplideSlide
                            className={SuccessTrajectoryCss.characters}
                        >
                            {' '}
                            <img src={slide4} alt="" />
                        </SplideSlide>
                        <SplideSlide
                            className={SuccessTrajectoryCss.characters}
                        >
                            {' '}
                            <img src={slide3} alt="" />
                        </SplideSlide>
                        <SplideSlide
                            className={SuccessTrajectoryCss.characters}
                        >
                            {' '}
                            <img src={slide4} alt="" />
                        </SplideSlide>
                        <SplideSlide
                            className={SuccessTrajectoryCss.characters}
                        >
                            {' '}
                            <img src={slide4} alt="" />
                        </SplideSlide>
                    </SplideTrack>

                    <div className="splide__arrows splide__arrows" />
                    <button className="splide__arrow splide__arrow--prev splide__customArrow--prev">
                        <img src={VectorLeft} alt="" />
                    </button>
                    <button className="splide__arrow splide__arrow--next splide__customArrow--next">
                        <img src={VectorRight} alt="" />
                    </button>
                </Splide>
                <div className={SuccessTrajectoryCss.splideWrapper2}>
                    <Splide
                        ref={(slider) => (slider2.current = slider)}
                        options={{
                            type: 'loop',
                            rewind: true,
                            pagination: false,
                            arrows: false,
                        }}
                    >
                        <SplideSlide>
                            <img src={table} alt="" />
                        </SplideSlide>
                        <SplideSlide>
                            <img src={table} alt="" />
                        </SplideSlide>
                        <SplideSlide>
                            <img src={table} alt="" />
                        </SplideSlide>
                        <SplideSlide>
                            <img src={table} alt="" />
                        </SplideSlide>
                        <SplideSlide>
                            <img src={table} alt="" />
                        </SplideSlide>
                        <SplideSlide>
                            <img src={table} alt="" />
                        </SplideSlide>
                        <SplideSlide>
                            <img src={table} alt="" />
                        </SplideSlide>
                        <SplideSlide>
                            <img src={table} alt="" />
                        </SplideSlide>
                        <SplideSlide>
                            <img src={table} alt="" />
                        </SplideSlide>
                    </Splide>
                </div>
            </div>
        </div>
    );
};

export default SuccessTrajectory;

import SuccessTrajectoryCss from './SuccessTrajectory.module.css';
import VectorRight from './img/VectorRight.svg';
import VectorLeft from './img/VectorLeft.svg';
import { useRef, useEffect } from 'react';
import slide1 from './img/characters/Back-end.jpg';
import slide1blue from './img/characters/Back-end_selected.jpg';
import slide2 from './img/characters/Front-end.jpg';
import slide2blue from './img/characters/Front-end_selected.jpg';
import slide3 from './img/characters/HR.jpg';
import slide3blue from './img/characters/HR_selected.jpg';
import slide4 from './img/characters/Marketer.jpg';
import slide4blue from './img/characters/Marketer_selected.jpg';
import slide5 from './img/characters/PM.jpg';
import slide5blue from './img/characters/PM_selected.jpg';
import slide6 from './img/characters/PrdM.jpg';
import slide6blue from './img/characters/PrdM_selected.jpg';
import slide7 from './img/characters/QA.jpg';
import slide7blue from './img/characters/QA_selected.jpg';
import slide8 from './img/characters/UXUI.jpg';
import slide8blue from './img/characters/UXUI_selected.jpg';
import table from './img/table.svg';
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/skyblue';
import './splide.css';
import { useState } from 'react';

const SuccessTrajectory = () => {
    const [changeImg, setChangeImg] = useState(null);

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
                    onActive={(splide, Slide) => {
                        setChangeImg(Slide.index);
                    }}
                    ref={(slider) => (slider1.current = slider)}
                    hasTrack={false}
                    options={{
                        type: 'loop',
                        gap: 2,
                        perPage: 3,
                        cloneStatus: false,
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
                            className={`${SuccessTrajectoryCss.characters} yellowColorforTitle`}
                        >
                            <div
                                className={`${SuccessTrajectoryCss.slideTitle} titleCharacter`}
                            >
                                {' '}
                                Back-End
                            </div>{' '}
                            <img
                                src={changeImg === 0 ? slide1blue : slide1}
                                alt=""
                            />
                        </SplideSlide>
                        <SplideSlide
                            className={`${SuccessTrajectoryCss.characters} yellowColorforTitle`}
                        >
                            {' '}
                            <div
                                className={`${SuccessTrajectoryCss.slideTitle} titleCharacter`}
                            >
                                {' '}
                                HR
                            </div>{' '}
                            <img
                                src={changeImg === 1 ? slide3blue : slide3}
                                alt=""
                            />
                        </SplideSlide>
                        <SplideSlide
                            className={`${SuccessTrajectoryCss.characters} yellowColorforTitle`}
                        >
                            {' '}
                            <div
                                className={`${SuccessTrajectoryCss.slideTitle} titleCharacter`}
                            >
                                {' '}
                                Marketer
                            </div>{' '}
                            <img
                                src={changeImg === 2 ? slide4blue : slide4}
                                alt=""
                            />
                        </SplideSlide>
                        <SplideSlide
                            className={`${SuccessTrajectoryCss.characters} yellowColorforTitle`}
                        >
                            {' '}
                            <div
                                className={`${SuccessTrajectoryCss.slideTitle} titleCharacter`}
                            >
                                {' '}
                                PM
                            </div>{' '}
                            <img
                                src={changeImg === 3 ? slide5blue : slide5}
                                alt=""
                            />
                        </SplideSlide>
                        <SplideSlide
                            className={`${SuccessTrajectoryCss.characters} yellowColorforTitle`}
                        >
                            {' '}
                            <div
                                className={`${SuccessTrajectoryCss.slideTitle} titleCharacter`}
                            >
                                {' '}
                                PrdM
                            </div>{' '}
                            <img
                                src={changeImg === 4 ? slide6blue : slide6}
                                alt=""
                            />
                        </SplideSlide>
                        <SplideSlide
                            className={`${SuccessTrajectoryCss.characters} yellowColorforTitle`}
                        >
                            {' '}
                            <div
                                className={`${SuccessTrajectoryCss.slideTitle} titleCharacter`}
                            >
                                {' '}
                                UX
                            </div>{' '}
                            <img
                                src={changeImg === 5 ? slide8blue : slide8}
                                alt=""
                            />
                        </SplideSlide>
                        <SplideSlide
                            className={`${SuccessTrajectoryCss.characters} yellowColorforTitle`}
                        >
                            {' '}
                            <div
                                className={`${SuccessTrajectoryCss.slideTitle} titleCharacter`}
                            >
                                {' '}
                                QA
                            </div>{' '}
                            <img
                                src={changeImg === 6 ? slide7blue : slide7}
                                alt=""
                            />
                        </SplideSlide>
                        <SplideSlide
                            className={`${SuccessTrajectoryCss.characters} yellowColorforTitle`}
                        >
                            {' '}
                            <div
                                className={`${SuccessTrajectoryCss.slideTitle} titleCharacter`}
                            >
                                {' '}
                                Frontend
                            </div>{' '}
                            <img
                                src={changeImg === 7 ? slide2blue : slide2}
                                alt=""
                            />
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
                        <SplideSlide className={SuccessTrajectoryCss.table}>
                            <img src={table} alt="" />
                        </SplideSlide>
                        <SplideSlide className={SuccessTrajectoryCss.table}>
                            <img src={table} alt="" />
                        </SplideSlide>
                        <SplideSlide className={SuccessTrajectoryCss.table}>
                            <img src={table} alt="" />
                        </SplideSlide>
                        <SplideSlide className={SuccessTrajectoryCss.table}>
                            <img src={table} alt="" />
                        </SplideSlide>
                        <SplideSlide className={SuccessTrajectoryCss.table}>
                            <img src={table} alt="" />
                        </SplideSlide>
                        <SplideSlide className={SuccessTrajectoryCss.table}>
                            <img src={table} alt="" />
                        </SplideSlide>
                        <SplideSlide className={SuccessTrajectoryCss.table}>
                            <img src={table} alt="" />
                        </SplideSlide>
                        <SplideSlide className={SuccessTrajectoryCss.table}>
                            <img src={table} alt="" />
                        </SplideSlide>
                        <SplideSlide className={SuccessTrajectoryCss.table}>
                            <img src={table} alt="" />
                        </SplideSlide>
                    </Splide>
                </div>
            </div>
        </div>
    );
};

export default SuccessTrajectory;

import MenuCss from './Menu.module.css';
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/skyblue';

import { useRef, useEffect } from 'react';

const DesktopSplider = (props) => {
    const slider2 = useRef();
    useEffect(() => {
        props.slider1.current.sync(slider2.current.splide);
    }, [props.slider1, slider2]);
    return (
        <Splide
            ref={(slider) => (slider2.current = slider)}
            className={MenuCss.splideWrapper}
            options={{
                type: 'fade',
                start: props.numberSplider,
                drag: false,
                pagination: false,
                arrows: false,
            }}
        >
            <SplideSlide>
                {' '}
                <div className={MenuCss.dMenu}>
                    <div className={MenuCss.dWrapper}>
                        <div
                            onClick={() => props.setChoiseModule(1)}
                            className={` ${
                                props.ChoiseModule === 1
                                    ? MenuCss.dMenuActive
                                    : ''
                            }`}
                        >
                            <p> Максимальный</p>
                        </div>
                        <div
                            onClick={() => props.setChoiseModule(2)}
                            className={` ${
                                props.ChoiseModule === 2
                                    ? MenuCss.dMenuActive
                                    : ''
                            }`}
                        >
                            <p> Базовый</p>
                        </div>
                        <div
                            onClick={() => props.setChoiseModule(3)}
                            className={` ${
                                props.ChoiseModule === 3
                                    ? MenuCss.dMenuActive
                                    : ''
                            }`}
                        >
                            <p> Профессиональный</p>
                        </div>
                        <div
                            onClick={() => props.setChoiseModule(4)}
                            className={` ${
                                props.ChoiseModule === 4
                                    ? MenuCss.dMenuActive
                                    : ''
                            }`}
                        >
                            <p> Практический</p>
                        </div>
                    </div>
                </div>
            </SplideSlide>
            <SplideSlide>
                {' '}
                <div className={MenuCss.dMenu}>
                    <div className={MenuCss.dWrapper}>
                        <div
                            onClick={() => props.setChoiseModule(1)}
                            className={` ${
                                props.ChoiseModule === 1
                                    ? MenuCss.dMenuActive
                                    : ''
                            }`}
                        >
                            <p> Максимальный</p>
                        </div>
                        <div
                            onClick={() => props.setChoiseModule(2)}
                            className={` ${
                                props.ChoiseModule === 2
                                    ? MenuCss.dMenuActive
                                    : ''
                            }`}
                        >
                            <p> Базовый</p>
                        </div>
                        <div
                            onClick={() => props.setChoiseModule(3)}
                            className={` ${
                                props.ChoiseModule === 3
                                    ? MenuCss.dMenuActive
                                    : ''
                            }`}
                        >
                            <p> Профессиональный</p>
                        </div>
                        <div
                            onClick={() => props.setChoiseModule(4)}
                            className={` ${
                                props.ChoiseModule === 4
                                    ? MenuCss.dMenuActive
                                    : ''
                            }`}
                        >
                            <p> Практический</p>
                        </div>
                    </div>
                </div>
            </SplideSlide>
            <SplideSlide>
                {' '}
                <div className={MenuCss.dMenu}>
                    <div className={MenuCss.dWrapper}>
                        <div
                            onClick={() => props.setChoiseModule(2)}
                            className={` ${
                                props.ChoiseModule === 2
                                    ? MenuCss.dMenuActive
                                    : ''
                            }`}
                        >
                            <p> Базовый</p>
                        </div>

                        <div
                            onClick={() => props.setChoiseModule(4)}
                            className={` ${
                                props.ChoiseModule === 4
                                    ? MenuCss.dMenuActive
                                    : ''
                            }`}
                        >
                            <p> Практический</p>
                        </div>
                    </div>
                </div>
            </SplideSlide>
        </Splide>
    );
};
export default DesktopSplider;

import MenuCss from './Menu.module.css';
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/skyblue';

import { useRef, useEffect } from 'react';
const MobileSplider = (props) => {
    const slider2 = useRef();
    useEffect(() => {
        props.slider1.current.sync(slider2.current.splide);
    }, [props.slider1, slider2]);
    let check = (e) => {
        switch (e.target.value) {
            case '1':
                props.setChoiseModule(1);
                props.setModule('Максимальный');

                break;
            case '2':
                props.setChoiseModule(2);
                props.setModule('Базовый');

                break;
            case '3':
                props.setChoiseModule(3);
                props.setModule('Профессиональный');
                break;
            case '4':
                props.setChoiseModule(4);
                props.setModule('Практический');
                break;
        }
    };
    return (
        <Splide
            ref={(slider) => (slider2.current = slider)}
            className={MenuCss.splideWrapper}
            options={{
                type: 'fade',
                start: props.numberSplider,
                pagination: false,
                arrows: false,
            }}
        >
            <SplideSlide>
                <div className={MenuCss.mMenu}>
                    <div className={MenuCss.mMenuWrapper}>
                        <select size="1" onChange={(e) => check(e)}>
                            <option
                                selected={
                                    props.ChoiseModule === 1 ? true : false
                                }
                                value="1"
                            >
                                Максимальный
                            </option>
                            <option
                                selected={
                                    props.ChoiseModule === 2 ? true : false
                                }
                                value="2"
                            >
                                Базовый
                            </option>
                            <option
                                selected={
                                    props.ChoiseModule === 3 ? true : false
                                }
                                value="3"
                            >
                                Профессиональный
                            </option>
                            <option
                                selected={
                                    props.ChoiseModule === 4 ? true : false
                                }
                                value="4"
                            >
                                Практический
                            </option>
                        </select>
                    </div>
                </div>
            </SplideSlide>
            <SplideSlide>
                <div className={MenuCss.mMenu}>
                    <div className={MenuCss.mMenuWrapper}>
                        <select size="1" onChange={(e) => check(e)}>
                            <option
                                selected={
                                    props.ChoiseModule === 1 ? true : false
                                }
                                value="1"
                            >
                                Максимальный
                            </option>
                            <option
                                selected={
                                    props.ChoiseModule === 2 ? true : false
                                }
                                value="2"
                            >
                                Базовый
                            </option>
                            <option
                                selected={
                                    props.ChoiseModule === 3 ? true : false
                                }
                                value="3"
                            >
                                Профессиональный
                            </option>
                            <option
                                selected={
                                    props.ChoiseModule === 4 ? true : false
                                }
                                value="4"
                            >
                                Практический
                            </option>
                        </select>
                    </div>
                </div>
            </SplideSlide>
            <SplideSlide>
                <div className={MenuCss.mMenu}>
                    <div className={MenuCss.mMenuWrapper}>
                        <select size="1" onChange={(e) => check(e)}>
                            <option
                                selected={
                                    props.ChoiseModule === 2 ? true : false
                                }
                                value="2"
                            >
                                Базовый
                            </option>

                            <option
                                selected={
                                    props.ChoiseModule === 4 ? true : false
                                }
                                value="4"
                            >
                                Практический
                            </option>
                        </select>
                    </div>
                </div>
            </SplideSlide>
        </Splide>
    );
};

export default MobileSplider;

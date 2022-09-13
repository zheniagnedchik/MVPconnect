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

                break;
            case '2':
                props.setChoiseModule(2);

                break;
            case '3':
                props.setChoiseModule(3);
                break;
            case '4':
                props.setChoiseModule(4);
                break;
        }
    };
    return (
        <Splide
            ref={(slider) => (slider2.current = slider)}
            className={MenuCss.splideWrapper}
            options={{
                type: 'fade',

                pagination: false,
                arrows: false,
            }}
        >
            <SplideSlide>
                <div className={MenuCss.mMenu}>
                    <div className={MenuCss.mMenuWrapper}>
                        <select size="1" onChange={(e) => check(e)}>
                            <option value="1">Максимальный</option>
                            <option value="2">Базовый</option>
                            <option value="3">Профессиональный</option>
                            <option value="4">Практический</option>
                        </select>
                    </div>
                </div>
            </SplideSlide>
            <SplideSlide>
                <div className={MenuCss.mMenu}>
                    <div className={MenuCss.mMenuWrapper}>
                        <select size="1" onChange={(e) => check(e)}>
                            <option value="1">Максимальный</option>
                            <option value="2">Базовый</option>
                            <option value="3">Профессиональный</option>
                            <option value="4">Практический</option>
                        </select>
                    </div>
                </div>
            </SplideSlide>
            <SplideSlide>
                <div className={MenuCss.mMenu}>
                    <div className={MenuCss.mMenuWrapper}>
                        <select size="1" onChange={(e) => check(e)}>
                            <option value="2">Базовый</option>

                            <option value="4">Практический</option>
                        </select>
                    </div>
                </div>
            </SplideSlide>
        </Splide>
    );
};

export default MobileSplider;

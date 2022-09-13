import FormCss from './Form.module.css';
import { useState } from 'react';
import { useRef, useEffect } from 'react';
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/skyblue';
import './splide.css';
import VectorRight from './img/VectorRight.svg';
import VectorLeft from './img/VectorLeft.svg';
import DesktopSplider from './spliders/DesktopSplider';
import MobileSplider from './spliders/MobileSplider';

const CourseForm = (props) => {
    props.ScrollTop();
    const slider1 = useRef();

    const [selected, useSelected] = useState(false);
    const [ChoiseModule, setChoiseModule] = useState(1);

    const ChangeState = (e) => {
        useSelected(e.target.value === '' ? true : true);
    };
    const ClearOther = () => {
        useSelected(false);
    };
    const SelectOther = () => {
        useSelected(true);
    };

    return (
        <div className={FormCss.PracticeForm}>
            <div className={FormCss.formWrapper}>
                <div className={FormCss.formItem}>
                    <div className={FormCss.overhead}>Форма записи на</div>

                    <Splide
                        ref={(slider) => (slider1.current = slider)}
                        className={FormCss.splideWrapper}
                        hasTrack={false}
                        options={{
                            type: 'loop',
                            rewind: true,
                            start: props.state.numberSplider,
                            rewindByDrag: true,
                            pagination: false,
                        }}
                        aria-label="..."
                    >
                        <div>
                            <SplideTrack className={FormCss.splideTrack}>
                                <SplideSlide>
                                    <div className={FormCss.coursesTitle}>
                                        Курс <br /> “UX/UI Designer”
                                    </div>
                                </SplideSlide>
                                <SplideSlide>
                                    <div className={FormCss.coursesTitle}>
                                        Курс “Front-end разработчик”
                                    </div>
                                </SplideSlide>
                                <SplideSlide>
                                    <div className={FormCss.coursesTitle}>
                                        Курс <br /> “Python”
                                    </div>
                                </SplideSlide>
                            </SplideTrack>

                            <div className="splide__arrows splide__CoursesArrows" />
                            <button className="splide__arrow splide__arrow--prev splide__customFormArrow--prev">
                                <img src={VectorLeft} alt="" />
                            </button>
                            <button className="splide__arrow splide__arrow--next splide__customFormArrow--next">
                                <img src={VectorRight} alt="" />
                            </button>
                        </div>
                    </Splide>
                    {props.state.displaySize.isDesktop ? (
                        <DesktopSplider
                            numberSplider={props.state.numberSplider}
                            slider1={slider1}
                            ChoiseModule={ChoiseModule}
                            setChoiseModule={setChoiseModule}
                        />
                    ) : (
                        <MobileSplider
                            slider1={slider1}
                            ChoiseModule={ChoiseModule}
                            setChoiseModule={setChoiseModule}
                        />
                    )}
                    <form className={FormCss.form} action="">
                        <div className={FormCss.inputWrapper}>
                            <div className={FormCss.inputItem}>
                                <label htmlFor="name">Ваше имя*</label>{' '}
                                <input name="name" type="text" />
                            </div>
                            <div className={FormCss.inputItem}>
                                <label htmlFor="tel">Телефон для связи</label>{' '}
                                <input name="tel" type="tel" />
                            </div>
                        </div>

                        <div className={FormCss.profWrapper}>
                            <div className={FormCss.profTitle}>
                                Мессенджер для связи*
                            </div>
                            <div className={FormCss.profItem}>
                                <input
                                    onClick={ClearOther}
                                    type="radio"
                                    name="mes"
                                    id="radio6"
                                />
                                <label htmlFor="radio6">Telegram</label>
                            </div>
                            <div className={FormCss.profItem}>
                                <input
                                    onClick={ClearOther}
                                    type="radio"
                                    name="mes"
                                    id="radio7"
                                />
                                <label htmlFor="radio7">WhatsApp</label>
                            </div>
                            <div className={FormCss.profItem}>
                                <input
                                    onClick={ClearOther}
                                    type="radio"
                                    name="mes"
                                    id="radio8"
                                />
                                <label htmlFor="radio8">Viber</label>
                            </div>
                            <div className={FormCss.profItem}>
                                <input
                                    type="radio"
                                    onClick={ClearOther}
                                    name="mes"
                                    id="radio9"
                                />
                                <label htmlFor="radio9">
                                    Facebook Messanger
                                </label>
                            </div>
                            <div className={FormCss.profItem}>
                                <input
                                    type="radio"
                                    checked={selected}
                                    name="mes"
                                    onClick={SelectOther}
                                    id="radio10"
                                />
                                <label htmlFor="radio10">Other:</label>
                                <input
                                    onChange={(e) => ChangeState(e)}
                                    type="text"
                                    name="mes"
                                    id="radio10"
                                    value={selected === false ? '' : null}
                                />
                            </div>
                        </div>
                        <div className={FormCss.inputWrapper}>
                            <label htmlFor="nick">
                                Ваш никнейм в выбранном мессенджере, для
                                возможности связи, с учетом приватности*
                            </label>{' '}
                            <input name="nick" type="text" />{' '}
                        </div>
                    </form>

                    <div className={FormCss.footer}>
                        <div className={FormCss.footerInfo}>
                            Отправляя заявку, вы принимаете условия публичного
                            договора и даете согласие на обработку своих
                            персональных данных. С договором можно ознакомиться
                            по{' '}
                            <a href="https://drive.google.com/file/d/1Epnq1yeZ_ePRwbIPsAwxi1kFXwOZFxoo/view?usp=sharing">
                                {' '}
                                ссылке
                            </a>
                        </div>
                        <a href="/">
                            {' '}
                            <div className={FormCss.footerBtn}>
                                {' '}
                                <p>Записаться</p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseForm;

import FormCss from './Form.module.css';
import { useState, useEffect } from 'react';
import { useRef } from 'react';
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/skyblue';
import './splide.css';
import VectorRight from './img/VectorRight.svg';
import VectorLeft from './img/VectorLeft.svg';
import X from './img/X.webp';
import DesktopSplider from './spliders/DesktopSplider';
import MobileSplider from './spliders/MobileSplider';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import Airtable from 'airtable';

const CourseForm = (props) => {
    props.ScrollTop();

    const slider1 = useRef();
    const [btnCheck, setBtnCheck] = useState(false);
    const [inputTel, setinputTel] = useState('');
    const [inputNick, setinputNick] = useState('');
    const [radioSoc, setradioSoc] = useState('');
    const [nameCourses, setnameCourse] = useState(
        props.state.numberSplider === 0
            ? 'UX/UI Designer'
            : props.state.numberSplider === 1
            ? 'Frontend'
            : props.state.numberSplider === 2
            ? 'Python'
            : null
    );

    const [inputSoc, setinputSoc] = useState('');
    const [selected, useSelected] = useState(false);
    const [ChoiseModule, setChoiseModule] = useState(2);
    const [module, setModule] = useState(
        ChoiseModule === 1
            ? 'Максимальный'
            : ChoiseModule === 2
            ? 'Базовый'
            : ChoiseModule === 3
            ? 'Профессиональный'
            : ChoiseModule === 4
            ? 'Практический'
            : null
    );

    const ChangeState = (e) => {
        useSelected(e.target.value === '' ? true : true);
    };
    const ClearOther = () => {
        useSelected(false);
    };
    const SelectOther = () => {
        setradioSoc('Other');
        useSelected(true);
    };

    const checkBtn = (e) => {
        if (
            e.currentTarget[7].value === '' ||
            (!e.currentTarget[1].checked &&
                !e.currentTarget[2].checked &&
                !e.currentTarget[3].checked &&
                !e.currentTarget[4].checked &&
                !e.currentTarget[5].checked)
        ) {
            setBtnCheck(false);
        } else if (
            e.currentTarget[5].checked &&
            e.currentTarget[6].value === ''
        ) {
            setBtnCheck(false);
        } else {
            setBtnCheck(true);
        }
    };

    const Airtable = require('airtable');
    const base = new Airtable({ apiKey: 'keyJQ0HEb6WHcjN7t' }).base(
        'app5JtyuZXRZgEBUO'
    );

    const SendData = (e) => {
        window.scrollTo(0, 0);
        base('Sheet1').create([
            {
                fields: {
                    inputTel: inputTel,
                    inputNick: inputNick,
                    radioSoc: radioSoc,
                    nameCourses: nameCourses,
                    module: module,
                    inputSoc: inputSoc,
                },
            },
        ]);
    };

    return (
        <div className={FormCss.PracticeForm}>
            <div className={FormCss.formWrapper}>
                <div className={FormCss.cross}>
                    <NavLink to="/">
                        {' '}
                        <img src={X} alt="" />{' '}
                    </NavLink>
                </div>
                <div className={FormCss.formItem}>
                    <div className={FormCss.overhead}>Форма записи на</div>

                    <Splide
                        ref={(slider) => (slider1.current = slider)}
                        className={FormCss.splideWrapper}
                        hasTrack={false}
                        options={{
                            type: 'loop',
                            rewind: true,
                            drag: false,

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
                            <button
                                onClick={() =>
                                    nameCourses === 'UX/UI Designer'
                                        ? setnameCourse('Python')
                                        : nameCourses === 'Python'
                                        ? setnameCourse('Frontend')
                                        : nameCourses === 'Frontend'
                                        ? setnameCourse('UX/UI Designer')
                                        : null
                                }
                                className="splide__arrow splide__arrow--prev splide__customFormArrow--prev"
                            >
                                <img src={VectorLeft} alt="" />
                            </button>
                            <button
                                onClick={() =>
                                    nameCourses === 'UX/UI Designer'
                                        ? setnameCourse('Frontend')
                                        : nameCourses === 'Frontend'
                                        ? setnameCourse('Python')
                                        : nameCourses === 'Python'
                                        ? setnameCourse('UX/UI Designer')
                                        : null
                                }
                                className="splide__arrow splide__arrow--next splide__customFormArrow--next"
                            >
                                <img src={VectorRight} alt="" />
                            </button>
                        </div>
                    </Splide>
                    {props.state.displaySize.isDesktop ? (
                        <DesktopSplider
                            setModule={setModule}
                            numberSplider={props.state.numberSplider}
                            slider1={slider1}
                            ChoiseModule={ChoiseModule}
                            setChoiseModule={setChoiseModule}
                        />
                    ) : (
                        <MobileSplider
                            slider1={slider1}
                            setModule={setModule}
                            ChoiseModule={ChoiseModule}
                            setChoiseModule={setChoiseModule}
                            numberSplider={props.state.numberSplider}
                        />
                    )}
                    <form
                        onChange={(e) => checkBtn(e)}
                        className={FormCss.form}
                        action=""
                    >
                        <div className={FormCss.inputWrapper}>
                            <div className={FormCss.inputItem}>
                                <label htmlFor="tel">Телефон для связи</label>{' '}
                                <input
                                    value={inputTel}
                                    onChange={(e) =>
                                        setinputTel(e.target.value)
                                    }
                                    name="tel"
                                    type="tel"
                                />
                            </div>
                        </div>

                        <div className={FormCss.profWrapper}>
                            <div className={FormCss.profTitle}>
                                Мессенджер для связи*
                            </div>
                            <div className={FormCss.profItem}>
                                <input
                                    onClick={() => {
                                        ClearOther();
                                        setradioSoc('Telegram');
                                    }}
                                    type="radio"
                                    name="mes"
                                    id="radio6"
                                />
                                <label htmlFor="radio6">Telegram</label>
                            </div>
                            <div className={FormCss.profItem}>
                                <input
                                    onClick={() => {
                                        ClearOther();
                                        setradioSoc('WhatsApp');
                                    }}
                                    type="radio"
                                    name="mes"
                                    id="radio7"
                                />
                                <label htmlFor="radio7">WhatsApp</label>
                            </div>
                            <div className={FormCss.profItem}>
                                <input
                                    onClick={() => {
                                        ClearOther();
                                        setradioSoc('Viber');
                                    }}
                                    type="radio"
                                    name="mes"
                                    id="radio8"
                                />
                                <label htmlFor="radio8">Viber</label>
                            </div>
                            <div className={FormCss.profItem}>
                                <input
                                    type="radio"
                                    onClick={() => {
                                        ClearOther();
                                        setradioSoc('Facebook Messanger');
                                    }}
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
                                    onChange={(e) => {
                                        ChangeState(e);
                                        setinputSoc(e.target.value);
                                    }}
                                    type="text"
                                    name="mes"
                                    id="radio10"
                                    value={selected === false ? '' : inputSoc}
                                />
                            </div>
                        </div>
                        <div className={FormCss.inputWrapper}>
                            <label htmlFor="nick">
                                Ваш никнейм в выбранном мессенджере, для
                                возможности связи, с учетом приватности*
                            </label>{' '}
                            <input
                                value={inputNick}
                                onChange={(e) => {
                                    setinputNick(e.target.value);
                                }}
                                name="nick"
                                type="text"
                            />{' '}
                        </div>
                    </form>

                    <div className={FormCss.footer}>
                        <div className={FormCss.footerInfo}>
                            Отправляя заявку, вы принимаете условия публичного
                            договора и даете согласие на обработку своих
                            персональных данных. С договором можно ознакомиться
                            по{' '}
                            <a
                                target="_blank"
                                href="https://drive.google.com/file/d/1Epnq1yeZ_ePRwbIPsAwxi1kFXwOZFxoo/view?usp=sharing"
                            >
                                {' '}
                                ссылке
                            </a>
                        </div>
                        <NavLink
                            to="/"
                            onClick={(e) => SendData(e)}
                            className={`${
                                btnCheck ? '' : FormCss.footerBtnDisabled
                            }`}
                        >
                            {' '}
                            <div className={FormCss.footerBtn}>
                                {' '}
                                <p>Записаться</p>
                            </div>
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseForm;

import FormCss from './Form.module.css';
import { useState } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import Airtable from 'airtable';
import X from './img/X.webp';

const PracticeForm = (props) => {
    props.ScrollTop();
    const [selected, useSelected] = useState(false);
    const [btnCheck, setBtnCheck] = useState(false);

    const [inputTel, setinputTel] = useState('');
    const [inputNick, setinputNick] = useState('');
    const [radioSoc, setradioSoc] = useState('');
    const [radioProf, setradioProf] = useState('');
    const [inputSoc, setinputSoc] = useState('');

    const ChangeState = (e) => {
        useSelected(e.target.value === '' ? true : true);
    };
    const ClearOther = () => {
        useSelected(false);
    };
    const SelectOther = () => {
        useSelected(true);
    };

    const checkBtn = (e) => {
        if (
            e.currentTarget[12].value === '' ||
            (!e.currentTarget[6].checked &&
                !e.currentTarget[7].checked &&
                !e.currentTarget[8].checked &&
                !e.currentTarget[9].checked &&
                !e.currentTarget[10].checked)
        ) {
            setBtnCheck(false);
        } else if (
            e.currentTarget[10].checked &&
            e.currentTarget[11].value === ''
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
                    radioProf: radioProf,
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
                    <div className={FormCss.title}>
                        Практический курс “Работа по стандартам IT-компаний”
                    </div>

                    <form
                        className={FormCss.form}
                        onChange={(e) => checkBtn(e)}
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
                                В роли кого вы планируете проходить практический
                                курс (аналог стажировки в IT компании)
                            </div>
                            <div className={FormCss.profItem}>
                                <input
                                    onClick={() => {
                                        setradioProf('Business Analyst');
                                    }}
                                    type="radio"
                                    name="prof"
                                    id="radio1"
                                />
                                <label htmlFor="radio1">Business Analyst</label>
                            </div>
                            <div className={FormCss.profItem}>
                                <input
                                    onClick={() => {
                                        setradioProf('Project Manager');
                                    }}
                                    type="radio"
                                    name="prof"
                                    id="radio2"
                                />
                                <label htmlFor="radio2">Project Manager</label>
                            </div>
                            <div className={FormCss.profItem}>
                                <input
                                    onClick={() => {
                                        setradioProf(
                                            'Front-end developer (React)'
                                        );
                                    }}
                                    type="radio"
                                    name="prof"
                                    id="radio3"
                                />
                                <label htmlFor="radio3">
                                    Front-end developer (React)
                                </label>
                            </div>
                            <div className={FormCss.profItem}>
                                <input
                                    onClick={() => {
                                        setradioProf(
                                            'Back-end developer (Python)'
                                        );
                                    }}
                                    type="radio"
                                    name="prof"
                                    id="radio4"
                                />
                                <label htmlFor="radio4">
                                    Back-end developer (Python)
                                </label>
                            </div>
                            <div className={FormCss.profItem}>
                                <input
                                    onClick={() => {
                                        setradioProf('Product Manager');
                                    }}
                                    type="radio"
                                    name="prof"
                                    id="radio5"
                                />
                                <label htmlFor="radio5">Product Manager</label>
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

export default PracticeForm;

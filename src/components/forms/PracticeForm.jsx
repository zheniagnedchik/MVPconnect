import FormCss from './Form.module.css';
import { useState } from 'react';

const PracticeForm = (props) => {
    props.ScrollTop();
    const [selected, useSelected] = useState(false);
    const [btnCheck, setBtnCheck] = useState(false);

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
            e.currentTarget[0].value === '' ||
            e.currentTarget[13].value === '' ||
            (!e.currentTarget[7].checked &&
                !e.currentTarget[8].checked &&
                !e.currentTarget[9].checked &&
                !e.currentTarget[10].checked &&
                !e.currentTarget[11].checked)
        ) {
            setBtnCheck(false);
        } else if (
            e.currentTarget[11].checked &&
            e.currentTarget[12].value === ''
        ) {
            setBtnCheck(false);
        } else {
            setBtnCheck(true);
        }
    };
    return (
        <div className={FormCss.PracticeForm}>
            <div className={FormCss.formWrapper}>
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
                                В роли кого вы планируете проходить практический
                                курс (аналог стажировки в IT компании)
                            </div>
                            <div className={FormCss.profItem}>
                                <input type="radio" name="prof" id="radio1" />
                                <label htmlFor="radio1">Business Analyst</label>
                            </div>
                            <div className={FormCss.profItem}>
                                <input type="radio" name="prof" id="radio2" />
                                <label htmlFor="radio2">Project Manager</label>
                            </div>
                            <div className={FormCss.profItem}>
                                <input type="radio" name="prof" id="radio3" />
                                <label htmlFor="radio3">
                                    Front-end developer (React)
                                </label>
                            </div>
                            <div className={FormCss.profItem}>
                                <input type="radio" name="prof" id="radio4" />
                                <label htmlFor="radio4">
                                    Back-end developer (Python)
                                </label>
                            </div>
                            <div className={FormCss.profItem}>
                                <input type="radio" name="prof" id="radio5" />
                                <label htmlFor="radio5">Product Manager</label>
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
                        <a
                            href="/"
                            className={`${
                                btnCheck ? '' : FormCss.footerBtnDisabled
                            }`}
                        >
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

export default PracticeForm;

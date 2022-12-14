import TestITStartCss from '.././TestITStart.module.css';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const TestITQuestion5 = (props) => {
    const [selected, setSelected] = useState(null);
    const checkBtn = (e) => {
        setSelected(e);
    };

    return (
        <div>
            <div className={TestITStartCss.questionWrapper}>
                <div className={TestITStartCss.questionNumber}>Вопрос 5</div>
                <div className={TestITStartCss.question}>
                    Сталкиваясь с задачей, Вы обычно?
                </div>
            </div>

            <div className={TestITStartCss.options}>
                <div className={TestITStartCss.option}>
                    <input
                        onClick={() => checkBtn(1)}
                        name="option"
                        type="radio"
                        id="option0"
                    />
                    <label htmlFor="option0">
                        скрупулезно все проверить и взвесить{' '}
                    </label>
                </div>
                <div className={TestITStartCss.option}>
                    <input
                        onClick={() => checkBtn(4)}
                        name="option"
                        type="radio"
                        id="option1"
                    />
                    <label htmlFor="option1">
                        отыскать необычное решение, придумать новый способ{' '}
                    </label>
                </div>

                <div className={TestITStartCss.option}>
                    <input
                        onClick={() => checkBtn(3)}
                        name="option"
                        type="radio"
                        id="option2"
                    />
                    <label htmlFor="option2">
                        стараетесь выслушать всех и выбрать оптимальный вариант
                    </label>
                </div>
                <div className={TestITStartCss.option}>
                    <input
                        onClick={() => checkBtn(2)}
                        name="option"
                        type="radio"
                        id="option3"
                    />
                    <label htmlFor="option3">
                        изучить всю информацию и принять решение самостоятельно{' '}
                    </label>
                </div>
            </div>

            <div className={TestITStartCss.allQuestionNumbers}>
                Вопросов 5/10{' '}
            </div>
            <NavLink
                to="/TestITQuestions/Question6"
                onClick={() => props.creatingResult(selected)}
                className={`${selected ? '' : TestITStartCss.testBtnDisabled}`}
            >
                {' '}
                <div className={TestITStartCss.testBtn}>Далее</div>
            </NavLink>
        </div>
    );
};

export default TestITQuestion5;

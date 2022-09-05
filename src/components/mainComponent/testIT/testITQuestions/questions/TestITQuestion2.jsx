import TestITStartCss from '.././TestITStart.module.css';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const TestITQuestion2 = (props) => {
    const [selected, setSelected] = useState(null);
    const checkBtn = (e) => {
        setSelected(e);
    };

    return (
        <div>
            <div className={TestITStartCss.questionWrapper}>
                <div className={TestITStartCss.questionNumber}>Вопрос 2</div>
                <div className={TestITStartCss.question}>
                    Для Вас принципиально, чтобы в Вашей работе была
                    возможность?
                </div>
            </div>

            <div className={TestITStartCss.options}>
                <div className={TestITStartCss.option}>
                    <input
                        onClick={() => checkBtn(2)}
                        name="option"
                        type="radio"
                    />
                    <label htmlFor="option">
                        проявлять фантазию и творческий подход
                    </label>
                </div>
                <div className={TestITStartCss.option}>
                    <input
                        onClick={() => checkBtn(1)}
                        name="option"
                        type="radio"
                    />
                    <label htmlFor="option">
                        создавать порядок, структурировать информацию и процессы{' '}
                    </label>
                </div>

                <div className={TestITStartCss.option}>
                    <input
                        onClick={() => checkBtn(4)}
                        name="option"
                        type="radio"
                    />
                    <label htmlFor="option">
                        четко понимать свои обязанности и возможности для
                        развития{' '}
                    </label>
                </div>
                <div className={TestITStartCss.option}>
                    <input
                        onClick={() => checkBtn(3)}
                        name="option"
                        type="radio"
                    />
                    <label htmlFor="option">
                        общаться с клиентами, влиять на других людей{' '}
                    </label>
                </div>
            </div>

            <div className={TestITStartCss.allQuestionNumbers}>
                Вопросов 2/10{' '}
            </div>
            <NavLink
                to="/TestITQuestions/Question3"
                onClick={() => props.creatingResult(selected)}
                className={`${selected ? '' : TestITStartCss.testBtnDisabled}`}
            >
                {' '}
                <div className={TestITStartCss.testBtn}>Далее</div>
            </NavLink>
        </div>
    );
};

export default TestITQuestion2;

import TestITStartCss from '.././TestITStart.module.css';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const TestITQuestion10 = (props) => {
    const [selected, setSelected] = useState(null);
    const checkBtn = (e) => {
        setSelected(e);
    };

    props.linkResultTest();
    return (
        <div>
            <div className={TestITStartCss.questionWrapper}>
                <div className={TestITStartCss.questionNumber}>Вопрос 10</div>
                <div className={TestITStartCss.question}>
                    Для Вас принципиально, чтобы в Вашей работе была
                    возможность?
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
                        проявлять фантазию и творческий подход{' '}
                    </label>
                </div>
                <div className={TestITStartCss.option}>
                    <input
                        onClick={() => checkBtn(2)}
                        name="option"
                        type="radio"
                        id="option1"
                    />
                    <label htmlFor="option1">
                        {' '}
                        создавать порядок, структурировать информацию и процессы{' '}
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
                        {' '}
                        четко понимать свои обязанности и возможности для
                        развития{' '}
                    </label>
                </div>
                <div className={TestITStartCss.option}>
                    <input
                        onClick={() => checkBtn(4)}
                        name="option"
                        type="radio"
                        id="option3"
                    />
                    <label htmlFor="option3">
                        общаться с клиентами, влиять на других людей{' '}
                    </label>
                </div>
            </div>

            <div className={TestITStartCss.allQuestionNumbers}>
                Вопросов 10/10{' '}
            </div>

            <NavLink
                to={`${props.state.linkResult}`}
                className={`${selected ? '' : TestITStartCss.testBtnDisabled}`}
            >
                {' '}
                <div className={TestITStartCss.testBtn}>Далее</div>
            </NavLink>
        </div>
    );
};

export default TestITQuestion10;

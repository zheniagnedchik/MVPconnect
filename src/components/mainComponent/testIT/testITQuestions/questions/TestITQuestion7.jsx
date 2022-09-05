import TestITStartCss from '.././TestITStart.module.css';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const TestITQuestion7 = (props) => {
    const [selected, setSelected] = useState(null);
    const checkBtn = (e) => {
        setSelected(e);
    };

    return (
        <div>
            <div className={TestITStartCss.questionWrapper}>
                <div className={TestITStartCss.questionNumber}>Вопрос 7</div>
                <div className={TestITStartCss.question}>
                    Если бы у Вас было больше свободного времени, охотнее всего
                    Вы бы использовали его, чтобы?
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
                        создавать что-то руками, усовершенствовать вещи
                    </label>
                </div>

                <div className={TestITStartCss.option}>
                    <input
                        onClick={() => checkBtn(3)}
                        name="option"
                        type="radio"
                    />
                    <label htmlFor="option">
                        заниматься развитием собственного дела, повышать
                        квалификацию
                    </label>
                </div>
                <div className={TestITStartCss.option}>
                    <input
                        onClick={() => checkBtn(4)}
                        name="option"
                        type="radio"
                    />
                    <label htmlFor="option">
                        делать что-то новое, изобретать
                    </label>
                </div>
                <div className={TestITStartCss.option}>
                    <input
                        onClick={() => checkBtn(1)}
                        name="option"
                        type="radio"
                    />
                    <label htmlFor="option">
                        читать книги, решать ребусы, задачи на логику
                    </label>
                </div>
            </div>

            <div className={TestITStartCss.allQuestionNumbers}>
                Вопросов 7/10{' '}
            </div>
            <NavLink
                to="/TestITQuestions/Question8"
                onClick={() => props.creatingResult(selected)}
                className={`${selected ? '' : TestITStartCss.testBtnDisabled}`}
            >
                {' '}
                <div className={TestITStartCss.testBtn}>Далее</div>
            </NavLink>
        </div>
    );
};

export default TestITQuestion7;

import TestITStartCss from '.././TestITStart.module.css';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const TestITQuestion6 = (props) => {
    const [selected, setSelected] = useState(null);
    const checkBtn = (e) => {
        setSelected(e);
    };

    return (
        <div>
            <div className={TestITStartCss.questionWrapper}>
                <div className={TestITStartCss.questionNumber}>Вопрос 6</div>
                <div className={TestITStartCss.question}>
                    В случае если бы довелось выбирать из списка профессий, на
                    чем бы Вы остановили выбор (без учета уровня дохода)?
                </div>
            </div>

            <div className={TestITStartCss.options}>
                <div className={TestITStartCss.option}>
                    <input
                        onClick={() => checkBtn(3)}
                        name="option"
                        type="radio"
                        id="option0"
                    />
                    <label htmlFor="option0">
                        предприниматель, маркетолог, менеджер
                    </label>
                </div>
                <div className={TestITStartCss.option}>
                    <input
                        onClick={() => checkBtn(1)}
                        name="option"
                        type="radio"
                        id="option1"
                    />
                    <label htmlFor="option1">
                        консультант, психолог, преподаватель{' '}
                    </label>
                </div>
                <div className={TestITStartCss.option}>
                    <input
                        onClick={() => checkBtn(4)}
                        name="option"
                        type="radio"
                        id="option2"
                    />
                    <label htmlFor="option2">инженер, конструктор </label>
                </div>
                <div className={TestITStartCss.option}>
                    <input
                        onClick={() => checkBtn(2)}
                        name="option"
                        type="radio"
                        id="option3"
                    />
                    <label htmlFor="option3">
                        творческая профессия (музыкант, художник, фотограф){' '}
                    </label>
                </div>
            </div>

            <div className={TestITStartCss.allQuestionNumbers}>
                Вопросов 6/10{' '}
            </div>
            <NavLink
                to="/TestITQuestions/Question7"
                onClick={() => props.creatingResult(selected)}
                className={`${selected ? '' : TestITStartCss.testBtnDisabled}`}
            >
                {' '}
                <div className={TestITStartCss.testBtn}>Далее</div>
            </NavLink>
        </div>
    );
};

export default TestITQuestion6;

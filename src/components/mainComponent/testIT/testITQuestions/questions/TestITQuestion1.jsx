import TestITStartCss from '.././TestITStart.module.css';

import { NavLink } from 'react-router-dom';

const TestITQuestion1 = () => {
    return (
        <div>
            <div className={TestITStartCss.questionWrapper}>
                <div className={TestITStartCss.questionNumber}>Вопрос 1</div>
                <div className={TestITStartCss.question}>
                    Ваш любимый предмет в школе?
                </div>
            </div>

            <div className={TestITStartCss.options}>
                <div className={TestITStartCss.option}>
                    <input name="option" type="radio" />
                    <label htmlFor="option">Вариант 1</label>
                </div>
                <div className={TestITStartCss.option}>
                    <input name="option" type="radio" />
                    <label htmlFor="option">Вариант 2</label>
                </div>
                <div className={TestITStartCss.option}>
                    <input name="option" type="radio" />
                    <label htmlFor="option">Вариант 3</label>
                </div>
                <div className={TestITStartCss.option}>
                    <input name="option" type="radio" />
                    <label htmlFor="option">Вариант 4</label>
                </div>
            </div>

            <div className={TestITStartCss.allQuestionNumbers}>
                Вопросов 1/10{' '}
            </div>
            <NavLink to="/TestITQuestions/Question2">
                {' '}
                <div className={TestITStartCss.testBtn}>Далее</div>
            </NavLink>
        </div>
    );
};

export default TestITQuestion1;

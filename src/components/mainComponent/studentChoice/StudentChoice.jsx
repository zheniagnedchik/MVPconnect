import StudentChoiceCss from './StudentChoice.module.css';

import Icon from './img/icon.svg';
import Vector from './img/Vector.svg';

const StudentChoice = () => {
    let openAccordion = (event) => {
        event.target.classList.toggle(StudentChoiceCss.active);
        if (event.target.nextElementSibling.style.maxHeight) {
            event.target.nextElementSibling.style.maxHeight = null;
        } else {
            event.target.nextElementSibling.style.maxHeight =
                event.target.nextElementSibling.scrollHeight + 'px';
        }
    };
    return (
        <div className={StudentChoiceCss.studentChoice}>
            <div className={StudentChoiceCss.wrapper}>
                <div className={StudentChoiceCss.title}>
                    Почему студенты выбирают MVP connect
                </div>
                <div className={StudentChoiceCss.accordionWrapper}>
                    {/* First */}
                    <div className={StudentChoiceCss.accordionItem}>
                        <img src={Icon} alt="" />
                        <div>
                            <div
                                onClick={openAccordion}
                                className={StudentChoiceCss.accordion}
                            >
                                Коммерческие проекты
                            </div>

                            <div className={StudentChoiceCss.panel}>
                                <p>
                                    IT- курсы и практика на коммерческих
                                    проектах и стартапах
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* Second */}
                    <div className={StudentChoiceCss.accordionItem}>
                        <img src={Icon} alt="" />
                        <div>
                            <div
                                onClick={openAccordion}
                                className={StudentChoiceCss.accordion}
                            >
                                Ментор для каждой профессии
                            </div>

                            <div className={StudentChoiceCss.panel}>
                                <p>
                                    IT- курсы и практика на коммерческих
                                    проектах и стартапах
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* Third */}
                    <div className={StudentChoiceCss.accordionItem}>
                        <img src={Icon} alt="" />
                        <div>
                            <div
                                onClick={openAccordion}
                                className={StudentChoiceCss.accordion}
                            >
                                Совмещай работу и учёбу
                            </div>
                            <div className={StudentChoiceCss.panel}>
                                <p>
                                    IT- курсы и практика на коммерческих
                                    проектах и стартапах
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* Fourth */}
                    <div className={StudentChoiceCss.accordionItem}>
                        <img src={Icon} alt="" />
                        <div>
                            <div
                                onClick={openAccordion}
                                className={StudentChoiceCss.accordion}
                            >
                                Полноценные команды (BA,Dev,UI/UX...)
                            </div>
                            <div className={StudentChoiceCss.panel}>
                                <p>
                                    IT- курсы и практика на коммерческих
                                    проектах и стартапах
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* Fifth */}
                    <div className={StudentChoiceCss.accordionItem}>
                        <img src={Icon} alt="" />
                        <div>
                            <div
                                onClick={openAccordion}
                                className={StudentChoiceCss.accordion}
                            >
                                {' '}
                                Стоимость обучения
                            </div>
                            <div className={StudentChoiceCss.panel}>
                                <p>
                                    IT- курсы и практика на коммерческих
                                    проектах и стартапах
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={StudentChoiceCss.btn}>
                <p>Записаться</p>
            </div>
        </div>
    );
};

export default StudentChoice;

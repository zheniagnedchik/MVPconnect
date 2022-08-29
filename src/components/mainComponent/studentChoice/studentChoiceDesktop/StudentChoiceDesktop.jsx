import StudentChoiceCss from './studentChoiceDesktop.module.css';
import icon1 from './img/icon1.svg';
import icon2 from './img/icon2.svg';
import icon3 from './img/icon3.svg';
import icon4 from './img/icon4.svg';
import icon5 from './img/icon5.svg';
import icon6 from './img/icon6.svg';

const StudentChoiceDesktop = () => {
    return (
        <div className={StudentChoiceCss.studentChoice}>
            <div className={StudentChoiceCss.mainTitle}>
                {' '}
                <p> Почему студенты выбирают MVP connect</p>
            </div>
            <div className={StudentChoiceCss.mainSubTitle}> </div>

            <div className={StudentChoiceCss.wrapperTable}>
                <div className={StudentChoiceCss.cell1}>
                    <div className={StudentChoiceCss.imgWrapper}>
                        {' '}
                        <img src={icon1} alt="" />
                    </div>
                    <div className={StudentChoiceCss.titleWrapper}>
                        <div className={StudentChoiceCss.title}>
                            Коммерческие проекты
                        </div>
                        <div className={StudentChoiceCss.subTitle}>
                            Большие проекты, смелые идеи и новые технологии
                            станут частью твоей работы. Вы сразу получаете
                            реальные задачи, которые учат, развивают и увлекают.
                        </div>
                    </div>
                </div>
                <div className={StudentChoiceCss.cell2}>
                    {' '}
                    <div className={StudentChoiceCss.imgWrapper}>
                        {' '}
                        <img src={icon2} alt="" />
                    </div>
                    <div className={StudentChoiceCss.titleWrapper}>
                        <div className={StudentChoiceCss.title}>
                            Ментор для каждой профессии
                        </div>
                        <div className={StudentChoiceCss.subTitle}>
                            Большие проекты, смелые идеи и новые технологии
                            станут частью твоей работы. Вы сразу получаете
                            реальные задачи, которые учат, развивают и увлекают.
                        </div>
                    </div>
                </div>
                <div className={StudentChoiceCss.cell3}>
                    {' '}
                    <div className={StudentChoiceCss.imgWrapper}>
                        {' '}
                        <img src={icon3} alt="" />
                    </div>
                    <div className={StudentChoiceCss.titleWrapper}>
                        <div className={StudentChoiceCss.title}>
                            Совмещай работу и учёбу
                        </div>
                        <div className={StudentChoiceCss.subTitle}>
                            Большие проекты, смелые идеи и новые технологии
                            станут частью твоей работы. Вы сразу получаете
                            реальные задачи, которые учат, развивают и увлекают.
                        </div>
                    </div>
                </div>
                <div className={StudentChoiceCss.cell4}>
                    {' '}
                    <div className={StudentChoiceCss.imgWrapper}>
                        {' '}
                        <img src={icon4} alt="" />
                    </div>
                    <div className={StudentChoiceCss.titleWrapper}>
                        <div className={StudentChoiceCss.title}>
                            Полноценные команды
                        </div>
                        <div className={StudentChoiceCss.subTitle}>
                            Большие проекты, смелые идеи и новые технологии
                            станут частью твоей работы. Вы сразу получаете
                            реальные задачи, которые учат, развивают и увлекают.
                        </div>
                    </div>
                </div>
                <div className={StudentChoiceCss.cell5}>
                    {' '}
                    <div className={StudentChoiceCss.imgWrapper}>
                        {' '}
                        <img src={icon5} alt="" />
                    </div>
                    <div className={StudentChoiceCss.titleWrapper}>
                        <div className={StudentChoiceCss.title}>
                            Стоимость обучения
                        </div>
                        <div className={StudentChoiceCss.subTitle}>
                            Большие проекты, смелые идеи и новые технологии
                            станут частью твоей работы. Вы сразу получаете
                            реальные задачи, которые учат, развивают и увлекают.
                        </div>
                    </div>
                </div>
                <div className={StudentChoiceCss.cell6}>
                    {' '}
                    <div className={StudentChoiceCss.imgWrapper}>
                        {' '}
                        <img src={icon6} alt="" />
                    </div>
                    <div className={StudentChoiceCss.titleWrapper}>
                        <div className={StudentChoiceCss.title}>
                            Ментор для каждой профессии
                        </div>
                        <div className={StudentChoiceCss.subTitle}>
                            Большие проекты, смелые идеи и новые технологии
                            станут частью твоей работы. Вы сразу получаете
                            реальные задачи, которые учат, развивают и увлекают.
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

export default StudentChoiceDesktop;

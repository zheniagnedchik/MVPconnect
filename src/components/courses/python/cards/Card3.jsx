import CardsCss from './Cards.module.css';
import { NavLink } from 'react-router-dom';
const Card3 = (props) => {
    return (
        <div className={CardsCss.Card}>
            <div className={CardsCss.CardWrapper}>
                <div className={CardsCss.monthPrice}>
                    В месяц 400 <p> BYN</p>
                </div>
                <div className={CardsCss.currency}>
                    <p className={CardsCss.currency1}>9 270 RUB</p>{' '}
                    <p className={CardsCss.currency2}> /</p>{' '}
                    <p className={CardsCss.currency3}> 159 USD *</p>{' '}
                </div>
                <div className={CardsCss.allPrice}>
                    Полная стоимость курса со скидкой:
                    <br />
                    <p>
                        {' '}
                        <b>
                            {' '}
                            1200 BYN <br /> 27 810 RUB / 477 USD{' '}
                        </b>{' '}
                    </p>
                    Продолжительность - 3 месяца. <br />
                    Возможна оплата в 3 этапа. <br />
                    При приобретении нескольких модулей курса предоставляются
                    скидки:
                    <br />
                    Скидка за 2 модуля -{' '}
                    <p className={CardsCss.redPrice}> 200</p> BYN
                    <br />
                    Скидка за 3 модуля -{' '}
                    <p className={CardsCss.redPrice}> 500</p> BYN
                    <br />
                    <br />
                    Работаем с ЕРИП. <br /> *{' '}
                    <i> - цены в валюте указаны справочно </i>
                </div>
                <NavLink
                    to="/CourseForm"
                    onClick={() => props.CheckNumberSplider(2)}
                >
                    <div className={CardsCss.cardBtn}>Записаться на курс</div>{' '}
                </NavLink>
            </div>
        </div>
    );
};

export default Card3;

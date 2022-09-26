import CardsCss from './Cards.module.css';
import { NavLink } from 'react-router-dom';

const MaxCard = (props) => {
    return (
        <div className={CardsCss.Card}>
            <div className={CardsCss.CardWrapper}>
                <div className={CardsCss.monthPrice}>
                    В месяц 357 <p> BYN</p>
                </div>
                <div className={CardsCss.currency}>
                    <p className={CardsCss.currency1}>8 300 RUB</p>{' '}
                    <p className={CardsCss.currency2}> /</p>{' '}
                    <p className={CardsCss.currency3}>141 USD *</p>{' '}
                </div>{' '}
                <div className={CardsCss.allPrice}>
                    Полная стоимость курса со скидкой:
                    <br />
                    <p>
                        {' '}
                        <b>
                            {' '}
                            2 499 BYN <br /> 58 100 RUB / 987 USD{' '}
                        </b>{' '}
                    </p>
                    <br />
                    Ваша скидка составляет
                    <br />
                    <p className={CardsCss.redPrice}>
                        {' '}
                        501 BYN <br />
                        11 610 RUB / 198 USD *{' '}
                    </p>{' '}
                    <br />
                    Продолжительность - 7,5 месяцев. <br />
                    Возможна оплата в 7 этапов. <br />
                    Работаем с ЕРИП. <br /> *{' '}
                    <i> - цены в валюте указаны справочно </i>
                </div>{' '}
                <NavLink
                    to="/CourseForm"
                    onClick={() => props.CheckNumberSplider(1)}
                >
                    {' '}
                    <div className={CardsCss.cardBtn}>
                        Записаться на курс
                    </div>{' '}
                </NavLink>
            </div>
        </div>
    );
};

export default MaxCard;

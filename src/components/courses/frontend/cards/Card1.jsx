import CardsCss from './Cards.module.css';
import { NavLink } from 'react-router-dom';

const Card1 = (props) => {
    return (
        <div className={CardsCss.Card}>
            <div className={CardsCss.CardWrapper}>
                <div className={CardsCss.monthPrice}>
                    В месяц 475 <p> BYN</p>
                </div>
                <div className={CardsCss.currency}>
                    <p className={CardsCss.currency1}>11 000 RUB</p>{' '}
                    <p className={CardsCss.currency2}> /</p>{' '}
                    <p className={CardsCss.currency3}> 190 USD *</p>{' '}
                </div>
                <div className={CardsCss.allPrice}>
                    Полная стоимость курса со скидкой:
                    <br />
                    <p>
                        {' '}
                        <b>
                            {' '}
                            950 BYN <br /> 22 000 RUB / 380 USD{' '}
                        </b>{' '}
                    </p>
                    Продолжительность - 2,5 месяца. <br />
                    Возможна оплата в 2 этапа. <br />
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
                    onClick={() => props.CheckNumberSplider(1)}
                >
                    <div className={CardsCss.cardBtn}>Записаться на курс</div>{' '}
                </NavLink>
            </div>
        </div>
    );
};

export default Card1;

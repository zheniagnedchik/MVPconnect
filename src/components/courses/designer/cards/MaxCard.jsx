import CardsCss from './Cards.module.css';

const MaxCard = () => {
    return (
        <div className={CardsCss.Card}>
            <div className={CardsCss.CardWrapper}>
                <div className={CardsCss.monthPrice}>
                    В месяц <br />
                    700 <p> BYN</p>
                </div>
                <div className={CardsCss.currency}>
                    <p className={CardsCss.currency1}>15 150 RUB</p>{' '}
                    <p className={CardsCss.currency2}> /</p>{' '}
                    <p className={CardsCss.currency3}>277 USD *</p>{' '}
                </div>{' '}
                <div className={CardsCss.allPrice}>
                    Полная стоимость курса со скидкой:
                    <br />
                    <p>
                        {' '}
                        <b>
                            {' '}
                            4 900 BYN <br /> 106 045 RUB / 1 937 USD{' '}
                        </b>{' '}
                    </p>
                    <br />
                    Ваша скидка составляет
                    <br />
                    <p className={CardsCss.redPrice}>
                        {' '}
                        1 050 BYN <br />
                        22 724 RUB / 415 USD *{' '}
                    </p>{' '}
                    <br />
                    Продолжительность - 7 месяцев. <br />
                    Возможна оплата в 7 этапов. <br />
                    Работаем с ЕРИП. <br /> *{' '}
                    <i> - цены в валюте указаны справочно </i>
                </div>
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSdZZpKxYcmL6XEKL2r7_KQN4al--1MCFCcBhA3JCcmJlVDHLQ/viewform">
                    {' '}
                    <div className={CardsCss.cardBtn}>
                        Записаться на курс
                    </div>{' '}
                </a>
            </div>
        </div>
    );
};

export default MaxCard;

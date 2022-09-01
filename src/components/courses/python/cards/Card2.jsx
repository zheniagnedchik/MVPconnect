import CardsCss from './Cards.module.css';

const Card2 = () => {
    return (
        <div className={CardsCss.Card}>
            <div className={CardsCss.CardWrapper}>
                <div className={CardsCss.monthPrice}>
                    В месяц <br />
                    425 <p> BYN</p>
                </div>
                <div className={CardsCss.currency}>
                    <p className={CardsCss.currency1}>9 850 RUB</p>{' '}
                    <p className={CardsCss.currency2}> /</p>{' '}
                    <p className={CardsCss.currency3}> 168 USD *</p>{' '}
                </div>
                <div className={CardsCss.allPrice}>
                    Полная стоимость курса со скидкой:
                    <br />
                    <p>
                        {' '}
                        <b>
                            {' '}
                            850 BYN <br /> 19 700 RUB / 336 USD{' '}
                        </b>{' '}
                    </p>
                    Продолжительность - 2 месяца. <br />
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
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSeASX9u0xCzgvDeLxKqwMXpx2c8qyBCGFN4G17faCjnzT2VSQ/viewform">
                    {' '}
                    <div className={CardsCss.cardBtn}>
                        Записаться на курс
                    </div>{' '}
                </a>
            </div>
        </div>
    );
};

export default Card2;

import CardsCss from './Cards.module.css';

const Card2 = () => {
    return (
        <div className={CardsCss.Card}>
            <div className={CardsCss.CardWrapper}>
                <div className={CardsCss.monthPrice}>
                    В месяц <br />
                    930 <p> BYN</p>
                </div>
                <div className={CardsCss.currency}>
                    <p className={CardsCss.currency1}>20 125 RUB</p>{' '}
                    <p className={CardsCss.currency2}> /</p>{' '}
                    <p className={CardsCss.currency3}> 368 USD *</p>{' '}
                </div>
                <div className={CardsCss.allPrice}>
                    Полная стоимость курса со скидкой:
                    <br />
                    <p>
                        {' '}
                        <b>
                            {' '}
                            1 860 BYN <br /> 40 250 RUB / 736 USD{' '}
                        </b>{' '}
                    </p>
                    Продолжительность - 1,5 месяца. <br />
                    Возможна оплата в 2 этапа. <br />
                    При приобретении нескольких модулей курса предоставляются
                    скидки:
                    <br />
                    Скидка за 2 модуля -{' '}
                    <p className={CardsCss.redPrice}> 300 </p> BYN
                    <br />
                    Скидка за 3 модуля -{' '}
                    <p className={CardsCss.redPrice}> 1050 </p> BYN
                    <br />
                    <br />
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

export default Card2;

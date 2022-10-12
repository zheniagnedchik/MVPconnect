import CardsCss from './Cards.module.css';
import { NavLink } from 'react-router-dom';
const Card2 = (props) => {
    return (
        <div className={CardsCss.Card}>
            <div className={CardsCss.CardWrapper}>
                <div
                    className={`${CardsCss.stock} ${
                        props.Prices.prices.pythone.stock === false
                            ? CardsCss.active
                            : ''
                    }`}
                >
                    Акция!
                </div>
                <div
                    className={`${CardsCss.discount} ${
                        props.Prices.prices.pythone.stock === false
                            ? CardsCss.active
                            : ''
                    }`}
                >
                    Скидка - {props.Prices.prices.pythone.discount}%
                </div>
                <div
                    className={`${CardsCss.wrapperPrice} ${
                        props.Prices.prices.pythone.stock === false
                            ? CardsCss.PriceActive
                            : ''
                    }`}
                >
                    {' '}
                    <div className={CardsCss.commonPrice}>
                        <p>Обычная цена:</p>
                        <div className={CardsCss.Price}>
                            {props.localCurrency === ''
                                ? Math.round(
                                      props.Prices.prices.pythone.professional *
                                          (1 + 2 / 100)
                                  )
                                : Math.round(
                                      props.Prices.prices.pythone.professional *
                                          props.actualCurrency *
                                          (1 + 2 / 100)
                                  )}
                        </div>{' '}
                    </div>
                    <div className={CardsCss.discountPrice}>
                        <p>Цена по акции:</p>
                        <div className={CardsCss.monthPrice}>
                            {props.localCurrency === ''
                                ? Math.round(
                                      Math.round(
                                          props.Prices.prices.pythone
                                              .professional
                                      ) *
                                          (1 -
                                              props.Prices.prices.pythone
                                                  .discount /
                                                  100) *
                                          (1 + 2 / 100)
                                  )
                                : Math.round(
                                      Math.round(
                                          props.Prices.prices.pythone
                                              .professional *
                                              props.actualCurrency
                                      ) *
                                          (1 -
                                              props.Prices.prices.pythone
                                                  .discount /
                                                  100) *
                                          (1 + 2 / 100)
                                  )}{' '}
                        </div>{' '}
                    </div>
                </div>
                <div className={CardsCss.monthCurrency}>
                    {props.localCurrency === '' ? 'USD' : props.localCurrency}/в
                    месяц
                </div>
                <div className={CardsCss.descr}>
                    <ul>
                        <li>Оплата в 2 этапа</li>
                        <li>Скидки за нескольких модулей</li>
                    </ul>
                </div>
                <div
                    onClick={() => {
                        props.CheckNumberSplider(2);
                        props.changeActiveCourses();
                    }}
                >
                    {' '}
                    <div className={CardsCss.cardBtn}>
                        Записаться на курс
                    </div>{' '}
                </div>
            </div>
        </div>
    );
};

export default Card2;

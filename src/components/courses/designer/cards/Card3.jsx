import CardsCss from './Cards.module.css';
import { NavLink } from 'react-router-dom';

const Card3 = (props) => {
    return (
        <div className={CardsCss.Card}>
            <div className={CardsCss.CardWrapper}>
                <div
                    className={`${CardsCss.stock} ${
                        props.Prices.prices.designer.stock === false
                            ? CardsCss.active
                            : ''
                    }`}
                >
                    Акция!
                </div>
                <div
                    className={`${CardsCss.discount} ${
                        props.Prices.prices.designer.stock === false
                            ? CardsCss.active
                            : ''
                    }`}
                >
                    Скидка - {props.Prices.prices.designer.discount}%
                </div>
                <div
                    className={`${CardsCss.wrapperPrice} ${
                        props.Prices.prices.designer.stock === false
                            ? CardsCss.PriceActive
                            : ''
                    }`}
                >
                    {' '}
                    <div className={CardsCss.commonPrice}>
                        <p>Обычная цена:</p>
                        <div className={CardsCss.Price}>
                            {Math.round(
                                props.Prices.prices.designer.practical *
                                    props.actualCurrency *
                                    (1 + 2 / 100)
                            )}
                        </div>{' '}
                    </div>
                    <div className={CardsCss.discountPrice}>
                        <p>Цена по акции:</p>
                        <div className={CardsCss.monthPrice}>
                            {Math.round(
                                Math.round(
                                    props.Prices.prices.designer.practical *
                                        props.actualCurrency
                                ) *
                                    (1 -
                                        props.Prices.prices.designer.discount /
                                            100) *
                                    (1 + 2 / 100)
                            )}{' '}
                        </div>{' '}
                    </div>
                </div>
                <div className={CardsCss.monthCurrency}>BYN/в месяц</div>
                <div className={CardsCss.descr}>
                    <ul>
                        <li>Оплата в 2 этапа</li>
                        <li>Скидки за нескольких модулей</li>
                    </ul>
                </div>
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

export default Card3;

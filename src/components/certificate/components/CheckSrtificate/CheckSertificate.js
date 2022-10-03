import React, { useState } from 'react';

import './CheckSertificate.css';
import Example from '../../assets/icons/example.jpg';

import { Navigate, useNavigate } from 'react-router-dom';
import axios from 'axios';

import BurgerMenuDesktop from '../../../mainComponent/mainPage/burgerMenuDesktop/BurgerMenuDesktop';
import BurgerMenu from '../../../mainComponent/mainPage/burgerMenu/BurgerMenu';
import MvpConnectDesktop from '../../../mainComponent/mvpConnect/mvpConnectDesktop/MvpConnectDesktop';
import MvpConnect from '../../../mainComponent/mvpConnect/MvpConnect';

const CheckSertificate = (props) => {
    const { innerWidth } = window;

    console.log(window);

    const navigate = useNavigate();
    const [error, setError] = useState(false);
    const getSertificare = async (e) => {
        if (e.length === 7) {
            const sertificate = await axios.get(
                `https://mvpconnect.herokuapp.com/getSertificate?${e}`
            );
            console.log(sertificate);
            if (sertificate.data) {
                navigate('/certificate', { state: sertificate.data });
            } else {
                setError(true);
            }
        }
    };
    return (
        <div className="check__body">
            {props.state.displaySize.isDesktop ? (
                <BurgerMenuDesktop />
            ) : (
                <BurgerMenu />
            )}
            <div className="check_header">
                Страница проверки сертификатов выпускников MVP connect
            </div>
            <div className="check__description">
                Для просмотра информации о сертификате, дополнительных данных,
                полученных во время обучения, введите ID номер, размещенный в
                правой нижней части сертификата.
            </div>
            <div className="check__input-container">
                <div className="check__input-title">ID</div>
                <div className="check__input-border">
                    <input
                        type="text"
                        className="check__input"
                        maxLength={7}
                        // pattern="//[A - Za - z]//"

                        onChange={(e) => getSertificare(e.target.value)}
                    />
                </div>
            </div>
            {error && (
                <div className="check__error">
                    Указанный ID отсутствует в базе данных выданных компанией
                    MVP connect сертификатов. Проверьте, пожалуйста, введенные
                    данные. Если доступ к сертификату так и не был получен,
                    скорее всего заявитель не проходил обучение в нашей
                    компании, а сертификат не действителен. Для устранения
                    возможной технической ошибки просим связаться по номеру
                    +37544 780 12 36 или написать обращение на info@mvp.by
                </div>
            )}

            <img src={Example} className="check__example-img" />
            {props.state.displaySize.isDesktop ? (
                <MvpConnectDesktop />
            ) : (
                <MvpConnect />
            )}

            <div style={{ width: '100%', height: '40px' }}></div>
        </div>
    );
};

export default CheckSertificate;

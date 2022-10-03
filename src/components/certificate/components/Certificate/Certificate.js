import React from 'react';
import CertifiteImg from '../../assets/icons/certificate.png';
import './Certificate.css';
const Certificate = ({ img }) => {
    return (
        <div className="certificate_container">
            <div className="certificate__img-container">
                <div className="certificate__control-container">
                    <div className="certificate__control-item">Скачать</div>
                    <div className="certificate__control-item">Поделиться</div>
                    <div className="certificate__control-item">Печать</div>
                </div>
                <img src={img} className="certificate__img" alt="certificate" />
            </div>
        </div>
    );
};

export default Certificate;

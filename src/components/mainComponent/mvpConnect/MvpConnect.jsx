import MvpConnectCss from './MvpConnect.module.css';
import Vector from './img/Vector.svg';
import MvpConnectImg from './img/MvpConnect.svg';
import Participants from './img/participants.svg';
import { HashLink as Link } from 'react-router-hash-link';

const MvpConnect = () => {
    return (
        <div className={MvpConnectCss.mvpConnect}>
            <div className={MvpConnectCss.linkWrapper}>
                <Link to="#Up" smooth style={{ textDecoration: 'none' }}>
                    <div className={MvpConnectCss.down}>
                        <div className={MvpConnectCss.arrow}>
                            <img src={Vector} alt="" />
                        </div>
                        Вверх
                    </div>
                </Link>
            </div>
            <div className={MvpConnectCss.mvpImg}>
                {' '}
                <img src={MvpConnectImg} alt="" />
            </div>
            <div className={MvpConnectCss.info}>
                <a href="tel:+375447801236">
                    {' '}
                    <div className={MvpConnectCss.number}>
                        +375 44 780 12 36
                    </div>
                </a>
                <a href="mailto:info@mvp.by">
                    {' '}
                    <div className={MvpConnectCss.mail}>info@mvp.by</div>{' '}
                </a>
                {/* <div className={MvpConnectCss.participant}>
                    <img src={Participants} alt="" />
                </div> */}
            </div>
        </div>
    );
};

export default MvpConnect;

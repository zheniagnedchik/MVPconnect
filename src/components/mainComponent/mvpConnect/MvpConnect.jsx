import MvpConnectCss from './MvpConnect.module.css';
import Vector from './img/Vector.svg';
import Participants from './img/participants.svg';
import { HashLink as Link } from 'react-router-hash-link';

const MvpConnect = () => {
    return (
        <div className={MvpConnectCss.mvpConnect}>
            <div className={MvpConnectCss.linkWrapper}>
                <Link to="#mainPage" smooth style={{ textDecoration: 'none' }}>
                    <div className={MvpConnectCss.down}>
                        <div className={MvpConnectCss.arrow}>
                            <img src={Vector} alt="" />
                        </div>
                        Вверх
                    </div>
                </Link>
            </div>
            <div className={MvpConnectCss.info}>
                <div className={MvpConnectCss.number}>+375 44 780 12 36</div>
                <div className={MvpConnectCss.mail}>info@mvp.by</div>
                <div className={MvpConnectCss.participant}>
                    <img src={Participants} alt="" />
                </div>
            </div>
        </div>
    );
};

export default MvpConnect;

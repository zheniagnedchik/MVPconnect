import MvpConnectDesktopCss from './MvpConnectDesktop.module.css';
import Vk from './img/socialNetwork/vk.svg';
import Facebook from './img/socialNetwork/f.svg';
import Inst from './img/socialNetwork/inst.svg';
import In from './img/socialNetwork/in.svg';
import Tel from './img/socialNetwork/teleg.svg';
import MvpConnectImg from './img/MvpConnect.svg';
import Participants from './img/participants.svg';
import Job from './img/job.svg';

const MvpConnectDesktop = () => {
    return (
        <div className={MvpConnectDesktopCss.MvpConnectDesktop}>
            <div className={MvpConnectDesktopCss.MvpConnectDesktopWrapper}>
                <div className={MvpConnectDesktopCss.socialNetwork}>
                    <div className={MvpConnectDesktopCss.mvpImg}>
                        {' '}
                        <img src={MvpConnectImg} alt="" />
                    </div>
                    <div className={MvpConnectDesktopCss.number}>
                        +375 44 780 12 36
                    </div>
                    <div className={MvpConnectDesktopCss.socialNetworkIcons}>
                        <a href="https://vk.com/">
                            {' '}
                            <img src={Vk} alt="" />{' '}
                        </a>
                        <a href="https://www.facebook.com/people/Mvp-connect/100083144028399/">
                            {' '}
                            <img src={Facebook} alt="" />
                        </a>
                        <a href="https://www.instagram.com/mvp.connect/">
                            {' '}
                            <img src={Inst} alt="" />
                        </a>
                        <a href="https://www.linkedin.com/company/mvp-connect/">
                            {' '}
                            <img src={In} alt="" />{' '}
                        </a>
                        <a href="https://t.me/alexander_balodis">
                            {' '}
                            <img src={Tel} alt="" />{' '}
                        </a>
                    </div>
                </div>
                <div className={MvpConnectDesktopCss.infoWrapper}>
                    <div className={MvpConnectDesktopCss.info}>
                        ООО “ЭмВиПи коннект”
                        <br /> 220051, г. Минск, ул. Сергея Есенина, 130,
                        кабинет 3
                        <br />
                        УНП: 193620230, ОКПО: 505945425000 BY06 <br />
                        ALFA 3012 2B99 8900 1027 0000, БИК: ALFABY2X <br /> в
                        ЗАО "Альфа-Банк", 220013 г.Минск, ул.Сурганова, 43-47.
                    </div>

                    <div className={MvpConnectDesktopCss.buttonWrapper}>
                        <div className={MvpConnectDesktopCss.buttonCourse}>
                            <p> Курсы</p>
                        </div>
                        <div className={MvpConnectDesktopCss.buttonPractise}>
                            {' '}
                            <p> Практика</p>
                        </div>
                    </div>
                </div>
                <div className={MvpConnectDesktopCss.jobWrapper}>
                    {' '}
                    <div className={MvpConnectDesktopCss.job}>
                        {' '}
                        <img src={Job} alt="" />
                    </div>
                </div>
            </div>
            <div className={MvpConnectDesktopCss.participant}>
                <img src={Participants} alt="" />
            </div>
        </div>
    );
};

export default MvpConnectDesktop;

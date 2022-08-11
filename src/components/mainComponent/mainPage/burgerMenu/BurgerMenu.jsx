import BurgerMenuCss from './BurgerMenu.module.css';
import MvpIcon from './img/MvpConnectIcon.svg';
import BurgerIcon from './img/BurgerIcon.svg';
import { useRef } from 'react';

const BurgerMenu = (props) => {
    const checkScroll = useRef();
    const fixedBurgerMenu = () => {
        if (
            (window.scrollY == window.innerHeight &&
                checkScroll.current.style.position == 'absolute') ||
            (window.scrollY > window.innerHeight &&
                checkScroll.current.style.position == 'absolute')
        ) {
            checkScroll.current.style.position = 'fixed';
        } else {
            checkScroll.current.style.position = 'absolute';
        }
    };
    window.addEventListener('scroll', fixedBurgerMenu);

    return (
        <div ref={checkScroll} className={BurgerMenuCss.burgerMenu}>
            <div className={BurgerMenuCss.mvpIcon}>
                <img src={MvpIcon} alt="" />
            </div>
            <div className={BurgerMenuCss.burgerIcon}>
                <img src={BurgerIcon} alt="" />
            </div>
        </div>
    );
};
export default BurgerMenu;

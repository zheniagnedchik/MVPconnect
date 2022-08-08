import BurgerMenuCss from './BurgerMenu.module.css'
import MvpIcon from './img/MvpConnectIcon.svg'
import BurgerIcon from './img/BurgerIcon.svg'

const BurgerMenu = () => {
    return (
        <div className={BurgerMenuCss.burgerMenu}>
            <div className={BurgerMenuCss.mvpIcon}>
                <img src={MvpIcon} alt="" />
            </div>
            <div className={BurgerMenuCss.burgerIcon}>
                <img src={BurgerIcon} alt="" />
            </div>
        </div>
    )
}
export default BurgerMenu

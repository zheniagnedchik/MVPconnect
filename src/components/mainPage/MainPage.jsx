import BurgerMenu from './burgerMenu/BurgerMenu'
import MainPageCss from './MainPage.module.css'
import Vector from './img/Vector.svg'

const MainPage = () => {
    return (
        <div className={MainPageCss.mainWrapper}>
            <div className={MainPageCss.mainPage}>
                <BurgerMenu />

                <div className={MainPageCss.title}>MVP connect</div>
                <div className={MainPageCss.titleDescr}>
                    IT- курсы и практика на коммерческих проектах и стартапах
                </div>
                <div className={MainPageCss.course}>
                    <p>Курсы</p>
                </div>
                <div className={MainPageCss.practice}>
                    <p>Практика</p>
                </div>

                <div className={MainPageCss.down}>
                    Вниз{' '}
                    <div className={MainPageCss.arrow}>
                        <img src={Vector} alt="" />
                    </div>{' '}
                </div>
            </div>
        </div>
    )
}
export default MainPage

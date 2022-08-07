import BurgerMenu from './burgerMenu/BurgerMenu';
import MainPageCss from './MainPage.module.css';


const MainPage = ()=> {

    return(
        <div className={MainPageCss.mainWrapper}>
        <div className={MainPageCss.mainPage}>
                <BurgerMenu/>      
                
        </div>
        </div>
    )


}
export default MainPage;
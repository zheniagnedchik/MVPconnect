import BurgerMenu from './burgerMenu/BurgerMenu';
import BurgerMenuDesktop from './burgerMenuDesktop/BurgerMenuDesktop';
import MainPageCss from './MainPage.module.css';
import Vector from './img/Vector.svg';
import { HashLink as Link } from 'react-router-hash-link';

const MainPage = (props) => {
    return (
        <div className={MainPageCss.mainWrapper} id="mainPage">
            <div className={MainPageCss.mainPage}>
                {props.displaySize.isDesktop ? (
                    <BurgerMenuDesktop />
                ) : (
                    <BurgerMenu />
                )}

                <div className={MainPageCss.title}>MVP connect</div>
                <div className={MainPageCss.subtitle}>
                    IT- курсы и практика на коммерческих проектах и стартапах
                </div>
                <div className={MainPageCss.course}>
                    <p>
                        {props.displaySize.isDesktop ? 'Выбрать курс' : 'Курсы'}
                    </p>
                </div>
                <div className={MainPageCss.practice}>
                    <p>
                        {props.displaySize.isDesktop
                            ? 'Перейти к практике'
                            : 'Практика'}
                    </p>
                </div>
                {props.displaySize.isDesktop
                    ? ''
                    : `${(
                          <Link
                              to="#studentChoice"
                              smooth
                              style={{ textDecoration: 'none' }}
                          >
                              {' '}
                              <div className={MainPageCss.down}>
                                  Вниз
                                  <div className={MainPageCss.arrow}>
                                      <img src={Vector} alt="" />
                                  </div>
                              </div>
                          </Link>
                      )}`}
            </div>
        </div>
    );
};
export default MainPage;

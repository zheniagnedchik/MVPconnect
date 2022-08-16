import BurgerMenuCss from './BurgerMenu.module.css';
import MvpIcon from './img/MvpConnectIcon.svg';
import React from 'react';
import BurgerButton from './burgerButton/BurgerButton';
import Menu from './menu/Menu';

class BurgerMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            prevScrollpos: window.pageYOffset,
            pastScrollpos: window.innerHeight,
            visible: false,
            menuActive: false,
        };
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    // position fixed for burger menu

    handleScroll = () => {
        const { pastScrollpos } = this.state;
        const currentScrollPos = window.pageYOffset;
        const visible = currentScrollPos > pastScrollpos * 0.121 - 1;
        this.setState({
            prevScrollpos: currentScrollPos,
            visible,
        });
    };
    //  Open burger menu
    updateMenu = () => {
        const menuActive = !this.state.menuActive;
        this.setState({ menuActive });
    };

    render() {
        return (
            <div
                className={`${BurgerMenuCss.burgerMenu} ${
                    this.state.visible ? BurgerMenuCss.fixed : ''
                }`}
            >
                {' '}
                <Menu menuActive={this.state.menuActive} />
                <div
                    className={`${BurgerMenuCss.mvpIcon} ${
                        this.state.visible ? BurgerMenuCss.fixedIcon : ''
                    }`}
                >
                    <img
                        className={`${BurgerMenuCss.mvpIconImg} ${
                            this.state.visible ? BurgerMenuCss.fixedImg : ''
                        }`}
                        src={MvpIcon}
                        alt=""
                    />
                </div>
                <div className={BurgerMenuCss.burgerIcon}>
                    <BurgerButton
                        menuActive={this.state.menuActive}
                        active={this.state.visible}
                        updateMenu={this.updateMenu}
                    />
                </div>
            </div>
        );
    }
}
export default BurgerMenu;
